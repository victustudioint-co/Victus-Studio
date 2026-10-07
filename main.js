/* VICTUS STUDIO: main script. Beginners: you do not need to edit this file. */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- Mobile menu ---------- */
  var burger = $("burger"), menu = $("menu");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("lock", open);
  }
  burger.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 760) setMenu(false); });

  /* ---------- Placeholder shown when an image file is missing ---------- */
  function placeholder(title) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b0b3a"/><stop offset="1" stop-color="#050505"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><path d="M-50 600L250 0h120L70 600z" fill="#8b3dff" opacity=".35"/><text x="400" y="310" fill="#fff" font-family="Arial,sans-serif" font-size="34" font-weight="700" text-anchor="middle">' + esc(title) + '</text><text x="400" y="355" fill="#c9a8ff" font-family="Arial,sans-serif" font-size="22" text-anchor="middle">Add your image in projects.js</text></svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  function safeImg(img, title) {
    img.addEventListener("error", function () { img.src = placeholder(title); }, { once: true });
  }

  /* ---------- Category lookup ---------- */
  var catLabel = {}, catGroup = {};
  CATEGORY_GROUPS.forEach(function (g) {
    g.items.forEach(function (c) { catLabel[c.id] = c.label; catGroup[c.id] = g.group; });
  });

  /* ---------- Filtering ---------- */
  var state = { type: "all", value: "" };   // type: all | featured | latest | group | cat
  var latestSet = PROJECTS.slice()
    .sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); })
    .slice(0, LATEST_COUNT);

  function matches(p) {
    if (state.type === "all") return true;
    if (state.type === "featured") return !!p.featured;
    if (state.type === "latest") return latestSet.indexOf(p) > -1;
    if (state.type === "group") return catGroup[p.category] === state.value;
    return p.category === state.value;
  }

  var filters = $("filters"), subfilters = $("subfilters"), grid = $("grid"), empty = $("empty");

  function btn(label, on, attrs) {
    return '<button type="button" class="fbtn' + (on ? " on" : "") + '" ' + attrs + ' aria-pressed="' + on + '">' + esc(label) + "</button>";
  }
  function drawFilters() {
    var activeGroup = state.type === "group" ? state.value : (state.type === "cat" ? catGroup[state.value] : "");
    var h = btn("All Works", state.type === "all", 'data-t="all"') +
            btn("Featured Works", state.type === "featured", 'data-t="featured"') +
            btn("Latest Works", state.type === "latest", 'data-t="latest"');
    CATEGORY_GROUPS.forEach(function (g) {
      h += btn(g.group, activeGroup === g.group, 'data-t="group" data-v="' + esc(g.group) + '"');
    });
    filters.innerHTML = h;

    var sub = "";
    CATEGORY_GROUPS.forEach(function (g) {
      if (g.group !== activeGroup) return;
      sub += btn("All " + g.group, state.type === "group", 'data-t="group" data-v="' + esc(g.group) + '"');
      g.items.forEach(function (c) {
        sub += btn(c.label, state.type === "cat" && state.value === c.id, 'data-t="cat" data-v="' + esc(c.id) + '"');
      });
    });
    subfilters.innerHTML = sub;
  }

  function cardHTML(p, i) {
    return '<button type="button" class="card" data-i="' + i + '">' +
      '<div class="card-img"><img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy"></div>' +
      '<div class="card-body"><span class="chip">' + esc(catLabel[p.category] || p.category) + "</span>" +
      "<h3>" + esc(p.title) + "</h3>" + (p.description ? "<p>" + esc(p.description) + "</p>" : "") + "</div></button>";
  }

  function drawGrid() {
    var list = PROJECTS.map(function (p, i) { return { p: p, i: i }; }).filter(function (x) { return matches(x.p); });
    grid.innerHTML = list.map(function (x) { return cardHTML(x.p, x.i); }).join("");
    Array.prototype.forEach.call(grid.querySelectorAll(".card"), function (card) {
      safeImg(card.querySelector("img"), PROJECTS[card.dataset.i].title);
      card.classList.add("hide");   // fade-in after filtering
      requestAnimationFrame(function () { requestAnimationFrame(function () { card.classList.remove("hide"); }); });
    });
    empty.hidden = list.length > 0;
  }

  function onFilterClick(e) {
    var b = e.target.closest(".fbtn"); if (!b) return;
    state = { type: b.dataset.t, value: b.dataset.v || "" };
    drawFilters(); drawGrid();
  }
  filters.addEventListener("click", onFilterClick);
  subfilters.addEventListener("click", onFilterClick);

  /* ---------- Project preview ---------- */
  var modal = $("modal"), lastFocus = null;
  function openModal(p) {
    lastFocus = document.activeElement;
    var img = $("m-img");
    img.src = p.image; img.alt = p.title; safeImg(img, p.title);
    $("m-cat").textContent = catLabel[p.category] || p.category;
    $("m-title").textContent = p.title;
    $("m-desc").textContent = p.description || "";
    var d = p.details || {}, rows = "";
    Object.keys(d).forEach(function (k) { rows += "<div><dt>" + esc(k) + "</dt><dd>" + esc(d[k]) + "</dd></div>"; });
    $("m-details").innerHTML = rows;
    modal.hidden = false; document.body.classList.add("lock");
    modal.querySelector(".modal-close").focus();
  }
  function closeModal() {
    modal.hidden = true; document.body.classList.remove("lock");
    if (lastFocus) lastFocus.focus();
  }
  grid.addEventListener("click", function (e) {
    var c = e.target.closest(".card"); if (c) openModal(PROJECTS[c.dataset.i]);
  });
  modal.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- Services ---------- */
  $("services-list").innerHTML = SERVICES.map(function (s) {
    return '<article class="svc"><h3>' + esc(s.title) + "</h3><ul>" +
      s.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></article>";
  }).join("");

  /* ---------- Contact + socials ---------- */
  $("contact-list").innerHTML = CONTACT.map(function (c) {
    var v = c.link ? '<a href="' + esc(c.link) + '">' + esc(c.text) + "</a>" : esc(c.text);
    return "<li><span>" + esc(c.label) + "</span><b>" + v + "</b></li>";
  }).join("");
  $("socials").innerHTML = SOCIALS.map(function (s) {
    return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6v2H5v11h11v-5h2v7H3V6zm11-3v8h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H13V3z"/></svg>' + esc(s.name) + "</a>";
  }).join("");

  /* ---------- Contact form (needs Formspree: see README) ---------- */
  var form = $("form"), note = $("form-note");
  function say(msg, cls) { note.textContent = msg; note.className = "form-note " + (cls || ""); }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { say("Please fill in your name, a valid email and a message.", "err"); return; }
    if (form.action.indexOf("YOUR_FORM_ID") > -1) {
      say("This form is not connected yet, so nothing was sent. Please use the contact details above.", "err");
      return;
    }
    say("Sending...");
    fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
      .then(function (r) { if (!r.ok) throw 0; form.reset(); say("Message sent. We will reply soon.", "ok"); })
      .catch(function () { say("Message failed to send. Please contact us directly instead.", "err"); });
  });

  $("year").textContent = new Date().getFullYear();
  drawFilters(); drawGrid();
})();

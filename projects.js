/* =====================================================================
   VICTUS STUDIO: PORTFOLIO DATA
   This is the ONLY file you edit to change your portfolio.
   Part 1: CATEGORIES   Part 2: PROJECTS
   Rules: keep every comma, every quote mark " " and every { } as in the examples.
   ===================================================================== */

/* ---------- PART 1: CATEGORIES ----------
   "group" = the big buttons. "items" = the small buttons inside it.
   "id"    = a short code with no spaces (used by projects below).
   "label" = the name visitors see.
   To rename: change the label. To add: copy one line. To remove: delete the line.
   To reorder: move the lines up or down. */
const CATEGORY_GROUPS = [
  { group: "Esports & Gaming", items: [
    { id: "welcome-banners",   label: "Welcome Banners" },
    { id: "roster-designs",    label: "Roster Designs" },
    { id: "lineup-graphics",   label: "Lineup Graphics" },
    { id: "matchday-graphics", label: "Matchday Graphics" },
    { id: "tournament-graphics", label: "Tournament Graphics" },
    { id: "announcement-graphics", label: "Announcement Graphics" },
    { id: "recruitment-graphics",  label: "Recruitment Graphics" },
    { id: "team-graphics",     label: "Team Graphics" },
    { id: "player-graphics",   label: "Player Graphics" },
    { id: "gaming-posters",    label: "Gaming Posters" },
    { id: "esports-banners",   label: "Esports Banners" },
    { id: "gaming-covers",     label: "Gaming Covers" }
  ]},
  { group: "Branding", items: [
    { id: "logos",         label: "Logos" },
    { id: "team-logos",    label: "Team Logos" },
    { id: "gaming-logos",  label: "Gaming Logos" },
    { id: "brand-identity", label: "Brand Identity" },
    { id: "team-branding", label: "Team Branding" }
  ]},
  { group: "Social Media", items: [
    { id: "social-media-posts", label: "Social Media Posts" },
    { id: "instagram-designs",  label: "Instagram Designs" },
    { id: "facebook-designs",   label: "Facebook Designs" },
    { id: "youtube-graphics",   label: "YouTube Graphics" },
    { id: "youtube-thumbnails", label: "YouTube Thumbnails" },
    { id: "promotional-posts",  label: "Promotional Posts" },
    { id: "covers",             label: "Covers" }
  ]},
  { group: "Other", items: [
    { id: "posters",          label: "Posters" },
    { id: "banners",          label: "Banners" },
    { id: "advertisements",   label: "Advertisements" },
    { id: "special-projects", label: "Special Projects" },
    { id: "miscellaneous",    label: "Miscellaneous" }
  ]}
];

/* How many projects appear under the "Latest Works" button (newest by date) */
const LATEST_COUNT = 6;

/* ---------- PART 2: PROJECTS ----------
   To add a project, copy one block { ... }, paste it at the top of the list,
   and change the text inside the quotes.

     title       = project name
     category    = a category "id" from Part 1 above (for example "logos")
     image       = path to your image file
     description = short text (can be empty: "")
     date        = "YYYY-MM-DD" (used for Latest Works)
     featured    = true to show under "Featured Works", otherwise false
     details     = OPTIONAL extra lines shown in the preview (can be:  details: {} )

   The example images below do not exist yet, so the site shows a purple
   placeholder until you upload your real files. */
const PROJECTS = [
  {
    title: "Example Roster Design",
    category: "roster-designs",
    image: "assets/images/portfolio/roster/example-roster.png",
    description: "Placeholder description. Replace with your own text.",
    date: "2025-06-01",
    featured: true,
    details: { Game: "Free Fire", Type: "Roster graphic" }
  },
  {
    title: "Example Team Logo",
    category: "team-logos",
    image: "assets/images/portfolio/logos/example-logo.png",
    description: "Placeholder description. Replace with your own text.",
    date: "2025-05-20",
    featured: true,
    details: { Game: "PUBG Mobile" }
  },
  {
    title: "Example Matchday Graphic",
    category: "matchday-graphics",
    image: "assets/images/portfolio/banners/example-matchday.png",
    description: "Placeholder description. Replace with your own text.",
    date: "2025-05-10",
    featured: false,
    details: { Game: "Mobile Legends" }
  },
  {
    title: "Example Tournament Poster",
    category: "tournament-graphics",
    image: "assets/images/portfolio/posters/example-tournament.png",
    description: "Placeholder description. Replace with your own text.",
    date: "2025-04-28",
    featured: true,
    details: { Game: "VALORANT" }
  },
  {
    title: "Example YouTube Thumbnail",
    category: "youtube-thumbnails",
    image: "assets/images/portfolio/thumbnails/example-thumbnail.png",
    description: "Placeholder description. Replace with your own text.",
    date: "2025-04-15",
    featured: false,
    details: {}
  },
  {
    title: "Example Instagram Post",
    category: "instagram-designs",
    image: "assets/images/portfolio/social-media/example-post.png",
    description: "Placeholder description. Replace with your own text.",
    date: "2025-04-01",
    featured: false,
    details: {}
  },
  {
    title: "Example Welcome Banner",
    category: "welcome-banners",
    image: "assets/images/portfolio/banners/example-welcome.png",
    description: "Placeholder description. Replace with your own text.",
    date: "2025-03-18",
    featured: false,
    details: { Game: "Free Fire" }
  },
  {
    title: "Example Poster",
    category: "posters",
    image: "assets/images/portfolio/posters/example-poster.png",
    description: "Placeholder description. Replace with your own text.",
    date: "2025-03-01",
    featured: false,
    details: {}
  }
];

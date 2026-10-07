# Victus Studio website: beginner guide

Open `index.html` by double-clicking it to preview the site on your computer.

## 1. Files
- `index.html`: page structure and text (name, tagline, About text).
- `css/style.css`: colors, fonts, spacing.
- `js/projects.js`: **your portfolio and categories (edit this most).**
- `js/site-data.js`: contact details, social links, services.
- `js/main.js`: makes everything work. Don't edit.
- `assets/images/brand/`: logo and browser-tab icon.
- `assets/images/portfolio/`: your designs, in folders (logos, banners, posters, thumbnails, roster, social-media).
- `.nojekyll`: helps GitHub Pages. Leave it.

## 2. Where images go
Put each design in the matching folder inside `assets/images/portfolio/`. Use short names, lowercase, no spaces: `team-alpha-roster.jpg`. Use .jpg or .webp and keep each under about 500 KB so the site loads fast.

## 3. Replace the logo
Replace `assets/images/brand/logo.svg` (nav logo) and `favicon.svg` (tab icon) with your files of the same name. If yours is a PNG, name it `logo.png` and change `logo.svg` to `logo.png` in `index.html`.

## 4. Change name / tagline
In `index.html`, search (Ctrl+F) for "Victus" and "Came to Dominate" and edit the words. About text: search "Placeholder".

## 5. Change colors
Top of `css/style.css`: change the hex codes (like `#8b3dff`) in `--purple`, `--black`, `--white`.

## 6. Add a project
Open `js/projects.js`. Copy one block from `{` to `},` and paste it at the top of the list:
```
{
  title: "Phoenix Roster",
  category: "roster-designs",
  image: "assets/images/portfolio/roster/phoenix-roster.jpg",
  description: "Roster graphic for Team Phoenix.",
  date: "2025-07-01",
  featured: true,
  details: { Game: "Free Fire" }
},
```
Upload the image to the folder first. Spelling must match exactly. Every block ends with a comma, except the last one in the list.

## 7. Add / rename / reorder a category
In `projects.js`, Part 1. Add a line like `{ id: "my-category", label: "My Category" },`. Rename = change `label`. Reorder = move lines. Then use the `id` in your projects.

## 8. Remove a project
Delete its whole `{ ... },` block.

## 9. Contact info and social links
`js/site-data.js`: replace the example text and links. Delete a line to remove an item.

## 10. Make the contact form really send messages
A website alone cannot send email. The form needs a service:
1. Make a free account at formspree.io and create a form. You get an address like `https://formspree.io/f/abcdwxyz`.
2. In `index.html`, find `YOUR_FORM_ID` and replace it with the code (`abcdwxyz`).
Until then the form shows "not connected" and sends nothing.

## 11. Put it on GitHub Pages (easiest way, no commands)
1. Create a free account at github.com.
2. Click **+** (top right) > **New repository**. Name it `victus-studio`, choose **Public**, click **Create repository**.
3. Click **uploading an existing file**. Open the unzipped website folder on your computer, select everything inside it (including the `css`, `js`, `assets` folders), and drag it into the page. Wait for upload, then click **Commit changes**.
4. Go to **Settings > Pages**. Under "Branch" choose **main** and folder **/ (root)**, click **Save**.
5. Wait 1-3 minutes and refresh. Your link appears at the top: `https://YOUR-USERNAME.github.io/victus-studio/`.

## 12. Update later
Open your repository, click **Add file > Upload files** to add new images (put them in the right folder path), and click the pencil icon on `js/projects.js` to edit it. Click **Commit changes**. The site updates in 1-2 minutes. If you don't see changes, press Ctrl+F5.

## Advanced (optional)
Install Git, then: `git clone <repo-url>`, edit files, `git add .`, `git commit -m "update"`, `git push`.

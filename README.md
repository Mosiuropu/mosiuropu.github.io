# Mosiur Rahman Portfolio Site

Personal portfolio, blog, and research showcase for **Md. Mosiur Rahman**
→ Live at: [mosiuropu.github.io](https://mosiuropu.github.io)

---

## Quick Start (First Time Setup)

### 1. Prerequisites
- Node.js 18+ installed on your MacBook
- Git installed
- GitHub account (username: `mosiuropu`)

### 2. Install dependencies
```bash
cd mosiuropu-portfolio
npm install
```

### 3. Run locally (preview before deploying)
```bash
npm run dev
# Open: http://localhost:3000
```

### 4. Create GitHub repo
- Go to github.com → New Repository
- Name it exactly: `mosiuropu.github.io`
- Leave it public, don't initialize with README

### 5. Push to GitHub (first time)
```bash
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/mosiuropu/mosiuropu.github.io.git
git push -u origin main
```

### 6. Enable GitHub Pages
- Go to your repo → Settings → Pages
- Source: **GitHub Actions**
- Save

Your site deploys automatically in 2-3 minutes!

---

## How to Update Content

### Write a new blog post (easiest update)

1. Open `content/blog/` folder
2. Create a new file: `your-post-title.md`
3. Paste this template at the top:

```markdown
---
title: "Your Post Title Here"
date: "2025-01-15"
excerpt: "One sentence summary of your post."
tags: "Molecular Breeding, Personal"
readTime: "5 min read"
---

Your content starts here. Write in normal Markdown.

## Heading 2

Paragraph text goes here.

- Bullet points work
- Like this

**Bold text** and *italic text* both work.
```

4. Save the file
5. Deploy (see below)

---

### Add a new research project

Open `src/app/portfolio/page.js` and add to the `projects` array:

```javascript
{
  slug: 'your-project-slug',
  category: 'Molecular Breeding',  // or Floriculture, Genomics, Fruit Physiology
  title: 'Your Project Title',
  description: 'One paragraph description of the project.',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  year: '2025',
  status: 'Published',  // or 'Publication Ready', 'In Progress'
  icon: '🌱',
},
```

---

### Add a publication

Open `src/app/publications/page.js` and add to the `publications` array:

```javascript
{
  year: '2025',
  title: 'Full title of paper',
  authors: 'Rahman MM, et al.',
  journal: 'Journal Name',
  status: 'Published',  // or 'Under Review', 'Manuscript in preparation'
  doi: '10.1234/your-doi',
  type: 'Journal Article',
},
```

---

### Update your contact email

Open `src/app/page.js` → search for `mosiuropu@gmail.com` → replace with your email.

### Update your CV

Replace `public/cv.pdf` with your updated CV file (keep same filename).

---

## Deploy Updates

Every time you push to GitHub, the site auto-deploys. It takes 2-3 minutes.

```bash
# After making any changes:
git add .
git commit -m "Add new blog post about SSR markers"
git push origin main
# Done! Site updates automatically.
```

---

## Customize Design

### Change accent color (green by default)

Open `src/app/globals.css`:
- Light mode: change `--accent: #1a6b3c;`
- Dark mode: change `--accent: #30d068;`

Popular alternatives:
- Blue: `#1d6fa5` (light) / `#4db8ff` (dark)
- Purple: `#6c3f9e` (light) / `#c084fc` (dark)
- Teal: `#0e7490` (light) / `#22d3ee` (dark)

### Change fonts

Open `src/app/globals.css` → edit the Google Fonts import URL and the `--font-sans` variable.

Current font: **Outfit** (clean, modern, similar to Apple's SF Pro feel)

---

## File Structure

```
mosiuropu-portfolio/
├── content/
│   ├── blog/           ← Add .md files here for blog posts
│   └── projects/       ← Optional project detail pages
├── src/
│   ├── app/
│   │   ├── page.js         ← Home page (hero, about, research, contact)
│   │   ├── blog/           ← Blog listing and post pages
│   │   ├── portfolio/      ← Portfolio grid
│   │   └── publications/   ← Publications list
│   ├── components/
│   │   ├── Navbar.js       ← Navigation bar
│   │   └── Footer.js       ← Footer
│   └── lib/
│       └── markdown.js     ← Markdown file reader
├── public/
│   └── cv.pdf          ← Your CV (replace this)
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploy to GitHub Pages
```

---

## Ask Claude for Help

When you want to modify something, use this prompt (Haiku is fine for updates):

```
I have a Next.js portfolio site at mosiuropu.github.io.
Here is my current [file name]:
[paste the file content]

I want to: [describe what you want to change]

Give me the updated file.
```

---

## Your Site Sections

| Section | How to Update |
|---------|--------------|
| Hero name/bio | `src/app/page.js` → Hero component |
| About text | `src/app/page.js` → About component |
| Research cards | `src/app/page.js` → Research component |
| Portfolio projects | `src/app/portfolio/page.js` |
| Blog posts | Add `.md` files to `content/blog/` |
| Publications | `src/app/publications/page.js` |
| Contact email | `src/app/page.js` → Contact component |
| Navbar links | `src/components/Navbar.js` |
| Footer info | `src/components/Footer.js` |
| Colors | `src/app/globals.css` |

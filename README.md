# Lokesh Sereddy – Developer Portfolio

A premium, responsive developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **JavaScript**, **Framer Motion**, and **Lucide React**.

The site highlights Lokesh Sereddy's profile for **Backend Engineer**, **AI Engineer**, and **ML Engineer** opportunities, including skills, projects, education, certifications, achievements, and contact information.

## Features

- Premium dark theme with purple/blue/cyan accents
- Responsive layout for mobile, tablet, and desktop
- Sticky navigation with working section links
- Animated hero roles and smooth section reveals (Framer Motion)
- Interactive project cards and categorized skill badges
- Education timeline and achievements/LeetCode profile card
- Contact form with mail draft behavior and configurable details
- SEO metadata and accessibility-focused structure
- Configurable social links, project repository URLs, and resume download path

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- JavaScript (ESM)

## Project Structure

```text
.
├─ public/
│  ├─ favicon.svg
│  └─ og-image.svg
├─ src/
│  ├─ components/
│  │  ├─ layout/        # Navbar, Footer
│  │  ├─ sections/      # Hero, About, Skills, Projects, Education, Achievements, Contact
│  │  └─ ui/            # Reusable UI pieces (headings, animated roles)
│  ├─ data/
│  │  └─ site.js        # Centralized portfolio content & configurable placeholders
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## Configuration

Update [`src/data/site.js`](src/data/site.js) to customize personal links and placeholders:

- `siteConfig.social.github` / `siteConfig.contact.github` – add your GitHub profile URL
- `siteConfig.social.linkedin` / `siteConfig.contact.linkedin` – add your LinkedIn profile URL
- `siteConfig.contact.email` – add your email address (enables direct mail draft from the contact form)
- `projects[].githubUrl` – replace each project GitHub placeholder with the actual repository URL
- `siteConfig.resumeUrl` / `siteConfig.resumeFileName` – resume download settings

### Resume PDF

The **Download Resume** buttons link to `/resume.pdf` by default.

1. Place your uploaded resume PDF in the `public/` folder as `public/resume.pdf`  
   (or keep a different filename and update `resumeUrl` / `resumeFileName` in `src/data/site.js`).
2. Vite serves files in `public/` at the site root, so the download will work locally and after deployment.

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended, v18+)
- npm (comes with Node.js)

### Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build & Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

### Option 1: Vercel Dashboard (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and sign in.
3. Click **Add New… → Project** and import your repository.
4. Vercel will detect **Vite** automatically. Confirm settings if needed:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Option 2: Vercel CLI

1. Install the CLI (optional):

   ```bash
   npm i -g vercel
   ```

2. Deploy from the project root:

   ```bash
   vercel
   ```

3. For a production deployment:

   ```bash
   vercel --prod
   ```

## Notes

- All displayed achievements and statistics are limited to verified information provided for this portfolio.
- LeetCode integration is provided as an external profile link (no fabricated live stats or ratings).
- The contact form composes a mail draft via `mailto:` when a valid email is configured in `src/data/site.js`.

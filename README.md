# Golden Ogbeka - Personal Portfolio Website

Welcome to the repository for my personal portfolio website, built with Next.js 12, TypeScript, Tailwind CSS, and Redux Toolkit. This site showcases my professional experience, projects, and certifications in a modern, scalable, and responsive design.

## Features

- **Minimalist Antigravity Design:** A premium, glassmorphic UI with smooth animations and dynamic dark/light mode support using Tailwind CSS.
- **Dynamic Project Routing:** Detailed project pages automatically generated from data files (`/projects/[slug]`).
- **Interactive Project Galleries:** View project screenshots in a custom image carousel with full-screen support.
- **Video Demos:** Embedded YouTube video presentations for key projects.
- **Modular Data Architecture:** Content is entirely data-driven. Updating the site is as easy as editing `Projects.ts`, `Experiences.ts`, or `Certifications.ts`.
- **SEO Optimized:** Meta tags and correct semantic HTML elements ensure strong search engine visibility.

## Folder Structure

- `app/` - Redux Toolkit slices and store configuration.
- `components/` - Reusable UI elements grouped logically (Home, Project, Layout).
- `data/` - Contains the TypeScript data arrays (`Projects.ts`, `Experiences.ts`, `Certifications.ts`) that power the site.
- `pages/` - Next.js page routing (including dynamic routes like `projects/[slug].tsx`).
- `public/` - Static assets including images and logos.
- `styles/` - Global CSS containing custom Tailwind utility classes and animations.

## How to Update Content

To add or update information on the site, simply edit the corresponding file in the `data/` directory:
- **Projects (`data/Projects.ts`):** Add new projects here. To include an image gallery, provide an array of image paths to the `screenshots` array. To add a video, provide a valid YouTube URL to `videoDemoLink`.
- **Experiences (`data/Experiences.ts`):** Update roles and responsibilities. The homepage automatically pulls the top 5 recent experiences.
- **Certifications (`data/Certifications.ts`):** Add new educational achievements or certifications. Setting `featured: true` will display it on the homepage.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack
- React & Next.js
- TypeScript
- Tailwind CSS
- Headless UI
- Redux Toolkit

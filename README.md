# Luminar

A modern landing page built with **Next.js 15**, **React 18**, and **Tailwind CSS**.

## Features

- ✨ Server-Side Rendering (SSR) with Next.js
- 🎨 Styled with Tailwind CSS
- ⚡ Fast performance and optimized build
- 📱 Fully responsive design
- 🔍 SEO-friendly

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd luminar
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
luminar/
├── app/                    # Next.js App Router
│   ├── layout.jsx         # Root layout with metadata
│   ├── page.jsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Benefits.jsx
│   ├── FeaturesCarousel.jsx
│   ├── SpecificationsTable.jsx
│   ├── Testimonial.jsx
│   ├── HowItWorks.jsx
│   ├── LogoCloud.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server at localhost:3000
- `npm run build` - Build for production
- `npm run start` - Run production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** JavaScript (JSX)

## Understanding Next.js

### Server-Side Rendering (SSR)

This app uses Next.js which renders pages on the server before sending them to the browser. This means:

- **Faster initial page load** - HTML is already rendered
- **Better SEO** - Search engines can see your content
- **Improved performance** - Less JavaScript sent to the client

### App Router

Next.js uses file-based routing:
- `app/page.jsx` → `/` (home page)
- `app/about/page.jsx` → `/about`

### Server Components

All components in the `components/` directory are **Server Components** by default. They run on the server, reducing the amount of JavaScript sent to the browser.

To use client-side features (like `useState`, `onClick`, etc.), add `'use client'` at the top of the component file.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Other Platforms

Next.js can also be deployed to:
- **Netlify** - https://www.netlify.com/
- **Railway** - https://railway.app/
- **DigitalOcean** - https://www.digitalocean.com/
- **AWS** - https://aws.amazon.com/

## License

This project is open source and available under the [MIT License](LICENSE).

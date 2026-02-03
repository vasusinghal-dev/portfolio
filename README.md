# Vasu Dev — Config-Driven Developer Portfolio

A minimal, production-grade developer portfolio built as a **data-driven system**, not a content-heavy website.

Instead of hardcoding text into components, the entire site is powered by a single configuration file. Updating content never requires touching JSX — only structured data. The UI stays clean, predictable, and scalable.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**, with GSAP animation used intentionally and sparingly.

## Features

- **Responsive Hero Section** – Dynamic landing with animated background blobs
- **Project Showcase** – Interactive project grid with modal-based details and dynamic routing
- **Tech Stack Visualization** – Organized technical toolkit across Core, Frontend, Backend, and Infrastructure categories
- **Education Timeline** – Professional journey and milestones
- **Contact Form** – Server-side form validation with Arcjet security and Resend email integration
- **Production Optimized** – TypeScript, ESLint, performance-focused architecture
- **Accessible Navigation** – Dynamic header with smooth scroll navigation across sections

---

## Preview

> _Screenshots go here — replace the placeholders below_

![Homepage Preview](./screenshots/home.png)
![Projects Modal Preview](./screenshots/projects-modal.png)
![Tech Stack Preview](./screenshots/techstack.png)
![Contact Form Preview](./screenshots/contact.png)

---

## Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP
- Lucide React
- React Icons

### Backend & Services

- Zod (runtime validation)
- Resend (email delivery)
- Arcjet (rate limiting & security)

---

## Project Highlight

### Config-Driven Developer Portfolio

**Description**
A minimal, professional portfolio built as a data-driven system rather than a content-heavy website.

**Key Technical Decisions**

- Single JSON file as the source of truth — content edits never touch JSX
- Strict separation between content and presentation
- GSAP limited to subtle, functional animations

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (site)/            # Main site layout group
│   ├── (projects)/        # Projects route group
│   └── @modal/            # Modal slot for project details
├── components/
│   ├── Hero/              # Landing section
│   ├── Projects/          # Project showcase & details
│   ├── TechStack/         # Technology showcase
│   ├── About/             # Philosophy section
│   ├── Education/         # Timeline component
│   ├── Contact/           # Contact form
│   ├── Header/            # Navigation
│   ├── BackgroundMotion/  # Animated backgrounds
│   └── Icons/             # Brand icons
├── actions/               # Server actions (contact form)
├── lib/
│   ├── arcjet.ts         # Security configuration
│   ├── schema.ts         # Zod validation schemas
│   └── server/           # Server utilities (getBaseUrl)
└── data/
    └── portfolio.json    # Portfolio content configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (create `.env.local`):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_key
ARCJET_KEY=your_arcjet_key
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Changes auto-reload as you edit files.

## Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Run production build
- `npm run lint` – Run ESLint

## Key Features Explained

### Dynamic Project Navigation

Uses Next.js App Router parallel routes (`@modal`) for seamless project detail viewing without full page navigation.

### Server-Side Security

- Contact form uses server actions for secure backend processing
- Arcjet integration for rate limiting and abuse prevention
- Zod for runtime type validation

### Smooth Animations

GSAP animations power background blobs and interactive elements for a polished, professional feel.

### Responsive Design

Built mobile-first with Tailwind CSS for optimal viewing across all devices.

## Environment Configuration

Portfolio content is centralized in `src/data/portfolio.json` for easy management of:

- Personal information (name, email, links)
- Navigation sections
- Hero statement
- Tech stack categories
- Project details

## Code Quality

- TypeScript for type safety
- ESLint for code linting
- Server-side validation with Zod
- Security hardened with Arcjet

## License

This project is personal and proprietary. Contact for inquiries.

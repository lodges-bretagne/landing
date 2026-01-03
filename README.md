# Lodge Landing Pages

Complete landing pages for Blue Lodge and Green Lodge accommodations in Saint-Malo and Dinard, Brittany.

## Features

- Two fully responsive landing pages
- Image galleries with lightbox functionality
- Centralized contact information configuration
- Airbnb integration
- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Vite
- Lucide React (icons)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173/landing/`

## Build

```bash
npm run build
```

## Deployment

The site is configured to deploy to GitHub Pages at `https://lodges-bretagne.github.io/landing/`

### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys on push to the main branch.

### Manual Deployment

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/     # Reusable components (Hero, Section, FeatureCard, etc.)
├── pages/          # Page components (Home, BlueLodge, GreenLodge)
├── config/        # Centralized configuration (contact info, Airbnb IDs)
└── main.tsx       # Application entry point
```

## Configuration

Contact information and Airbnb IDs are centralized in `src/config/contact.ts`:

- Phone number
- Email address
- Airbnb listing IDs for each lodge

## Adding Images

Place images in:
- `public/images/blue-lodge/` for Blue Lodge
- `public/images/green-lodge/` for Green Lodge

Images are automatically loaded using the base URL configured in `vite.config.ts`.

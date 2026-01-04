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

The development server will start at `http://localhost:5173/`

## Build

```bash
npm run build
```

## Deployment

The site is configured to deploy to GitHub Pages and is accessible at `https://lodges-bretagne.fr`

### Custom Domain Setup

The project includes a `CNAME` file in the `public/` directory that configures the custom domain `lodges-bretagne.fr`. This file is automatically copied to the build output during deployment.

To set up the custom domain:
1. Configure a CNAME record in your DNS settings pointing `lodges-bretagne.fr` to `lodges-bretagne.github.io`
2. In your GitHub repository settings, go to Pages and add `lodges-bretagne.fr` as a custom domain
3. GitHub will automatically verify and configure the domain

### Manual Deployment

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

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

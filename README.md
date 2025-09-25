# Sporty Leagues - Sports League Browser

A modern, responsive React application that displays sports leagues from around the world using TheSportsDB API.

## 🚀 Features

- Browse sports leagues from around the world
- Real-time search with debounced input
- Filter leagues by sport type
- View historical seasonal badges for each league
- Fully responsive design
- Smart caching with React Query

## 🛠 Tech Stack

- **React 18** with TypeScript
- **Ant Design** for UI components
- **React Query** for data fetching and caching
- **React Router** for navigation
- **Axios** for HTTP requests

## 📁 Project Structure

```
src/
├── api/           # API functions and configuration
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── layouts/       # Layout components
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

Each folder includes an `index.ts` file for clean barrel exports:

```typescript
// Clean imports using barrel exports
import { SearchBar, SportFilter, LeagueCard } from '../components';
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm 7+

### Installation

```bash
# Clone the repository
git clone https://github.com/armanghazaryan066-arch/sporty-leagues.git
cd sporty-leagues

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm run eject` - Eject from Create React App

## 🔧 API Configuration

Uses TheSportsDB free API:
- **All Leagues**: `/all_leagues.php`
- **League Seasons**: `/search_all_seasons.php?badge=1&id={id}`

Configuration in `src/api/config.ts`.

## 🚀 Deployment

```bash
npm run build
```

Deploy the `build` folder to:
- Netlify, Vercel, or GitHub Pages
- Any static hosting service
- CDN or web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🤖 Development Notes

This project was developed with AI assistance (Claude) for certain mechanical and boilerplate tasks including:
- TypeScript type definitions and API integration boilerplate
- Basic styling patterns
- Documentation structure

The core application logic, architecture decisions, and user experience design were human-driven.

## 🙏 Acknowledgments

- [TheSportsDB](https://www.thesportsdb.com/) for providing the free sports API
- [Ant Design](https://ant.design/) for the excellent UI component library
- [React Query](https://tanstack.com/query) for powerful data fetching capabilities
- [Create React App](https://create-react-app.dev/) for the development setup

**Built with ❤️ using React, TypeScript, and Ant Design**

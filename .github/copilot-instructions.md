# Copilot Instructions - Custom React Router

## Project Context
This project is developing a **custom React routing library from scratch** to create SPAs with declarative navigation. While `react-router-dom` is installed as a dependency, the goal is to build a proprietary router implementation.

## Architecture Overview
- **Framework**: React 19.1.1 + Vite 7.1.7 with SWC for fast refresh
- **Styling**: SCSS + MDB UI Kit Pro + PostCSS with PurgeCSS optimization
- **Current State**: Early development (v0.0.0) - basic React app setup complete

## Development Patterns

### Router Implementation Strategy
Based on `PRD.md`, implement features in this order:
1. Basic SPA navigation without page reloads
2. Browser back/forward button support
3. Declarative `<Link>` component
4. Declarative `<Router>` wrapper component  
5. Default/404 route handling
6. Parameterized routes (`/user/:id`)
7. `<Route>` component for route definitions
8. Lazy loading for code splitting

### Component Structure
- Keep router components in `src/` (likely separate folder when implemented)
- Current `App.jsx` has unused `HomePage`/`AboutPage` components - these are probably examples for testing the router
- Follow React 19 patterns (no need for React.* imports)

### Build & Development
```bash
npm run dev    # Vite dev server with HMR
npm run build  # Production build
npm run lint   # ESLint with React hooks rules
```

### Styling Guidelines
- Primary styles in `src/scss/styles.scss` (currently minimal)
- Uses MDB UI Kit Pro (private Git dependency) 
- PostCSS configured with PurgeCSS for production optimization
- Import CSS in components: `import './Component.css'`

### Key Files to Understand
- `PRD.md` - Complete feature roadmap and requirements
- `src/App.jsx` - Contains example components for router testing
- `vite.config.js` - Standard React + SWC setup
- `package.json` - Note the MDB UI Kit Pro private dependency

## Specific Conventions
- Use ES modules (`type: "module"` in package.json)
- Component names use PascalCase (`HomePage`, `AboutPage`)
- File extensions: `.jsx` for React components, `.scss` for styles
- Standard Vite project structure maintained

## Integration Points
- **MDB UI Kit Pro**: Premium Bootstrap-based component library
- **PostCSS Pipeline**: Includes PurgeCSS for CSS optimization
- **ESLint**: Configured for React Hooks and React Refresh patterns
- **Vite HMR**: Fast refresh enabled via SWC plugin

## Testing Strategy
Testing is listed in PRD but not yet implemented - expect to add testing framework later in development cycle.
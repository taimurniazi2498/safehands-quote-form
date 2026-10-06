# SafeHands

Starter for the SafeHands Insurance Quote SPA. It is a Vite + React app with React Router, ESLint and Prettier. The Home page shows the SafeHands logo and a welcome banner.

## Tech

- Vite
- React
- React Router
- ESLint
- Prettier

## Run locally

```bash
npm install
npm run dev
```


Then open the link shown in the terminal (for example http://localhost:5173/). The Home page loads at `/`.

## Scripts

- `npm run dev` starts the dev server
- `npm run build` creates a production build
- `npm run lint` checks the code with ESLint
- `npm run format` formats the code with Prettier

## Project structure

```
src/
  assets/       images (logo.svg)
  components/   reusable components (Home)
  pages/        route pages (HomePage)
  App.jsx       routes
  main.jsx      entry point with BrowserRouter
  ```
  
  ## Task 2: Navigation and Page Routing

  A responsive navigation bar with three pages (Home, About, Quote), built with React Router.

  ### Features

  - NavBar components built with  `<nav>` and `<ul>`
  - Client-side routing with React Router (no full page reloads)
  - Routes: `/` (Home), `/about` (About), `/quote` (Quote)
  - Active link highlighting using `NavLink`
  - Below 786x, the links collapse into a CSS-only hamburger menu

  ### Files added

  - `src/components/NavBar.jsx` and `NavBar.module.css`: navigation bar and its styles
  - `src/pages/About.jsx` and `Quote.jsx`: placeholder pages
  - `src/App.jsx`: route definitions
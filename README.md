# Hacking Challenge

Static Site built with React

### Requirenments

- Node v16.X [https://nodejs.org/](https://nodejs.org/)
- Yarn v1.2X [https://yarnpkg.com/](https://yarnpkg.com/)

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install project dependencies. This step is required for running the following scripts.

### `yarn dev`

Runs the app in the desired mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Folder structure

```
public/
src/
  App.jsx
  App.css
  main.jsx
  assets/
  components/
  context/
  hooks
  pages/
  router/
  services/
  static/
  utils/
babel.config.cjs
index.html
jest.config.cjs
jest.setup.js
CHANGELOG.md
package.json
README.md
vite.config.js
```

- `App.jsx` main component of the project
- `App.css` global styles
- `main.jsx` renders the app
- `assets/` contains icons, images, fonts, etc
- `components/` contains reusable React Components
- `context/` contains components for share global states using Context API
- `hooks/` contains reusable component state logic
- `pages/` contains React Components used as a view
- `router/` contains react router config
- `services/` contains logic to interact with external services
- `statics/` contains interfaces for typescript
- `utils/` contains generic logic to use across de app

## Dependencies

- `@mui/material` MUI offers a comprehensive suite of UI tools.
- `@mui/icons-material` Icon complements of Material UI
- `axios` promise-based HTTP Client for node.js and the browser. It is isomorphic.
- `react-router-dom` Declarative routing for React web applications.

# Electron / Create-React-App Starter

This project acts as a starter project for Electron applications to be built using React.js.

## Develop Scripts

### `npm run dev`

Runs the app in development mode and subsequently runs an Electron container to load the app from http://localhost:3000.

This command uses a Procfile to coordinate `npm run start` with `npm run electron` and essentially combines both commands into a single, convenient one.

### `npm run electron-dev`

Runs a new Electron container which attempts to load the app from http://localhost:3000. The app must be running before the container can load it.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Test Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build Scripts

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

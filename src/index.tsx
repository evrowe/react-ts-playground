import * as React from 'react';
import { render } from 'react-dom';
// Import HMR container via require
const { AppContainer } = require('react-hot-loader');

import App from 'containers/App';

// Inform TS about a global variable called `module`
declare var module: { hot: any };

// Get the dang root element from our index.html
const rootEl = document.getElementById('app');

// Render the apppppppppp
render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// Handle HMR requests
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  })
}
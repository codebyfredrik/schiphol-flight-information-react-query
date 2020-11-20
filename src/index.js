import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AppProviders } from './context/index';
import * as serviceWorker from './serviceWorker';

// Standard version of React
// ReactDOM.render(
//   <React.StrictMode>
//     <AppProviders
//       <App />
//     </AppProviders>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Experimental version of React with concurrent mode enabled
const root = document.getElementById('root');
ReactDOM.unstable_createRoot(root).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// if (process.env.REACT_APP_ENV === 'production') {
//   serviceWorker.register();
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <ReactQueryConfigProvider config={{}}>
//         <App />
//       </ReactQueryConfigProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Experimental version of React with concurrent mode enabled
const root = document.getElementById('root');
ReactDOM.unstable_createRoot(root).render(
  <React.StrictMode>
    <Router>
      <ReactQueryConfigProvider config={{}}>
        <App />
      </ReactQueryConfigProvider>
    </Router>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// if (process.env.REACT_APP_ENV === 'production') {
//   serviceWorker.register();
// }

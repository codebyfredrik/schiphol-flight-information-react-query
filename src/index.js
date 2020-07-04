import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { ReactQueryConfigProvider } from 'react-query';
import App from './App';
import * as serviceWorker from './serviceWorker';

const config = {
  headers: {
    Accept: 'application/json',
    ResourceVersion: 'v4',
    app_id: process.env.REACT_APP_API_ID,
    app_key: process.env.REACT_APP_API_KEY,
  },
};

// Define a default query function that will recieve query key
const defaultQueryFn = async (key) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${key}`,
    config
  );
  return data;
};

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryConfigProvider
      config={{
        queries: { queryFn: defaultQueryFn },
      }}
    >
      <App />
    </ReactQueryConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.unstable_createRoot(document.getElementById('root')).render(
//   <ReactQueryConfigProvider
//     config={{
//       queries: { queryFn: defaultQueryFn }
//     }}
//   >
//     <App />
//   </ReactQueryConfigProvider>
// );

// ReactDOM.createRoot(
//   document.getElementById('root')
// ).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

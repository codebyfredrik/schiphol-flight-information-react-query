const dataFetchConfig = {
  headers: {
    Accept: 'application/json',
    ResourceVersion: 'v4',
    app_id: process.env.REACT_APP_API_ID,
    app_key: process.env.REACT_APP_API_KEY,
  },
};

export { dataFetchConfig };

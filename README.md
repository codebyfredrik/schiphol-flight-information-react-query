# Flight information site with React and React Query

### Summary

A site created with React and React Query to display information about arrival and departure flights at Amsterdam Schipol Airport.

### Implementation details

In this project the frontend is consuming real-time data from the official flight information API for Schipol Airport. After some research I decided to implement Reacy Query to handle server state. This library solves many of the challenges that will arise when working with asynchronous API's.

One of many features of React Query used in this project is caching. Instead of refetching the same information over and over again specific information, that rarely change, can be set do be cached in indefinitely or for the entire duration of the user session. By doing so transfer of unneccesary data is prevented and at the same time the number of API requests are kept to a minimum.

In this implemetation the API endpoints are using the following caching strategies:

- /flights - Not cached since information is updated frequently
- /destinations/:id - Cached indefinitely
- /airlines/:id - Cached indefinitely

The site is designed to be responsive and adapt well to mobiles, tablets and desktops. To be able to work more efficiently with the styling the CSS-in-JS libary Styled Components is used. Some of the benefits of this library are:

- Improved developer experience
- Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.
- No class name bugs: styled-components generates unique class names for styles. No need to worry about duplication, overlap or misspellings.
- Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
- Automatic vendor prefixing

### Technologies used

- JavaScript ES6+
- React
- [React Query](https://github.com/tannerlinsley/react-query)
- Axios
- CSS
- [Styled Components](https://github.com/styled-components)
- HTML

### Where can you see it in action?

URL to live site: https://elegant-galileo-8daf23.netlify.app/

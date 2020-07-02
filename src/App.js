import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Flight from './components/Flight';
import './App.css';

const PageTitle = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
`;

const App = () => {
  const { status, data: result, error, isFetching } = useQuery(
    '/flights?page=25'
  );

  if (isFetching) return <h1>Loading...</h1>;
  if (error) return <h1>Ooops, something went wrong!</h1>;

  console.log(result);

  return (
    <div className="App">
      <PageTitle>Schipol Traffic Information</PageTitle>
      <div>
        {result.flights.map((item) => (
          <Flight key={item.id} flight={item} />
        ))}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Planets from './Components/Planets';
import People from './Components/People';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient()

function App() {

  const [page, setPage] = useState('planets')

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <h1> Starwars info </h1>
      <Navbar setPage={setPage} />
      <div className="content" >
        { page === 'planets' ? <Planets /> : <People /> }
      </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./Components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';
import ProjectDetails from './Components/pages/ProjectDetails';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <div className="container">
            {/* <h2 className="text-secondary text-center text-decoration-underline">Clients Data</h2> */}

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/projects/:id' element={<ProjectDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;

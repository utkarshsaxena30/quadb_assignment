import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <ShowList shows={shows} />
          </Route>
          <Route path="/show/:id" component={ShowDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mapage from './components/Mapage';
import Navbar from './components/Navbar';
import Loginp from './components/Loginp';
import useToken from './useToken';

import './App.css';

function App() {
  const { token, setToken, username, removeToken } = useToken();

  if (!token) {
    return <Loginp setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        {/* Pass username and removeToken to Navbar */}
        <Navbar username={username} removeToken={removeToken} />
        <Switch>
          <Route exact path="/">
            <Mapage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from './services/users';
import Auth from './views/Auth/Auth';
import Todo from './views/Todo/Todo';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {currentUser && <Todo setCurrentUser={setCurrentUser} />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

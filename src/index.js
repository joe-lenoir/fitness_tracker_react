//imports

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { 
  //Activities,
  Header, 
  //Home, 
  // Routines,
  // UserRoutines
} from "./components";

import { getUsers, getRoutinesByUser } from "./api";

import { getCurrentUser } from "./auth";

//app

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [userRoutines, setUserRoutines] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUserList(users);
      })
      .catch((error) => {
        console.error(error)
      });
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setUserRoutines([]);
      return;
    }

    getRoutinesByUser(currentUser.id)
      .then((routines) => {
        setUserRoutines(routines);
      })
      .catch((error) => {
        console.error(error)
      });

  }, [currentUser]);

  return (
    <Router>
      <div id="App">
        <Header
          userList={userList}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        {currentUser ? (
          <>
            <Switch>
              <Route path="/routines">
                <UserPosts userRoutines={userRoutines} currentUser={currentUser} />
              </Route>
              <Route exact path="/">
                <h2
                  style={{
                    padding: ".5em",
                  }}
                >
                  Welcome, {currentUser.username}!
                </h2>
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <h2
                  style={{
                    padding: ".5em",
                  }}
                >
                  Please log in, above.
                </h2>
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

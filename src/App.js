import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import { TasksList } from "./pages/TasksList";
import { AuthContext } from "./context/Auth";
import Login from "./pages/Login";
import Header from "./components/Header";
import { AddTask } from "./pages/AddTask";
import { EditTask } from "./pages/EditTask";
import { ToDoListContext } from "./context/toDoList";

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  const [toDoList, setToDoList] = useState([]);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <ToDoListContext.Provider value={{ toDoList, setToDoList }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/add" component={AddTask} exact />
            <PrivateRoute path="/edit/:id" component={EditTask} exact />
            <PrivateRoute path="/admin" component={TasksList} />
          </Switch>
        </Router>
      </ToDoListContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

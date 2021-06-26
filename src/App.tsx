import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AppProvider } from "./contexts/AppContext";
import { IItem } from "./types";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [items, setItems] = React.useState<IItem[]>([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const loginState = localStorage.getItem("loggedIn");
    setIsLoggedIn(loginState === "true");
  }, [isLoggedIn]);

  React.useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setItems(data.items);
    };
    fetchItems();
  }, []);

  const changeLoginState = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <AppProvider value={{ items, isLoggedIn, changeLoginState }}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/shapes" component={Home} />
          <Route render={() => <Redirect to="/shapes" />} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;

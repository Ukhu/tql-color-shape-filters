import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AppProvider } from "./contexts/AppContext";
import { IItem } from "./types";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import AppTheme from "./theme/AppTheme";

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
      <ThemeProvider theme={AppTheme}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/shapes" component={Home} />
            <Route render={() => <Redirect to="/shapes" />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

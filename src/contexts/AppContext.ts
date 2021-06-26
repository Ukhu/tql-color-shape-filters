import React from "react";

import { IItem } from "../types";

interface IAppContext {
  items: IItem[];
  isLoggedIn: boolean;
  changeLoginState: () => void;
}

const AppContext = React.createContext<IAppContext>({
  items: [],
  isLoggedIn: false,
  changeLoginState: () => {},
});

export const AppProvider = AppContext.Provider;

export default AppContext;

import React from "react";

import { Item } from "../types";

const ItemContext = React.createContext<Item[]>([]);

export const ItemProvider = ItemContext.Provider;

export default ItemContext;

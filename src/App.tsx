import React from "react";

import { ItemProvider } from "./contexts/ItemContext";

import Home from "./pages/Home";

function App() {
  const [items, setItems] = React.useState<{ color: string; shape: string }[]>(
    []
  );

  React.useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setItems(data.items);
    };
    fetchItems();
  }, []);

  return (
    <ItemProvider value={items}>
      <div>
        <Home />
      </div>
    </ItemProvider>
  );
}

export default App;

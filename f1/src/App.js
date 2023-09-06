import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import { MyContext } from "./Context";

function App() {
  const [state, setState] = useState({
    city: "",
    country: "",
    email: "",
    name: "",
    phone: "",
    postalCode: "",
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      <Layout />
    </MyContext.Provider>
  );
}

export default App;

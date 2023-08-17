import React from "react";
import Home from "./main/pages/Home";
import User from "./main/pages/User";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 100,
      }}
    >
      <Home />
      <User />
    </div>
  );
};

export default App;

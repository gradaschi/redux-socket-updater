import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const message = useSelector((state: any) => state.message);

  return (
    <div>
      <h1>Current Value: {message.data}</h1>
    </div>
  );
};

export default App;

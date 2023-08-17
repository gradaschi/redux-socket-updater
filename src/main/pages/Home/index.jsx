import React, { useState } from "react";
import { setHomeData } from "../../../redux/containers/Home/action";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [data, setData] = useState("");
  const homeData = useSelector((state) => state.home.data);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <h2>{homeData}</h2>
      <button onClick={() => dispatch(setHomeData(data))}>Set Home Data</button>
    </div>
  );
}

export default Home;

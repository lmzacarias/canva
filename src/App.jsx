import imgMain from "./octopus.png";
import imgBanana from "./bananas.svg";
import React, { useEffect, useState } from "react";

import "./App.css";
import "antd/dist/antd.css";
import "./index.css";

import FirstScreen from "./components/FirstScreen";
import BananaComponent from "./components/BananaComponent";

const App = () => {
  const [activated, setactivated] = useState(false);



  return (
    <div className="App">
      {/*  <img src={imgMain} className="App-logo" alt="logo" /> */}
      {/*  <img src={imgBanana} className="App-logo" alt="logo" /> */}
      <BananaComponent />
      <div className="text-white">{!activated?"1":"2"}</div>

      <div></div>
      <FirstScreen
        setData={() => {
          setactivated(true);
        }}
      />
    </div>
  );
};

export default App;

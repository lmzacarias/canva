import imgMain from "./octopus.png";
import imgBanana from "./bananas.svg";

import "./App.css";
import "antd/dist/antd.css";
import "./index.css";

import FirstScreen from "./components/FirstScreen";
import BananaComponent from "./components/BananaComponent";

function App() {
  return (
    <div className="App">
      <img src={imgMain} className="App-logo" alt="logo" />
      <img src={imgBanana} className="App-logo" alt="logo" />
      <BananaComponent />
      <div className="text-white">
       Pruebas
      </div>
      <FirstScreen />
    </div>
  );
}

export default App;

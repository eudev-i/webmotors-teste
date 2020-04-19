import React from "react";
import logo from "./assets/images/logo.png";
import car from "./assets/images/car.png";
import motorcycle from "./assets/images/motorcycle.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="imgLogo" alt="logo" />
      </header>

      <div className="nav">
        <div className="buttonsNav">
          <div className="buttonNavCar">
            <div className="areaIcon">
              <img src={car} className="icon" alt="logo" />
            </div>
            <div className="textButtonNav">
              <h3>COMPRAR</h3>
              <h1>CARROS</h1>
            </div>
          </div>
          <div className="buttonNavMotorcycle">
            <div className="areaIcon">
              <img src={motorcycle} className="icon" alt="logo" />
            </div>
            <div className="textButtonNav">
              <h3>COMPRAR</h3>
              <h1>CARROS</h1>
            </div>
          </div>
        </div>
        <input></input>
      </div>
    </div>
  );
}

export default App;

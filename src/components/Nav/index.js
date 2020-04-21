import React from "react";
import "./styles.css";
import car from "../../assets/images/car.png";
import motorcycle from "../../assets/images/motorcycle.png";

function Nav() {
  return (
    <div className="nav">
      <div className="buttonsNav">
        <div className="buttonNavCar">
          <div className="areaIconCar">
            <img src={car} className="iconCar" alt="logo" />
          </div>
          <div className="textButtonNav">
            <h3>COMPRAR</h3>
            <h1>CARROS</h1>
          </div>
        </div>
        <div className="buttonNavMotorcycle">
          <div className="areaIconMotorcycle">
            <img src={motorcycle} className="iconMotorcycle" alt="logo" />
          </div>
          <div className="textButtonNav">
            <h3>COMPRAR</h3>
            <h1 className="labelGray">MOTOS</h1>
          </div>
        </div>
      </div>
      <button className="buttonSale">Vender meu carro</button>
    </div>
  );
}

export default Nav;

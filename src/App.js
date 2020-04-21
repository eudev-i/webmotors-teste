import React from "react";
import logo from "./assets/images/logo.png";
import car from "./assets/images/car.png";
import select from "./assets/images/select.png";
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
              <h1>MOTOS</h1>
            </div>
          </div>
        </div>
        <button className="buttonVenda">Vender meu carro</button>
      </div>
      <div className="box">
        <div className="line1">
          <label className="containerCheck labelGray">
            Novos
            <input type="checkbox" checked="checked" />
            <span className="checkmark"></span>
          </label>
          <label className="containerCheck labelGray">
            Usados
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="line2">
          <div className="location">
            <input
              className="inputLocation"
              value="Onde: São Paulo - SP"
            ></input>
            <select className="selectLocation" name="">
              <option value="1">Raio: 100km</option>
              <option value="0">Opções</option>
            </select>
          </div>
          <select className="selectPadrao1" name="">
            <option value="1">Marca: Todas</option>
            <option value="0">Opções</option>
          </select>
          <select className="selectPadrao1" name="">
            <option value="1">Modelo: Todos</option>
            <option value="0">Opções</option>
          </select>
        </div>
        <div className="line3">
          <select className="selectPadrao" name="">
            <option value="1">Ano Desejado</option>
            <option value="0">Opções</option>
          </select>
          <select className="selectPadrao" name="">
            <option value="1">Faixa de Preço</option>
            <option value="0">Opções</option>
          </select>
          <select className="selectAux" name="">
            <option value="1">Versão: Todas</option>
            <option value="0">Opções</option>
          </select>
        </div>
        <div className="line4">
          <div className="containerLeft">
            <img src={select} className="iconSelect" alt="logo" />
            <label className="labelRed">Busca Avançada</label>
          </div>
          <div className="containerRight">
            <label className="labelGray">Limpar filtros</label>
            <button className="buttonOferta">VER OFERTAS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./styles.css";
import select from "../../assets/images/select.png";

function Box() {
  return (
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
          <input className="inputLocation" value="Onde: São Paulo - SP"></input>
          <select className="selectLocation" name="">
            <option value="1">Raio: 100km</option>
            <option value="0">Opções</option>
          </select>
        </div>
        <select className="selectLittle" name="">
          <option value="1">Marca: Todas</option>
          <option value="0">Opções</option>
        </select>
        <select className="selectLittle" name="">
          <option value="1">Modelo: Todos</option>
          <option value="0">Opções</option>
        </select>
      </div>

      <div className="line3">
        <select className="selectMedium" name="">
          <option value="1">Ano Desejado</option>
          <option value="0">Opções</option>
        </select>
        <select className="selectMedium" name="">
          <option value="1">Faixa de Preço</option>
          <option value="0">Opções</option>
        </select>
        <select className="selectBig" name="">
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
          <button className="buttonOffer">VER OFERTAS</button>
        </div>
      </div>
    </div>
  );
}

export default Box;

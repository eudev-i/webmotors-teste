import React, { useState, useEffect } from "react";
import "./styles.css";
import select from "../../assets/images/select.png";
import api from "../../services/api";
import { version } from "react-dom";

const Box = () => {
  /* Makes */
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");

  const fetchMake = async () => {
    await api
      .get("OnlineChallenge/Make")
      .then((data) => setMakes(data.data))
      .catch(() => setMakes([]));
  };

  useEffect(() => {
    fetchMake();
  }, []);

  /* Model */
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");

  const fetchModels = async () => {
    await api
      .get("OnlineChallenge/Model", {
        params: {
          MakeID: selectedMake,
        },
      })
      .then((data) => setModels(data.data))
      .catch(() => setModels([]));
  };

  useEffect(() => {
    if (selectedMake) fetchModels();
  }, [selectedMake]);

  /* Version */
  const [versions, setVersions] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState("");

  const fetchVersions = async () => {
    await api
      .get("OnlineChallenge/Version", {
        params: {
          ModelID: selectedModel,
        },
      })
      .then((data) => setVersions(data.data))
      .catch(() => setVersions([]));
  };

  useEffect(() => {
    if (selectedModel) fetchVersions();
  }, [selectedModel]);

  /* Clear Filter */

  const clearFilter = () => {
    setSelectedMake("");
    setSelectedModel("");
    setSelectedVersion("");
  };

  /* Vehicles */
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchVehicles = async () => {
    await api
      .get("OnlineChallenge/Vehicles", {
        params: {
          page: page,
        },
      })
      .then((data) => setVehicles(data.data))
      .catch(() => setVehicles);
  };

  useEffect(() => {
    fetchVehicles();
  }, [page]);

  const [showVehicles, setShowVehicles] = useState(false);

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
        <select
          className="selectLittle"
          value={selectedMake}
          onChange={(value) => {
            setSelectedMake(value.target.value);
            setSelectedModel("");
            setSelectedVersion("");
          }}
        >
          <option value="" disabled hidden>
            Selecione uma Marca
          </option>
          {makes.length > 0 &&
            makes.map((make) => <option value={make.ID}>{make.Name}</option>)}
        </select>
        <select
          className="selectLittle"
          value={selectedModel}
          onChange={(value) => {
            setSelectedModel(value.target.value);
            setSelectedVersion("");
          }}
          disabled={!selectedMake}
        >
          <option value="" disabled hidden>
            Selecione um Modelo
          </option>
          {models.length > 0 &&
            models.map((model) => (
              <option value={model.ID}>{model.Name}</option>
            ))}
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
        <select
          className="selectBig"
          value={selectedVersion}
          onChange={(value) => setSelectedVersion(value.target.value)}
          disabled={!selectedModel}
        >
          <option value="" disabled hidden>
            Selecione uma Versão
          </option>
          {versions.length > 0 &&
            versions.map((version) => (
              <option value={version.ID}>{version.Name}</option>
            ))}
        </select>
      </div>

      <div className="line4">
        <div className="containerLeft">
          <img src={select} className="iconSelect" alt="logo" />
          <label className="labelRed">Busca Avançada</label>
        </div>
        <div className="containerRight">
          <label className="labelGray pointer" onClick={() => clearFilter()}>
            Limpar filtros
          </label>
          <button
            className="buttonOffer pointer"
            onClick={() => setShowVehicles(true)}
          >
            VER OFERTAS
          </button>
        </div>
      </div>

      <div>
        {showVehicles && vehicles.length > 0 && (
          <>
            <div className="container-vehicles">
              {vehicles.map((vehicle) => (
                <div className="container-vehicle">
                  <div className="vehicle">
                    <img
                      src={vehicle.Image}
                      alt={`${vehicle.Make - vehicle.Model}`}
                    />
                    <p>Marca Modelo</p>
                    <p>Valor</p>
                    <div>
                      <p>ano - modelo </p>
                      <p> km </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {page > 1 && (
                <button onClick={() => setPage(page - 1)}>Anterior</button>
              )}
              {vehicles.length === 10 && (
                <button onClick={() => setPage(page + 1)}>Proximo</button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Box;

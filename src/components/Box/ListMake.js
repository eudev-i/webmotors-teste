import React from "react";
import axios from "axios";

export default class ListMake extends React.Component {
  state = {
    make: [],
  };

  componentDidMount() {
    axios
      .get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make`)
      .then((res) => {
        const make = res.data;
        this.setState({ make });
      });
  }

  render() {
    return (
      <select className="selectLittle" name="">
        <option value=""> Marca: Todas </option>
        {this.state.make.map((make) => (
          <option value={make.ID}>
            {make.ID}
            {make.Name}
          </option>
        ))}
      </select>
    );
  }
}

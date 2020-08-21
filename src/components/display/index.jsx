import React, { Component } from "react";
import "./display.css";

class Display extends Component {
  state = {
    votos: [{ voto: 0 }, { voto: 0 }, { voto: 0 }, { voto: 0 }],
  };

  handleIncrement = (index) => {
    let copyState = [...this.state.votos];
    copyState[index].voto++;
    this.setState({ votos: copyState });
  };

  updateState = () => {};

  render() {
    const { itens } = this.props;
    //this.updateState();
    return (
      <div className="display">
        <h2> VOTAÇÃO ABERTA </h2>
        <div className="votacao   ">
          {itens.map((itens, i) => (
            <div key={i} className="container">
              <div className="name">{itens.name}</div>
              <div className="voto">{this.state.votos[i].voto}</div>
              <button onClick={() => this.handleIncrement(i)}>Votar</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Display;

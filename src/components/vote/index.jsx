import React, { Component } from "react";
import Display from "../display";
import "./vote.css";

class Vote extends Component {
  state = {
    itens: [
      { name: "", votes: 0 },
      { name: "", votes: 0 },
      { name: "", votes: 0 },
      { name: "", votes: 0 },
    ],
    show: false,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  updatingState = (data) => {
    let copyState = [...this.state.itens];
    const valor = Object.values(data);
    copyState = copyState.map((d, index) => (d.name = valor[index]));
    this.setState((this.state.itens: copyState));
    this.toggleShow();
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="btn">
          {!this.state.show && (
            <button
              className="btnGerar"
              type="submit"
              onClick={() => this.updatingState(data)}
            >
              GERAR
            </button>
          )}
        </div>
        <div className="btn2">
          {this.state.show && (
            <Display itens={this.state.itens} show={this.state.show} />
          )}

          {this.state.show && (
            <button
              className="btnEncerrar"
              type="submit"
              onClick={() => this.toggleShow()}
            >
              ENCERRAR
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Vote;

import React, { Component } from "react";
import Form from "../form";
import Vote from "../vote";
import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("chegou");
  };

  render() {
    return (
      <div>
        <h2 className="titulo"> CRIE SUA VOTAÇÃO </h2>
        <Form data={this.state} onChange={this.handleChange} />
        <Vote data={this.state} />
      </div>
    );
  }
}

export default Dashboard;

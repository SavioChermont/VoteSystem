import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  render() {
    const { data, onChange, onSubmit } = this.props;
    return (
      <div className="form">
        <label>
          Item 1:
          <input
            type="text"
            onChange={onChange}
            value={data.input1}
            name="input1"
          />
        </label>

        <label>
          Item 2:
          <input
            type="text"
            onChange={onChange}
            value={data.input2}
            name="input2"
          />
        </label>

        <label>
          Item 3:
          <input
            type="text"
            onChange={onChange}
            value={data.input3}
            name="input3"
          />
        </label>

        <label>
          Item 4:
          <input
            type="text"
            onChange={onChange}
            value={data.input4}
            name="input4"
          />
        </label>
      </div>
    );
  }
}

export default Form;

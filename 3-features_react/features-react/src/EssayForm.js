import React from "react";

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Por favor, escribe un ensayo sobre tu elemento DOM favorito.",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Se presentó un ensayo: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ensayo:
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default EssayForm;

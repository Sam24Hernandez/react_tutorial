import React from "react";

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coco" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Tu sabor favorito es: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Escoge tu sabor favorito:
          <select value={this.state.value} onChange={this.handleChange}>
            {" "}
            <option value="grapefruit">Pomelo</option>
            <option value="lime">Limón</option>
            <option value="coconut">Coco</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default FlavorForm;

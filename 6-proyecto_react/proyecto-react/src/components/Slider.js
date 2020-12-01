import React from "react";
import { Link } from "react-router-dom";

class Slider extends React.Component {
  render() {
    return (
      <div id="slider" className={this.props.size}>
        <h1 className="title-lg">{this.props.title}</h1>
        <p className="description-lg">{this.props.description}</p>
        {this.props.btn && <Link to="/blog">{this.props.btn}</Link>}
        <a href="https://es.reactjs.org/" className="tutorial_link">
          Visita su página
          <svg
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4.53657 8.69699"
            className="css-b7q1rs"
          >
            <path
              d="
            M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
            0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
            0,0,1,.18254,8.697Z
          "
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    );
  }
}

export default Slider;

import React from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Blog extends React.Component {
  render() {
    return (
      <div id="blog">
        <Slider title="Blog" size="slider-sm" />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Blogs Destacados</h2>
            {/* listado de articulos */}
            <div id="articles">
              <article className="article-item" id="article-template">
                <div className="image-wrap">
                  <img
                    src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                    alt="Paisaje"
                  />
                </div>
                <h4>Titulo del Artículo</h4>
                <span className="description-article">
                  Breve descripción del artículo...
                </span>
                <small className="date-article"> Hace 5 minutos </small>
                <a href="article.html">
                  Leer más
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
                <div className="clearfix"></div>
              </article>
            </div>
          </section>
          {/** SIDEBAR */}
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Blog;

import React from "react";
import admLogo from "../../assets/admLogo.png";
import styles from "../../componentes/paginaPrincipal/header.css";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <img className="admLogo" src={admLogo} />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ justifyContent: "flex-end", paddingRight: "20rem" }}
        >
          <ul className="navbar-nav">
            <li class="nav-item active">
              <a className="nav-link-hover" href="#">
                Productos
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link-hover" href="#">
                Soluciones
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link-hover" href="#">
                Socios
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link-hover" href="#">
                Servicios
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link-hover" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="65"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 5 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

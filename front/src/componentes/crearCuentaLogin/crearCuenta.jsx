import React, { useState } from "react";
import { Link } from "react-router-dom";
import admLogo from "../../assets/admLogo.png";

const CrearCuenta = () => {
    return (
        <>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <img className="admLogo2" src={admLogo} />
              </div>
              <div class="col-sm">
                <form className="formLogin">
                  <div class="mb-3">
                    <h3>Crear una cuenta</h3>
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Cédula"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre"
                      name="nombre_usuario"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="Email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Correo Electrónico"
                      name="email_usuario"
                    
                    //   value={email_usuario}
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Contraseña"
                      name="contraseña_usuario"
                    //   onChange={onContraseña_empleadoChange}
                    //   value={contraseña_usuario}
                    />
                    <div id="mensaje-error"></div>
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Telefono"
                    />
                  </div>
                  <button  className="btn-primary">
                    Crear Cuenta
                  </button>
                  <div class="mb-3"> 
                  <Link to={"/login"} >
                      <a>Inicio sesión</a>
                    </Link>
                    
                  </div>
                  <div class="mb-3">
                    <a>¿Necesitas ayuda? </a>{" "}
                    <a href="" className="soporteContacto">
                      Soporte de contacto
                    </a>
                  </div>
                  <div class="mb-3">
                    <Link to={"/"} className="linkPagPrincipal">
                      <a>Página principal</a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      );
  };
  
  export default CrearCuenta;
import React, { useState } from "react";
import { Link } from "react-router-dom";

import admLogo from "../../assets/admLogo.png";
import Style from "../login/login.css";

const Login = () => {
  const [email_usuario, setEmail_usuario] = useState(""); // email_usuario es la variable que almacena, setEmail_usuario es la funcion que actualiza el estado de la variable
  const [contraseña_usuario, setContraseña_usuario] = useState("");

  const onEmail_usuarioChange = (e) => {
    setEmail_usuario(e.target.value);
  };
  const onContraseña_empleadoChange = (e) => {
    setContraseña_usuario(e.target.value);
  };

  const onIngresoClick = async () => {
   
    if (email_usuario.length < 1 || contraseña_usuario < 1) {
      document.getElementById('mensaje-error').innerText = 'Complete todos los datos';
    } else {
      try {
        const response = await fetch(
          "http://127.0.0.1:3535/usuarios/ingreso",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email_usuario, contraseña_usuario }),
          }
        );
        if (response.status === 200) {
          console.log("Usuario ingresado correctamente");
          alert("BIENVENIDO");
        } else if (response.status === 404) {
          alert("usuario no encontrado");
        } else {
          const error = await response.json();
          alert(error.message);
          alert("credenciales incorrectas");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    }
  };

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
                <h3>Bienvenido</h3>
              </div>
              <div class="mb-3">
                <input
                  type="Email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electrónico"
                  name="email_usuario"
                  onChange={onEmail_usuarioChange}
                  value={email_usuario}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="contraseña"
                  name="contraseña_usuario"
                  onChange={onContraseña_empleadoChange}
                  value={contraseña_usuario}
                />
                <div id="mensaje-error"></div>
              </div>
              <button onClick={onIngresoClick} className="btn-primary">
                Iniciar sesión
              </button>
              <div class="mb-3"> 
              <Link to={"/crearCuenta"} >
                  <a>Crear Cuenta</a>
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

export default Login;

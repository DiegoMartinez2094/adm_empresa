import React, { useState } from "react";
import { Link } from "react-router-dom";

import admLogo from "../../assets/admLogo.png";
import Style from "../login/login.css";

const Login = () => {
  const [email_empleado, setEmail_empleado] = useState(""); // email_empleado es la variable que almacena, setEmail_empleado es la funcion que actualiza el estado de la variable
  const [contraseña_empleado, setContraseña_empleado] = useState("");

  const onEmail_empleadoChange = (e) => {
    setEmail_empleado(e.target.value);
  };
  const onContraseña_empleadoChange = (e) => {
    setContraseña_empleado(e.target.value);
  };

  const onIngresoClick = async () => {
   
    if (email_empleado.length < 1 || contraseña_empleado < 1) {
      document.getElementById('mensaje-error').innerText = 'Complete todos los datos';
    } else {
      try {
        const response = await fetch(
          "http://127.0.0.1:3535/empleados/ingreso",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email_empleado, contraseña_empleado }),
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
                  name="email_empleado"
                  onChange={onEmail_empleadoChange}
                  value={email_empleado}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="contraseña"
                  name="contraseña_empleado"
                  onChange={onContraseña_empleadoChange}
                  value={contraseña_empleado}
                />
                <div id="mensaje-error"></div>
              </div>
              <button onClick={onIngresoClick} className="btn-primary">
                Iniciar sesión
              </button>
              <div class="mb-3">
                <a>¿Nuevo en administración?</a>{" "}
                <a href="" className="crearCuenta">
                  Crear una cuenta
                </a>
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

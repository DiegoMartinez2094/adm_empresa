import React from "react";
import imagLogin from "../../assets/imagLogin.jpg";
import admLogo from "../../assets/admLogo.png";
import Style from "../login/login.css";

const Login = () => {
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
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electrónico"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                />
              </div>
              <button type="submit" className="btn-primary">
                Iniciar sesión
              </button>
              <div class="mb-3">
                <a>¿Nuevo en administración?</a> <a href="" className="crearCuenta">Crear una cuenta</a>
              </div>
              <div class="mb-3">
                <a>¿Necesitas ayuda? </a> <a href="" className="soporteContacto" >Soporte de contacto</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

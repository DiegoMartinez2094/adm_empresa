import React, { useState } from "react";
import { Link } from "react-router-dom";
import admLogo from "../../assets/admLogo.png";

const CrearCuenta = () => {
  const [cedula_usuario, setcedula_usuario] = useState("");
  const [nombre_usuario, setnombre_usuario] = useState("");
  const [email_usuario, setemail_usuario] = useState("");
  const [contraseña_usuario, setcontraseña_usuario] = useState("");
  const [telefono_usuario, settelefono_usuario] = useState("");

  const oncedula_usuarioChange = (e) => {
    setcedula_usuario(e.target.value);
  };
  const onnombre_usuarioChange = (e) => {
    setnombre_usuario(e.target.value);
  };
  const onemail_usuarioChange = (e) => {
    setemail_usuario(e.target.value);
  };
  const oncontraseña_usuarioChange = (e) => {
    setcontraseña_usuario(e.target.value);
  };
  const ontelefono_usuarioChange = (e) => {
    settelefono_usuario(e.target.value);
  };

  const onRegistroClick = async () => {
    if (
      !cedula_usuario ||
      !nombre_usuario ||
      !email_usuario ||
      !contraseña_usuario ||
      !telefono_usuario
    ) {
      alert("todos los campos son obligatorios");
      return;
    }

    if (
      email_usuario.indexOf("@") === -1 ||
      email_usuario.indexOf(".") === -1
    ) {
      // Validar que el campo de correo electrónico contenga al menos una "@" y al menos un "."

      alert("ingrese un correo valido");
      return;
    }

    try {
      // Verificar si el correo electrónico ya está registrado
      const emailExistsResponse = await fetch(
        `http://127.0.0.1:3535/usuarios/verificarEmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_usuario }),
        }
      );

      if (emailExistsResponse.status === 200) {
        // El correo electrónico ya está registrado
        console.log("correo ya registrado");
        alert("correo electronico ya fue usado anteriormente");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
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
                <h3>Crear una cuenta</h3>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cédula"
                  onChange={oncedula_usuarioChange}
                  value={cedula_usuario}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  onChange={onnombre_usuarioChange}
                  value={nombre_usuario}
                />
              </div>
              <div class="mb-3">
                <input
                  type="Email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electrónico"
                  name="email_usuario"
                  value={email_usuario}
                  onChange={onemail_usuarioChange}

                  //   value={email_usuario}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                  name="contraseña_usuario"
                  value={contraseña_usuario}
                  onChange={oncontraseña_usuarioChange}
                />
                <div id="mensaje-error"></div>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Telefono"
                  value={telefono_usuario}
                  onChange={ontelefono_usuarioChange}
                />
              </div>
              <button className="btn-primary" onClick={onRegistroClick}>
                Crear Cuenta
              </button>
              <div class="mb-3">
                <Link to={"/login"}>
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

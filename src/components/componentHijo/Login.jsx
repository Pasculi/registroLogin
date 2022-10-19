import React, { Fragment, useState } from "react";

const Login = (props) => {
  const { users, setUsers } = props;

  const [registerForm, setRegisterForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegisterOn, setisRegisterOn] = useState(false);

  const [errMessage, setErrMsg] = useState("");

  const handlOnChange = (e) => {
    if (
      e.target.name === "confirmPassword" &&
      e.target.value !== registerForm.password
    ) {
      setErrMsg("* Las contraseñas deben coincidir");
    } else {
      setErrMsg("");
    }

    console.log({ [e.target.name]: e.target.value });
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    console.log(registerForm);
  };

  const handlOnSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Desde el formulario",
      Object.values(registerForm).includes("")
    );
    if (isRegisterOn) {
      if (registerForm.correo === "" || registerForm.password === "") {
        setErrMsg("* Debe llenar todos los campos del formulario");
        return;
      } else {
        setErrMsg("");
        setUsers([...users, registerForm]);
      }
    } else {
      if (registerForm.password !== registerForm.confirmPassword) {
        setErrMsg("* Las contraseñas deben coincidir");
        return;
      }
      if (Object.values(registerForm).includes("")) {
        setErrMsg("* Debe llenar todos los campos del formulario");
        return;
      } else {
        setErrMsg("");
        setUsers([...users, registerForm]);
      }
    }
  };

  return (
    <>
      {!isRegisterOn ? (
        <div>
          <h1 className="titulo">Registro</h1>
          <form onSubmit={handlOnSubmit}>
            <label className="etiqueta" htmlFor="nombre">
              Nombre
            </label>
            <br />
            <input
              onChange={handlOnChange}
              name="nombre"
              className="input"
              value={registerForm.nombre}
              type="text"
              id="nombre"
            />
            <br />

            <label className="etiqueta" htmlFor="nombre">
              Apellido
            </label>
            <br />
            <input
              onChange={handlOnChange}
              name="apellido"
              className="input"
              value={registerForm.apellido}
              type="text"
              id="apellido"
            />
            <br />
            <label className="etiqueta" htmlFor="correo">
              Email
            </label>
            <br />
            <input
              onChange={handlOnChange}
              name="correo"
              className="input"
              value={registerForm.correo}
              type="email"
              id="correo"
            />
            <br />

            <label className="etiqueta" htmlFor="phoneNumber">
              Teléfono
            </label>
            <br />
            <input
              onChange={handlOnChange}
              name="phoneNumber"
              className="input"
              value={registerForm.phoneNumber}
              type="text"
              id="phoneNumber"
            />
            <br />

            <label className="etiqueta" htmlFor="password">
              Password
            </label>
            <br />
            <input
              name="password"
              className="input"
              onChange={handlOnChange}
              value={registerForm.password}
              type="text"
              id="password"
            />
            <br />

            <label className="etiqueta" htmlFor="confirm">
              Confirm Password
            </label>
            <br />
            <input
              name="confirmPassword"
              className="input"
              onChange={handlOnChange}
              value={registerForm.confirmPassword}
              type="text"
              id="confirm"
            />
            <br />
            <p>
              Ya soy un usuario redireccioname al{" "}
              <button
                className="btn btn-login"
                onClick={() => setisRegisterOn(true)}
              >
                Login
              </button>
            </p>
            <br />
            <button className="btn btn-submit" type="submit">
              Enviar
            </button>
          </form>
          <p className="error">{errMessage}</p>
        </div>
      ) : (
        <div>
          <h1 className="titulo">Login</h1>
          <form onSubmit={handlOnSubmit}>
            <label className="etiqueta" htmlFor="correo">
              Email
            </label>
            <br />
            <input
              onChange={handlOnChange}
              name="correo"
              className="input"
              value={registerForm.correo}
              type="email"
              id="correo"
            />
            <br />

            <label className="etiqueta" htmlFor="password">
              Password
            </label>
            <br />
            <input
              name="password"
              className="input"
              onChange={handlOnChange}
              value={registerForm.password}
              type="text"
              id="password"
            />
            <br />

            <p>
              Aún no soy usuario redireccioname al{" "}
              <button
                className="btn btn-register"
                onClick={() => setisRegisterOn(false)}
              >
                Registro
              </button>
            </p>
            <br />
            <button className="btn btn-submit" type="submit">
              Enviar
            </button>
          </form>
          <p className="error">{errMessage}</p>
        </div>
      )}
    </>
  );
};

export default Login;

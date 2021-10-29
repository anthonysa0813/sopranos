import React from "react";
import {
  LoginCard,
  LoginContainer,
  LoginTitleBlock,
} from "../../elements/Login";

import Formulario from "../formulario/Formulario";

const Login = () => {
  return (
    <LoginContainer>
      <LoginCard className="loginContainer">
        <LoginTitleBlock className="loginTileBlock">
          <h3>Login</h3>
        </LoginTitleBlock>
        <Formulario />
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;

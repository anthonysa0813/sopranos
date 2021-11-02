import React from "react";
import { Columna1, Columna2, HomeContainer } from "../../elements/Home";

const Home = () => {
  return (
    <HomeContainer className="containerPrincipal">
      <Columna1 className="columna1">
        <h1>App delivery</h1>
        <h3>Logoo de la empresa</h3>
      </Columna1>
      <Columna2 className="columna2">
        <h1>Bienvenidos!!!</h1>
        <p>vamos a ver como tu pedidos!!!</p>
        <button>Ingresar</button>
      </Columna2>
    </HomeContainer>
  );
};

export default Home;

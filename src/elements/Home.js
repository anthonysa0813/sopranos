import styled from "styled-components";

const HomeContainer = styled.header`
  display: flex;
  height: calc(100vh - 60px);
  flex-direction: column;

  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;

const Columna1 = styled.div`
  /* flex: ; */
  flex: 1 0 50%;
  outline: 2px solid yellow;
`;
const Columna2 = styled.div`
  flex: 1 0 50%;
  outline: 2px solid purple;
`;

export { HomeContainer, Columna1, Columna2 };

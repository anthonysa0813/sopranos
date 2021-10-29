import styled from "styled-components";

const LoginContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled.div`
  width: 500px;
  color: var(--primary);
  background-color: var(--white);
  height: calc(70vh - 100px);
  margin: 0 auto;
  border: 2px solid var(--primary);
  border-radius: 0.5rem;
`;

const LoginTitleBlock = styled.div`
  border-bottom: 1px solid var(--primary);
  & h3 {
    text-align: center;
  }
`;

export { LoginContainer, LoginTitleBlock, LoginCard };

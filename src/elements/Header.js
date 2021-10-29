import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
  gap: 1rem;
  & li {
    list-style: none;
  }
`;

export { HeaderContainer, Menu };

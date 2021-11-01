import styled from "styled-components";

const ListPass = styled.div`
  padding: 1rem;
  border: 1px solid var(--primary);
  //margin-top
  margin-block-start: 1rem;
  border-radius: 0.5rem;
  flex: 1 0 50%;
`;

const PassContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-block: 4rem;
`;

const GeneratorContainer = styled.div`
  flex: 1 0 50%;
`;

const MenuPass = styled.li`
  display: flex;
  justify-content: space-between;
  margin-block: 0.5rem;
`;

const ButtonDelete = styled.button`
  border: none;
  padding: 0.25rem 0.5rem;
  background-color: var(--dangerColor);
  color: var(--white);
  border-radius: 0.25rem;
  &:active {
    transform: scale(1.1);
    transition: ease 0.3s all;
  }
`;

export { ListPass, PassContainer, GeneratorContainer, MenuPass, ButtonDelete };

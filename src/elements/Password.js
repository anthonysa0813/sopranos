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
`;

const GeneratorContainer = styled.div`
  flex: 1 0 50%;
`;

export { ListPass, PassContainer, GeneratorContainer };

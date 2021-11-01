import styled from "styled-components";

const DjListMusic = styled.div`
  border: 1px solid var(--primary);
  padding: 1rem;
  border-radius: 0.5rem;
`;

const DjContainer = styled.div`
  margin-block-end: 3rem;
`;

const MusicItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  & li {
    list-style: none;
  }
`;

export { DjListMusic, DjContainer, MusicItem };

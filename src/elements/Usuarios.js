import styled from "styled-components";

const HeroContainer = styled.div`
  height: 50vh;

  & img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-block-end: 2rem;
`;

const ListMusic = styled.div`
  grid-column: 1/3;
  border: 1px solid var(--primary);
  border-radius: 1rem;
  & hr {
    border: 1px solid var(--primary);
  }
`;
const MusicAdvanced = styled.div`
  grid-column: 3/-1;
  border: 1px solid var(--primary);
  border-radius: 1rem;
  & hr {
    border: 1px solid var(--primary);
  }
`;

const TitleMusic = styled.div`
  border-bottom: 1px solid var(--primary);
  & h3 {
    text-align: center;
  }
`;

const MusicContentList = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 0.5rem;
  margin-block-start: 0.5rem;

  & button {
    padding: 0.25rem 0.5rem;
    border: none;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 0.5rem;
    cursor: pointer;
  }
  & button:active {
    transform: scale(1.1);
    transition: ease 0.3s all;
  }
`;

export {
  HeroContainer,
  InfoContainer,
  ListMusic,
  MusicAdvanced,
  TitleMusic,
  MusicContentList,
};

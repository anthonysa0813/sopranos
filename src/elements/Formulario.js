import styled from "styled-components";

const Form = styled.form`
  display: flex;
  height: inherit;
  /* justify-content: space-between; */
  flex-direction: column;
  padding-inline: 1rem;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-block: 1rem;
`;

const InputForm = styled.input`
  padding: 0.5rem 0.75rem;
  /* margin-block-end: 1rem; */
`;

const Boton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: ease 0.3s all;
  }
`;

const Select = styled.select`
  padding: 0.5rem 0.75rem;
`;

const Option = styled.option`
  border: none;
  margin-block-start: 1rem;
`;

export { Form, Label, InputForm, Boton, Select, Option };

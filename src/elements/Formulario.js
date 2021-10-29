import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-block: 1rem;
`;

const InputForm = styled.input`
  padding: 0.5rem 0.75rem;
  margin-block-end: 1rem;
`;

const Boton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 0.3rem;
`;
export { Form, Label, InputForm, Boton };

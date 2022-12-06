import styled from "styled-components";

export const ContainerClientes = styled.main`
  width: 100vw;
  height: calc(100vh - 7rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;

  input {
    width: 400px;
    height: 30px;
    font-size: 1rem;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

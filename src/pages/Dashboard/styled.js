import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 7rem);
  background-color: green;
  display: grid;
  padding: 2.5rem;
  /* grid-gap: 2rem; */
  grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
`;



import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #1165bb;

  h2 {
    width: 50%;
    font-size: 2rem;
  }
  ul {
    width: 50%;
  }
  .link {
    font-size: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    color: white;
  }
`;

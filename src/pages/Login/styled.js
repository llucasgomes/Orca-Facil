import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: url("../../../public/bg-capacete.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8rem;
`;

export const Container_login = styled.div`
  width: 19.4rem;
  height: 27.9rem;
  background: #f3f3f3;
  box-shadow: 0px 5px 4px -3px rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 0;

  h1 {
    color: #1165bb;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 1rem 0;
  }
  h2 {
    color: #434343;
    font-size: 0.9rem;
    font-weight: 400;
    margin: 0 0 2rem 0;
  }
  label {
    width: 79%;
    font-size: 0.7rem;
    color: #000000;
    margin: 0.8rem 0 0.8rem 0;
    vertical-align: middle;

    input {
      margin: 0 0.5rem 0 0;
      vertical-align: middle;
      background: #1165bb;
    }
  }
`;

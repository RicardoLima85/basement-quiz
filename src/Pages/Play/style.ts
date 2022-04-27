import styled from "styled-components";

export const SectionStart = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 500px;

  display: flex;
  flex-direction: column;

  gap: 10px;

  padding: 30px;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from "styled-components";

export const SectionStart = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  position: relative;
  background-color: #36827f;
  height: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 40px;

  border-radius: 0 0 60px 60px;

  margin-bottom: 50px;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 700;
      color: #fafafa;
    }

    div {
      display: flex;
      gap: 5px;

      span {
        font-weight: 700;
        color: #fafafa;

        &:last-child {
          color: #fff07c;
          align-self: flex-end;
        }
      }
    }
  }

  h2 {
    display: flex;
    color: #fafafa;
    position: absolute;
    bottom: 40px;
  }
  span {
    color: #fafafa;
    font-weight: 500;
    font-size: 18px;
  }
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

import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;

  color: #1e1e24;

  border: 1px solid #aaa;
  border-radius: 10px;
`;

export const Checkbox = styled.div`
  padding: 10px;

  color: #1e1e24;

  border: 1px solid #aaa;
  border-radius: 10px;
  /* background-color: red; */

  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 10px;
`;

export const Select = styled.select`
  padding: 10px;

  color: #1e1e24;

  border: 1px solid #aaa;
  border-radius: 10px;
`;

export const Button = styled.button`
  padding: 10px;

  color: #fafafa;

  border-radius: 10px;
  border: 0;

  background-color: #36827f;

  &:hover {
    cursor: pointer;
  }
`;

import styled from 'styled-components';

const Form = styled.form`
  max-width: 320px;
  margin: 0 auto;
  width: 100%;
  .form-label {
    display: block;
    font-size: 14px;
  }
  .form-input {
    background-color: ${(props) => props.theme.input};
    border: none;
    border-radius: 5px;
    display: block;
    line-height: 2;
    font-size: 16px;
    width: 100%;
    padding: 3px 8px;
    margin-bottom: 16px;
    margin-top: 4px;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 30px 0 0;
  }
`;

const FormTitle = styled.h1`
  margin: 20px 0 10px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 20px;
  border: 2px solid black;
  background-color: ${(props) => props.theme.button};
  cursor: pointer;
  color: black;
  font-size: 14px;
  margin: 0 0 0 15px;
  min-width: 90px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.primary};
  }
`;

export { Form, Button, FormTitle };

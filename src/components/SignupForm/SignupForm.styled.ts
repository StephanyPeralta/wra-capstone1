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
    margin: 5px 0 10px;
  }
`;

const FormTitle = styled.h1`
  font-size: 1.7rem;
  margin: 0 0 7px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  &.btn-margin {
    margin: 30px 0 0;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  font-size: 1.4rem;
  transition: all 0.3s ease-in-out;
`;

const FormButton = styled(Button)`
  border-radius: 5px;
  padding: 0.6rem 1rem;
  border: 2px solid black;
  background-color: ${(props) => props.theme.button};
  color: black;
  font-size: 16px;
  width: 100%;
  &:hover {
    background-color: ${(props) => props.theme.primary};
  }
`;

const ErrorAlert = styled.div`
  display: flex;
  color: darkred;
  align-items: center;
  background-color: #ffebee;
  border-radius: 5px;
  margin: 0 auto 10px;
  padding: 5px 8px;
  width: 100%;
  font-size: 16px;
`;

export { Form, ButtonWrapper, Button, FormButton, FormTitle, ErrorAlert };

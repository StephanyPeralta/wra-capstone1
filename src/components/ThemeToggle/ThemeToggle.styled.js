import styled from 'styled-components';

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const InputTheme = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span:before {
    transform: translateX(22px);
  }
`;

const SliderTheme = styled.span`
  position: absolute;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    border-radius: 50%;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: ${(props) => props.theme.button};
    transition: 0.4s;
  }
`;

export { Toggle, InputTheme, SliderTheme };

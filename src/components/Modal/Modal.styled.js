import styled from 'styled-components';

const ModalWrapper = styled.div`
  background-color: ${(props) => props.theme.hover};
  backdrop-filter: blur(4px);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  .modal-content {
    background-color: ${(props) => props.theme.background};
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    max-width: 350px;
    padding: 10px 20px;
    height: 40vh;
    margin: 30vh auto;
    position: relative;
    overflow: scroll;
  }
`;

export { ModalWrapper };

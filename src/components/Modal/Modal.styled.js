import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10001;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.hover};
  backdrop-filter: blur(4px);
  z-index: 10002;
`;

const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 30%;
  max-width: 320px;
  overflow-y: auto;
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;
  color: ${(props) => props.theme.color};
  overflow: scroll;
  padding: 20px 20px 30px;
  z-index: 10003;
`;

export { ModalWrapper, ModalBackdrop, ModalContent };

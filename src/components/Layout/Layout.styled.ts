import styled from 'styled-components';

const LayoutContainer = styled.div`
  height: 100%;
`;

const SectionWrapper = styled.div`
  display: flex;
  height: 90vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const SectionContainer = styled.section`
  overflow-y: scroll;
  width: 100%;
`;

export { LayoutContainer, SectionWrapper, SectionContainer };

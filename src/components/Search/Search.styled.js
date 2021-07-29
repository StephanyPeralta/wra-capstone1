import styled from 'styled-components';

const SearchContainer = styled.form`
  border-radius: 15px;
  border: 2px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;
  padding: 0.1rem;
  margin: 0 1rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  padding: 0.3rem 0 0.3rem 0.5rem;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

const SearchIconButton = styled.button`
  background: transparent;
  border: none;
  color: black;
  padding: 0 1rem;
  &:focus {
    border: none;
  }
`;

export { SearchContainer, SearchInput, SearchIconButton };

import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  border-radius: 15px;
  border: 2px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

const SearchIconWrapper = styled.div`
  padding: 5px;
  position: absolute;
  color: black;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 15px;
  padding: 5px 40px 5px 10px;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

export { SearchContainer, SearchIconWrapper, SearchInput };

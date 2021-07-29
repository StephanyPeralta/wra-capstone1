import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { SearchContainer, SearchInput, SearchIconButton } from './Search.styled';

function Search() {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search" />
      <SearchIconButton type="submit">
        <SearchIcon />
      </SearchIconButton>
    </SearchContainer>
  );
}

export default Search;

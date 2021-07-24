import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { SearchContainer, SearchIconWrapper, SearchInput } from './Search.styled';

function Search() {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;

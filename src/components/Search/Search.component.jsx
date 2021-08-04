import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { useVideo } from '../../providers/Video.provider';
import { SearchContainer, SearchInput, SearchIconWrapper } from './Search.styled';

function Search() {
  const [termValue, setTermValue] = useState('');
  const { state, dispatch } = useVideo();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'SET_SEARCH_TERM',
        payload: {
          status: true,
          searchTerm: e.target.value,
        },
      });
    }
  };

  const handleChange = (e) => {
    setTermValue(e.target.value);
  };

  useEffect(() => {
    setTermValue(state.searchTerm);
  }, [state.searchTerm]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={termValue}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;

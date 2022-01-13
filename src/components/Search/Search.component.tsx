import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

import { useVideo } from '../../providers/Video';
import { SearchContainer, SearchInput, SearchIconWrapper } from './Search.styled';

function Search() {
  const [termValue, setTermValue] = useState('');
  const { state, dispatch } = useVideo();
  const { push } = useHistory();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'SET_SEARCH_TERM',
        payload: {
          searchStatus: true,
          searchTerm: (e.target as HTMLInputElement).value,
        },
      });
      push('/');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <BiSearchAlt2 size={25} />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;

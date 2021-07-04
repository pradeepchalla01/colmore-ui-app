import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCompany } from '../../redux/actions/SearchAction';
import { getSearchResults } from '../../redux/reducer/SearchReducer';

const Search = () => {
  const searchResults = useSelector(getSearchResults);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const onInput = (event) => {
    setKeyword(event.target.value);
    dispatch(searchCompany(keyword));
  }
  
  console.log(searchResults);
  const handleSubmit = (event) => {
    event.preventDefault();
    setKeyword('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required onInput={onInput} value={keyword}/>
        {keyword && <button type="submit">Cancel</button>}
      </form>
    </>
  )
}

export default Search;

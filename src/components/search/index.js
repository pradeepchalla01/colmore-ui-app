import React, { useState } from 'react';

const Search = () => {
  const [keyword, setKeyword] = useState('');

  const onInput = (event) => {
    setKeyword(event.target.value);
  }
  
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

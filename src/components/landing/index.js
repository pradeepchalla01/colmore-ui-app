import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import APIKey from './../../redux/constants/APIKey';

const Landing = () => {
  const [key, setKey] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    APIKey.setApiKey(key);
    history.push("/search");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required onInput={e => setKey(e.target.value)} />
        <button type="submit">Next</button>
      </form>
    </>
  )
}

export default Landing;

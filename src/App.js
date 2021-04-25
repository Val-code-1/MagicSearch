import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';

const App = () => {
  const [userText, setUserText] = useState();

  return (
    <>
      <textarea
        onChange={e => {
          setUserText(e.target.value);
        }}
        placeholder='enter text'
      ></textarea>
      <h1>Your Magic Cards</h1>
      <Cards searchQuery={userText} name={true} />
    </>
  );
};

export default App;

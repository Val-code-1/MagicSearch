import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [userText, setUserText] = useState();
  const [cards, setCards] = useState();
  // const [sets, setSets] = useState({});

  const Submit = (userText) => {
    fetch(`https://api.magicthegathering.io/v1/cards?name=${userText}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCards(data);
      });
  };
  const sets = {};
  if (cards) {
    cards.cards.forEach((card) => {
      if (Object.keys(sets).indexOf(card.name) === -1) {
        sets[card.name] = [card.set];
      } else {
        sets[card.name].push(card.set);
      }
    });
  }

  return (
    <>
      <textarea
        onChange={(e) => {
          setUserText(e.target.value);
        }}
        placeholder="enter text"
      ></textarea>
      <h1>Your Magic Cards</h1>
      <Cards cards={cards} sets={sets} />
      <button onClick={() => Submit(userText)}>Submit</button>
    </>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import "./Search.css";
import Symbols from "../../assets/mtgSymbols.jpg";
const Search = () => {
  const [userText, setUserText] = useState();
  const [cards, setCards] = useState();
  // const [sets, setSets] = useState({});

  const Submit = (userText) => {
    fetch(
      `https://api.magicthegathering.io/v1/cards?name=${userText}`
    )
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
      <div id="searchAndButton">
        <input
          onChange={(e) => {
            setUserText(e.target.value);
          }}
          placeholder="enter text"
          autoCapitalize="words"
          autoFocus={true}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              Submit(userText);
            }
          }}
        ></input>
        <button onClick={() => Submit(userText)}>
          Submit
        </button>
      </div>
      <h1 id="yourCards">Your Magic Cards</h1>
      {/* <img id="symbols" src={Symbols}></img> */}
      <Cards cards={cards} sets={sets} />
    </>
  );
};

export default Search;

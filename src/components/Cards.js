import React from "react";
import MagicCard from "./MagicCard";

const Cards = ({ cards, sets }) => {
  const resultsList = [];
  if (cards) {
    return (
      <div>
        {cards ? (
          cards.cards.map((card, i) => {
            if (resultsList.indexOf(card.name) === -1) {
              resultsList.push(card.name);
              return (
                <MagicCard cardData={card} key={i} sets={sets[card.name]} />
              );
            }
          })
        ) : (
          <h1>Too bad, pal.</h1>
        )}
      </div>
    );
  } else return <h3>Search a card!</h3>;
};

export default Cards;

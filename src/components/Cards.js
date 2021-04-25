import React, { useState, useEffect } from 'react';
import MagicCard from './MagicCard';

const Cards = ({ name, searchQuery }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    fetch(`https://api.magicthegathering.io/v1/cards?name=${searchQuery}`)
      .then(resp => resp.json())
      .then(data => {
        setCards(data);
      });
  }, [searchQuery]);

console.log(cards)
  if (cards) {
    return (
      <div>
        {name ? (
          cards.cards.map(card => {
            
            return (
              <MagicCard cardData={card} />
            );
          })
        ) : (
          <h1>Too bad, pal.</h1>
        )}
      </div>
    );
  } else return <h3>Loading Your Cards...</h3>;
};

export default Cards;

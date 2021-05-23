import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
} from "@material-ui/core";
import SymbolReplace from "../../WTF/SymbolReplace";
import ImageButton from "../ImageButton/ImageButton";
import defaultImage from "../../assets/defaultImage.png";
import "./MagicCard.css";

const MagicCard = ({ cardData, sets, cards }) => {
  const { id, name, type, imageUrl, manaCost, text } =
    cardData;
  const [hinge, setHinge] = useState(false);
  const [image, setImage] = useState(imageUrl);
  useEffect(() => {
    if (!imageUrl) {
      setImage(defaultImage);
    }
  }, []);
  console.log(cards);
  console.log(cardData);
  console.log(sets);
  let unique = [];
  cards.cards.forEach((card) => {
    if (card.name === name) {
      unique.push(card);
    }
  });
  console.log(unique);
  return (
    <Card key={id}>
      <CardContent>
        <div id="magicCard">
          <Button onClick={() => setHinge(!hinge)}>
            Press to View {name}
          </Button>
          <Collapse in={hinge}>
            <img src={image} className="img" />
          </Collapse>
          <p>{SymbolReplace(manaCost)}</p>
          <p>{type}</p>
          <p>{text}</p>
          <ImageButton
            sets={sets}
            cards={unique}
            setImage={setImage}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MagicCard;

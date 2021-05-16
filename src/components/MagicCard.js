import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
} from "@material-ui/core";
import SymbolReplace from "../WTF/SymbolReplace";
import ImageButton from "./ImageButton";

const MagicCard = ({ cardData, sets, cards }) => {
  const { id, name, type, imageUrl, manaCost } = cardData;
  const [hinge, setHinge] = useState(false);
  const [image, setImage] = useState(imageUrl);
  // console.log(cards);
  return (
    <Card key={id}>
      <CardContent>
        <div>
          <Button onClick={() => setHinge(!hinge)}>
            Press to View {name}
          </Button>
          <Collapse in={hinge}>
            <img src={image} />
          </Collapse>
          <p>{SymbolReplace(manaCost)}</p>
          <p>{type}</p>
          <ImageButton
            sets={sets}
            cards={cards}
            setImage={setImage}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MagicCard;

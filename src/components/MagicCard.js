import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Collapse,
} from "@material-ui/core";
import SymbolReplace from "../WTF/SymbolReplace";

const MagicCard = ({ cardData }) => {
  const [hinge, setHinge] = useState(false);
  const { id, name, type, set, imageUrl, manaCost } = cardData;
  // console.log(cardData);
  return (
    <Card key={id}>
      <CardContent>
        <div>
          <Button onClick={() => setHinge(!hinge)}>Press to View {name}</Button>
          <Collapse in={hinge}>
            <img src={imageUrl} />
          </Collapse>
          <p>{SymbolReplace(manaCost)}</p>
          <p>{type}</p>
          <p>{set}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagicCard;

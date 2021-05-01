import React, { useState } from "react";
import { Button, Card, CardContent, Collapse } from "@material-ui/core";
import SymbolReplace from "../WTF/SymbolReplace";

const MagicCard = ({ cardData, sets }) => {
  const [hinge, setHinge] = useState(false);
  const { id, name, type, imageUrl, manaCost } = cardData;

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
          <p>{sets.join(" ")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagicCard;

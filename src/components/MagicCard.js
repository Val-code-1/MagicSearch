import React, { useState, useEffect } from 'react'
import {Button, Card, CardContent, CardMedia, Collapse} from '@material-ui/core'

const MagicCard = ({cardData}) => {
      const [hinge, setHinge] = useState(false);
      const {id, name, type, set, imageUrl, manaCost} = cardData;
      console.log(cardData)
    return (
        <Card>
              <CardContent >
              <div key={id}>
                <Button onClick={() => setHinge(!hinge)}>Press to View {name}</Button>
                <Collapse in={hinge}>
                <img src={imageUrl}/>
                </Collapse>
                <p>{manaCost}</p>
                <p>{type}</p>
                <p>{set}</p>
              </div>
              </CardContent>
              </Card>
    )
}

export default MagicCard;
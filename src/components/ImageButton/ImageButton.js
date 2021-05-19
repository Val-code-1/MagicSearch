import React from "react";
import defaultImage from "../../assets/defaultImage.png";
import "./ImageButton.css";

const ImageButton = ({ sets, cards, setImage }) => {
  console.log(cards);
  return (
    <div id="buttons">
      {sets.map((set, i) => {
        return (
          <button
            className="imgButtons"
            onClick={() => {
              if (!cards.cards[i].imageUrl) {
                console.log("No image Url");
                setImage(defaultImage);
              } else {
                setImage(cards.cards[i].imageUrl);
              }
            }}
          >
            {set}
          </button>
        );
      })}
    </div>
  );
};

export default ImageButton;

import React from "react";
import defaultImage from "../../assets/defaultImage.png";
import "./ImageButton.css";

const ImageButton = ({ sets, cards, setImage }) => {
  return (
    <div id="buttons">
      {sets.map((set, i) => {
        return (
          <button
            className="imgButtons"
            onClick={() => {
              if (!cards[i].imageUrl) {
                setImage(defaultImage);
                console.log("No image Url");
              } else {
                setImage(cards[i].imageUrl);
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

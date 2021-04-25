import React from "react";
import White from "../assets/whiteMana.png";
import Blue from "../assets/blueMana.png";
import Black from "../assets/blackMana.png";
import Green from "../assets/greenMana.png";
import Red from "../assets/redMana.png";
import oneMana from "../assets/1Mana.png";
import twoMana from "../assets/2Mana.png";
import threeMana from "../assets/3Mana.png";
import fourMana from "../assets/4Mana.png";
const symbolReplace = (manaCost) => {
  if (manaCost !== undefined) {
    let arrayMana = manaCost.split("");
    let upperRight = arrayMana.filter(
      (cost) => cost !== "{" && cost !== "}"
    );
    return upperRight.map((symbol) => {
      let icon;
      switch (symbol) {
        case "W":
          icon = White;
          break;
        case "U":
          icon = Blue;
          break;
        case "B":
          icon = Black;
          break;
        case "G":
          icon = Green;
          break;
        case "R":
          icon = Red;
          break;
        case "1":
          icon = oneMana;
          break;
        case "2":
          icon = twoMana;
          break;
        case "3":
          icon = threeMana;
          break;
        case "4":
          icon = fourMana;
          break;
        default:
          console.log(symbol);
      }
      return <img src={icon} />;
    });
  }
};
export default symbolReplace;

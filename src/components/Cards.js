import React from "react";
import Card from "./Card.js";

export default function Cards(props) {
  return props.cards.map((card) => {
    return <Card key={card.id} {...card} handleClick={props.handleClick} />;
  });
}

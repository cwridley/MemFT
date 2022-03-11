import React from "react";
import Card from "./Card.js";

export default function LandingCards(props) {
  return props.cards.map((card) => {
    return <Card key={card.id} {...card} handleClick={props.handleClick} />;
  });
}

import React from "react";
import styled, { css } from "styled-components";
import Tile from "./Tile.js";

const LandingGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  width: 100vw;
  overflow: none;
`;

const Land = styled.div`
  grid-area: 2 / 3 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #444444;

  > h1 {
    font-size: 10rem;
    margin: 0;
    -webkit-text-stroke: 2px white;
  }

  > h2 {
    font-size: 2rem;
  }

  > button {
    font-size: 2rem;
    padding: 2rem;
    border-radius: 3rem;
    border: none;
    background-color: #222222;
    color: lightgray;
    margin: 3rem;
  }
`;

export default function Landing(props) {
  const [cards, setCards] = React.useState(() => {
    return [...Array(14).keys()].map((k) => {
      return { id: k, flipped: false };
    });
  });

  const cardElements = cards.map((card) => {
    return <Tile key={card.id} id={card.id} />;
  });

  return (
    <LandingGrid>
      {cardElements}
      <Land key="land">
        <h1>MemFT</h1>
        <h2>A memory game with your favorite NFT collections</h2>
        <button onClick={props.handleLanding}>Test Your Memory</button>
      </Land>
    </LandingGrid>
  );
}

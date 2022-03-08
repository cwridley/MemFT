import React from "react";
import styled, { css } from "styled-components";
import Cards from "./Cards.js";

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
  text-align: center;

  > h1 {
    font-size: 10rem;
    margin: 0;
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
    return [...Array(14).keys()].map((k, i) => {
      return {
        id: k,
        matchId: i % 7,
        front: false,
        img: `/images/${i % 7}.png`,
        match: false,
      };
    });
  });

  const [remains, setRemains] = React.useState(() => {
    return [...Array(14).keys()];
  });
  // use UseEffect to keep the cards and remains state variables in sync
  // every time the cards state changes make sure the remains variable reflects the change
  React.useEffect(() => playGame(remains), []); //dependencies array will be cards (too spammy without timeout)

  function playGame(remains) {
    const cardsLeft = remains.length;
    if (cardsLeft === 0) return;
    //for the cards that don't have a match pick 2
    const picks = [...Array(2)].map((x) => {
      return remains[Math.floor(Math.random() * cardsLeft)];
    });
    // if picks match generate a new second pick
    do {
      picks[1] = remains[Math.floor(Math.random() * cardsLeft)];
    } while (picks[0] === picks[1]);

    //set state so that two pick are face up
    setCards((oldCards) => {
      return oldCards.map((card) => {
        return {
          ...card,
          front:
            card.id === picks[0] || card.id === picks[1]
              ? !card.front
              : card.front,
        };
      });
    });
    //if cards match - set match to true (they should remain face up)
    //if no match - wait one second and flip back to face down
  }

  function handleClick(Event) {
    const id = Event.target.id;
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (id == card.id) {
          return { ...card, front: !card.front };
        } else {
          return card;
        }
      });
    });
  }

  return (
    <LandingGrid>
      <Cards cards={cards} handleClick={handleClick} />
      <Land key="land">
        <h1>MemFT</h1>
        <h2>A memory game with your favorite NFT collections</h2>
        <button onClick={props.handleLanding}>Test Your Memory</button>
      </Land>
    </LandingGrid>
  );
}

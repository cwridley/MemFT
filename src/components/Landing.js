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
        memory: false,
      };
    });
  });

  React.useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.front && !card.match) {
          return endTurn(cards);
        }
      }
      playGame(cards);
    }, 1000); // 1s seems to be a nice amount of time
  }, [cards]); //dependencies array will be cards (w/out memory it is awful to watch)

  function endTurn() {
    setCards((oldCards) => {
      return oldCards.map((card) => {
        return { ...card, front: card.match ? true : false };
      });
    });
  }

  function playGame(cards) {
    // cards that do not yet have a match
    const unseen = cards.filter((card) => !card.match && !card.memory);
    const seen = cards.filter((card) => !card.match && card.memory);
    const picks = [1, 2];

    // if all cards have a match stop playing games
    const cardsLeft = unseen.length + seen.length;
    if (cardsLeft === 0) return;

    if (seen.length === 0) {
      picks[0] = unseen[Math.floor(Math.random() * unseen.length)];
      do {
        picks[1] = unseen[Math.floor(Math.random() * unseen.length)];
      } while (picks[0] === picks[1]);
    }

    // check for pairs in cards we have already seen
    if (seen.length > 0) {
      let memoryMatch = false;
      const memory = [];
      for (let i = 0; i < seen.length; i++) {
        if (memory.includes(seen[i].matchId)) {
          memoryMatch = seen[i].matchId;
        } else {
          memory.push(seen[i].matchId);
        }
      }

      if (memoryMatch !== false) {
        setCards((oldCards) => {
          return oldCards.map((card) => {
            if (card.matchId == memoryMatch) {
              return { ...card, front: true, match: true };
            } else {
              return { ...card };
            }
          });
        });
        // if two cards are picked from memory end turn
        return;
      } else {
        // pick a random unseen card
        picks[0] = unseen[Math.floor(Math.random() * unseen.length)];

        // check seen cards for the matching pair
        for (let i = 0; i < seen.length; i++) {
          if (picks[0].matchId === seen[i].matchId) {
            memoryMatch = picks[0].matchId;
            // if we find a match we will set state with the found match
            setCards((oldCards) => {
              return oldCards.map((card) => {
                if (card.matchId == memoryMatch) {
                  return { ...card, front: true, match: true };
                } else {
                  return { ...card };
                }
              });
            });
            // if we have a match in memory end turn
            return;
          }
        }

        // if no match is found in memory pick a second card from unseen list
        do {
          picks[1] = unseen[Math.floor(Math.random() * unseen.length)];
        } while (picks[0] === picks[1]);
      }
    }
    //set state picking two random, unseen cards
    setCards((oldCards) => {
      return oldCards.map((card) => {
        return {
          ...card,
          front:
            card.id === picks[0].id || card.id === picks[1].id
              ? !card.front
              : card.front,
          match:
            (card.id === picks[0].id || card.id === picks[1].id) &&
            picks[0].matchId === picks[1].matchId
              ? !card.match
              : card.match,
          memory:
            card.id === picks[0].id || card.id === picks[1].id
              ? true
              : card.memory,
        };
      });
    });
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

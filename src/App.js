import React from "react";
import styled, { css } from "styled-components";
import Landing from "./components/Landing.js";
import GameForm from "./components/GameForm.js";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const GameContiner = styled.div`
  font-size: 10rem;

  ${(props) =>
    props.cardCount == 12 &&
    css`
      display: grid;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      height: 100vh;
      width: 100vw;
      overflow: none;
    `}

  ${(props) =>
    props.cardCount == 24 &&
    css`
      display: grid;
      align-items: center;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(4, 1fr);
      height: 100vh;
      width: 100vw;
      overflow: none;
    `}
    
  ${(props) =>
    props.cardCount == 36 &&
    css`
      display: grid;
      align-items: center;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(4, 1fr);
      height: 100vh;
      width: 100vw;
      overflow: none;
    `}
`;

export default function App() {
  const [landing, setLanding] = React.useState(true);
  const [gameOptions, setGameOptions] = React.useState({
    formActive: true,
    cardCount: 0,
    nftProject: "",
  });

  const handleLanding = () => {
    setLanding(false);
  };

  // eventually this will make an API call to the server but for now we will store the files in the public folder
  const handleSubmit = (event) => {
    event.preventDefault();
    const { cardCount, nftProject } = event.target;
    setGameOptions({
      formActive: false,
      cardCount: cardCount.value,
      nftProject: nftProject.value,
    });
  };

  return (
    <AppContainer className="App">
      {landing ? (
        <Landing handleLanding={handleLanding} />
      ) : gameOptions.formActive ? (
        <GameForm handleSubmit={handleSubmit} />
      ) : (
        <GameContiner cardCount={gameOptions.cardCount}></GameContiner>
      )}
    </AppContainer>
  );
}

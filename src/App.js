import React from "react";
import styled, { css } from "styled-components";
import Landing from "./components/Landing.js";
import GameForm from "./components/GameForm.js";

const AppContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [landing, setLanding] = React.useState(true);
  const [gameOptions, setGameOptions] = React.useState({
    formActive: false,
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
    console.log(cardCount.value, nftProject.value);
  };

  return (
    <AppContainer className="App">
      {landing ? (
        <Landing handleLanding={handleLanding} />
      ) : (
        <GameForm handleSubmit={handleSubmit} />
      )}
    </AppContainer>
  );
}

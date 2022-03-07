import React from "react";
import styled, { css } from "styled-components";

const Land = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: #444444;

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
  return (
    <Land>
      <h1>MemFT</h1>
      <h2>A memory game with your favorite NFT collections</h2>
      <button onClick={props.handleLanding}>Test Your Memory</button>
    </Land>
  );
}

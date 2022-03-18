import React from "react";
import styled, { css } from "styled-components";

const StartForm = styled.form`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: grey;
  padding: 2rem;
  border-radius: 1rem;
  margin: auto;

  > select {
    height: 3rem;
    font-size: 3rem;
  }

  > button,
  select {
    height: 5rem;
    border: none;
    border-radius: 0.5rem;
    margin: 2rem;
  }
`;

export default function GameForm(props) {
  return (
    <StartForm onSubmit={props.handleSubmit}>
      <label htmlFor="cardCount">Pick the number of cards to play with.</label>
      <select name="cardCount" id="cardCount">
        <option value={12}>12 Cards</option>
        <option value={24}>24 Cards</option>
        <option value={32}>32 Cards</option>
      </select>
      <label htmlFor="nftProject">Which NFT project do you want to use?</label>
      <select name="nftProject" id="nftProject">
        <option value="bored apes">bored apes</option>
        <option value="cyber punks">cyber punks</option>
      </select>
      <button>Start Game</button>
    </StartForm>
  );
}

import React from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #b0b0b0;
  background-color: #222222;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 25rem;
  width: 20rem;
  border-radius: 2rem;
  margin: auto;

  ${(props) =>
    props.front &&
    css`
      background-color: blue;
    `}
`;

export default function Tile() {
  /*
  Need to raise state to a higher level component so we can track in a centalized location which cards are flipped and if it is a match or not.
  */
  const [front, setFront] = React.useState(false);

  return (
    <div>
      <Card front={front} onClick={() => setFront(!front)}>
        MemFT
      </Card>
    </div>
  );
}

import React, { Fragment } from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  background-color: #222222;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 25rem;
  width: 20rem;
  border-radius: 2rem;

  ${(props) =>
    props.front &&
    css`
      background-color: blue;
    `}
`;

export default function Tile() {
  const [front, setFront] = React.useState(false);

  return (
    <div>
      <Card front={front} onClick={() => setFront(!front)}>
        MemFT
      </Card>
    </div>
  );
}

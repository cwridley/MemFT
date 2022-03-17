import React from "react";
import styled, { css } from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: #b0b0b0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 25rem;
  width: 20rem;
  border-radius: 2rem;
  margin: auto;
  background-image: url("/images/endless-constellation.svg");

  ${(props) =>
    (props.front || props.match) &&
    css`
      background-image: url(${props.img});
      background-color: white;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    `};
`;
export default function Card(props) {
  return (
    <div>
      <CardContainer
        id={props.id}
        front={props.front}
        match={props.match}
        img={props.img}
        onClick={(Event) => {
          props.handleClick(Event);
        }}
      >
        {props.front ? "" : "MemFT"}
      </CardContainer>
    </div>
  );
}

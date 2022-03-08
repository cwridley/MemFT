import React from "react";
import styled, { css } from "styled-components";

const CardContainer = styled.div`
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
      background-image: url(${props.img});
      background-color: white;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    `}
`;
export default function Card(props) {
  return (
    <div>
      <CardContainer
        id={props.id}
        front={props.front}
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

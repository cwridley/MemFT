import React from "react";
import Tile from "./components/Tile.js";
import Landing from "./components/Landing.js";

export default function App() {
  const [landing, setLanding] = React.useState(true);
  const [cards, setCards] = React.useState([
    { num: 1 },
    { num: 2 },
    { num: 2 },
  ]);

  const handleLanding = () => {
    setLanding(false);
  };

  return (
    <div className="App">
      {landing ? <Landing handleLanding={handleLanding} /> : <Tile></Tile>}
    </div>
  );
}

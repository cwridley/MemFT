import React from "react";
import Card from "./components/Card.js";
import Landing from "./components/Landing.js";

export default function App() {
  const [landing, setLanding] = React.useState(true);

  const handleLanding = () => {
    setLanding(false);
  };

  return (
    <div className="App">
      {landing ? <Landing handleLanding={handleLanding} /> : <Card></Card>}
    </div>
  );
}

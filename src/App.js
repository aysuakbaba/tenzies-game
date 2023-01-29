import React from "react";
import "./index.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = React.useState(allNewDices());

  function allNewDices() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
      });
     
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDices());
  }

  const diceElement = dice.map((die) => <Die value={die.value} isHeld={die.isHeld} />);
  return (
    <main>
      <div className="container">{diceElement}</div>
      <button onClick={rollDice} className="roll-dice">
        Roll
      </button>
    </main>
  );
}

export default App;

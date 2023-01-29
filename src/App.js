import React from "react";
import "./index.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
function App() {
  const [dice, setDice] = React.useState(allNewDices());

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()

    }
  }

  function allNewDices() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      });
    }
    return newDice;
  }


  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
          die : generateNewDie()
    }));
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));
  return (
    <main>
      <h1 className="tenzies-header">TENZIES</h1>
      <p className="tenzies-text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">{diceElement}</div>
      <button onClick={rollDice} className="roll-dice">
        Roll
      </button>
    </main>
  );
}

export default App;

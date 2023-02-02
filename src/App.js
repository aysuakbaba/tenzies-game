import React from "react";
import "./index.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = React.useState(allNewDices());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
      console.log("you won!")
    }
  }, [dice])

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
    if(!tenzies){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
            die : generateNewDie()
      }));    
    }
    else{
      setTenzies(false)
      setDice(allNewDices)
    }
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
      {tenzies && <Confetti/>}
      <h1 className="tenzies-header">TENZIES</h1>
      <p className="tenzies-text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">{diceElement}</div>
      <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" : "Roll"}</button>
      
    </main>
  );
}

export default App;

import React from 'react';
import './index.css';
import Die from "./components/Die"


function App() {
  const [dice , setDice] = React.useState(allNewDices)

    function allNewDices(){
        const newDice = []
        for(let i=0; i<10; i++){
            newDice.push(Math.ceil(Math.random()*6))
        }
        return newDice
    }

    const diceElement = dice.map(die => <Die value={die}/>)
  return (
      <main>
        <div className='container'>
        {diceElement}
        </div>
        
      

      </main>
  
  );
}

export default App;

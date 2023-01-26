import React from "react";



function Die(props) {

    function allNewDices(){
        const newDice = []
        for(let i=0; i<10; i++){
            newDice.push(Math.ceil(Math.random()*6))
        }
        return newDice

    }
    return(
        <div className="die-face">
            <h2 className="die-num">{props.value}</h2>

        </div>
    )
}























export default Die;
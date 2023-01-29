import React from "react";



function Die(props) {

    const dieStyle={
        backgroundColor: props.isHeld ? "#03C988" : "white" 
    }
    
    return(
        <div className="die-face" style={dieStyle} onClick={props.holdDice}>
            <h2 className="die-num">{props.value}</h2>
           

        </div>
    )
}























export default Die;
import React from "react";



const BestPokemon = (props) =>{
    // const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return(
      <div>
        <p>
        My favorite Pokemon is Squirtle
      </p>
      <ul>
      {/* {abilities.map((name)=>( */}
        <li>{props.abilities[0]}</li>
        <li>{props.abilities[1]}</li>
        <li>{props.abilities[2]}</li>
      {/* )) */}
    
        
      </ul>
      </div>
    );
  
  }






export default BestPokemon;
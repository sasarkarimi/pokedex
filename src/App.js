import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

 
function App() {
  return(
    
    <div>
    
      <Logo  appName="Pokedex"/>
      <BestPokemon  abilities= {['Anticipation', 'Adaptability', 'Run-Away']}/>
      <CaughtPokemon  date = {new Date().toLocaleDateString()} />

      </div>
    
  );

}
// const Logo  = () =>{
//   const appName = "Sahar's Pokedex";
//   return(
//     <header>
//     <h1>
//     Welcome to the {appName}
//     </h1>
//     <img  src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt=""/>
//     </header>
//   );

// }
// const BestPokemon = () =>{
//   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
//   return(
//     <div>
//       <p>
//       My favorite Pokemon is Squirtle
//     </p>
//     <ul>
//     {abilities.map((name)=>(
//       <li>{name}</li>
//     ))
//   }
      
//     </ul>
//     </div>
//   );

// }
// const CaughtPokemon =()=>{
//   const date = new Date().toLocaleDateString();
//   return(
//     <p>
//       Caught 0 Pokemon on {date}
//     </p>
//   );
// }











export default App;




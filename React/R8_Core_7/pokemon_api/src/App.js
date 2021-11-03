import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // We expect an array of pokemon objects back, so we'll choose an empty array as the initial value to be held in state
  // const [pokemon, setPokemon] = useState([]);
  
  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
  //     .then(res=>{
  //       console.log(res);
  //       return res.json()
  //     })
  //     .then(res=>{
  //       console.log(res);
  //       setPokemon(res.results)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, []);
    // //with fetch, we must first convert our initial result of our successful (resolution) promise into the more readable JSON
    // //that also returns a promise that must be handled.


    // We expect an array of pokemon objects back, so we'll choose an empty array as the initial value to be held in state
  const [pokemon, setPokemon] = useState([]);

    // // this will run immediately after the JSX is rendered
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)

      .then(res=>{
        console.log(res.data.results);
          // store the json converted data in state so it can be displayed      
        setPokemon(res.data.results);
      })
        // catch handles an unsuccessful result (rejection/ERROR) of any promise ahead of it
      .catch((err) => {
        console.log(err);
      })
    // no clean up statement is required since we are not using resources that will continue to run
  }, []);
    // The empty array as the second parameter makes it so that useEffect does NOT run more than once

  return (
    <div className="App" style={{ width: "250px", margin: "auto"}}>
      <h2>Axios Pokemon Api</h2>
      <ul>
        {
          pokemon.map((pokeList, index)=>{
            return (<li key={index}>{pokeList.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
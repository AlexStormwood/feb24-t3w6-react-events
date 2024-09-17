import React from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      numberOfPokemon: 6
    }
  }

  exampleLog1 () {
    console.log("Function 1 logging!");
  }

  exampleLog2 () {
    console.log("Function 2 logging!");
  }

  decreasePokemonNumber(){
    if (this.state.numberOfPokemon > 0){
      this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
    }
  }

  decreasePokemonNumber = () => { 
    if (this.state.numberOfPokemon > 0){
      this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
    }
  };

  increasePokemonNumber = () => {
    this.setState({numberOfPokemon: this.state.numberOfPokemon + 1});
  }

 

  render(){
    return(
      <>
        <h1>Hello World!</h1>
        <p>Blah blah blah blah </p>
        <h2>Number of Pokemon: {this.state.numberOfPokemon}</h2>
        <button onClick={()=> {
          this.exampleLog1();
          this.exampleLog2();
          this.decreasePokemonNumber();
        }}>
          Decrease Pokemon Amount 
        </button>
        <button onClick={this.increasePokemonNumber}>
          Increase Pokemon Amount
        </button>

        {
          // Create an array with a length equal to state
          Array(this.state.numberOfPokemon)
          .fill(null) // fill() just gives each item in the array something, so we can use it properly
          // the actual part that does the loop or repeated action
          .map((element, index) => {
            // repeated action is in this block!
            return <PokemonCard key={index} />
          })
        }
        

      </>
    )
  }
}

export default App;

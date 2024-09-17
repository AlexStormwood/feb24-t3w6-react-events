import React from 'react';
import './App.css';

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
    this.setState({ numberOfPokemon: this.state.numberOfPokemon - 1 }); 
  };




  increasePokemonNumber(){
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
      </>
    )
  }
}

export default App;

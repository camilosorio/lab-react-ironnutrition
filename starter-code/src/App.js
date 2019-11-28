import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox'
import foods from './foods.json'
import './App.css';

class App extends Component {


  render() {
    return (
      <section id='main-section'>

        {foods.map((f, i) => (
          < FoodBox
            key={i}
            name={f.name}
            image={f.image}
            calories={f.calories}
            quantity={f.quantity}
          />
        ))}


      </section>
    );
  }
}

export default App;

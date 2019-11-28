import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Formfood from './FormFood'
import FoodBox from './FoodBox'
import foods from './foods.json'
import './App.css';

class App extends Component {

  state = {
    currentFood: [],
    newFood: {},
    formHide: true,

  }

  handleChange = evt => {
    this.setState({ newFood: { ...this.state.newFood, [evt.target.name]: evt.target.value } }, () => { console.log(this.state.newFood) });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const copy = [...this.state.currentFood]
    copy.push(this.state.newFood)
    this.setState({ currentFood: copy })
  }

  openForm = evt => {
    const openBtn = 'form-block active'
    return openBtn;
  }

  componentDidMount() {
    this.setState({ currentFood: foods })
  }

  render() {
    return (
      <section id='main-section'>
        <button id='add-food' onClick={this.openForm}>Add new food</button>

        {this.state.currentFood.map((f, i) => (
          < FoodBox
            key={i}
            name={f.name}
            image={f.image}
            calories={f.calories}
            quantity={f.quantity}
          />
        ))}

        <Formfood
          status={this.openForm}
          clbkChange={this.handleChange}
          clbkSubmit={this.handleSubmit}
        />

      </section>
    );
  }
}

export default App;

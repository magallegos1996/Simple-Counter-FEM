import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    }
    /*
    Tienes que tener mucho cuidado en cuanto al significado de 'this' en los callbacks de JSX.
    En JavaScript, los métodos de clase no están ligados por defecto. Si olvidas ligar this.increment (o decrement o reset)
    y lo pasas a onClick, 'this' será undefined cuando se llame la función.*/
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  storeStateInLocalStorage() {
    localStorage.setItem('counterState', JSON.stringify(this.state));
  }
  increment() {
    this.setState(increment, this.storeStateInLocalStorage);
  }
  decrement() {
    this.setState({count: this.state.count - 1});
  }
  reset() {
    this.setState({count: 0})
  }
  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{ count }</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}
const increment = (state, props) => {
  if (state.count >= props.max) return;
  return { count: state.count + 1 };
};
const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

export default Counter;

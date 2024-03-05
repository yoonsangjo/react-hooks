import { Component, useState } from 'react';

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem((cur) => cur + 1);
  const decrementItem = () => setItem((cur) => cur - 1);

  return (
    <>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </>
  );
};

class AppUgly extends Component {
  state = {
    item: 1,
  };

  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };

  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };

  render() {
    const { item } = this.state;
    return (
      <>
        <h1>Hello {item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </>
    );
  }
}

export default App;

import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fname: "Alaa",
    };
    this.chngeName = this.chngeName.bind(this); // as you like you can change this function like mainName and remove this line
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  chngeName() {
    this.setState({
      fname: "Abdo-El-Naggar",
    });
  }
  mainName = () => {
    this.setState({
      fname: "Alaa",
    });
  };
  render() {
    return (
      <div className="text-center my-5">
        <h1>--------------------------------------</h1>
        <h1>Counter - - Class </h1>
        <h1>--------------------------------------</h1>

        <h1>Counter: {this.state.count}</h1>
        <button
          className="btn btn-danger fw-bold me-2"
          onClick={this.increment}
        >
          +
        </button>
        <button className="btn btn-warning fw-bold" onClick={this.decrement}>
          -
        </button>
        <h1>The Name: {this.state.fname}</h1>
        <button
          className="btn btn-danger fw-bold me-2"
          onClick={this.chngeName}
        >
          ChangeName
        </button>
        <button className="btn btn-warning fw-bold" onClick={this.mainName}>
          MainName
        </button>
      </div>
    );
  }
}
export default CounterClass;

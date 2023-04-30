import React from "react";

class WelcomeClass extends React.Component {
  //there are two way to define state First one
  // state = {
  //   fname: "Alaa ",
  //   lname: "Abdo ",
  //   famlynam: "Elnagggar",
  // };

  //the seconde way is construactor

  constructor(props) {
    super(props);
    this.state = {
      fname: "Alaa ",
      lname: "Abdo ",
      famlynam: "Elnagggar",
    };
  }

  render() {
    return (
      <>
        <h1>Classss Component</h1>
        <h1>
          My Nmae is {this.state.fname} and the seconde nameis{" "}
          {this.state.lname} with family title {this.state.famlynam}
        </h1>
        <h1>Welcome Mr : {this.props.name ? this.props.name : "....."} .</h1>
        <h1>
          You Had : {this.props.age ? this.props.age : "....."} Years Old .
        </h1>
        <h1>
          You Job Is : {this.props.jop ? this.props.jop : "....."} At Company
          Name {this.props.company ? this.props.company : "......"} .
        </h1>
        <h1>
          You Have Car With Color : {this.props.jop ? this.props.jop : "....."}{" "}
          .
        </h1>
      </>
    );
  }
}

export default WelcomeClass;

// import React from "react";

// class WelcomeClass extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Classss Component</h1>

//         <h1>Welcome Mr : {this.props.name ? this.props.name : "....."} .</h1>
//         <h1>You Had : {this.props.age ? this.props.age : "....."} Years Old .</h1>
//         <h1>
//           You Job Is : {this.props.jop ? this.props.jop : "....."} At Company Name{" "}
//           {this.props.company ? this.props.company : "......"} .
//         </h1>
//         <h1>You Have Car With Color : {this.props.jop ? this.props.jop : "....."} .</h1>
//       </>
//     );
//   }
// }

// export default WelcomeClass;

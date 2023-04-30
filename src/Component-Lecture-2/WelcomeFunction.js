
const WelcomeFunction = ({name,age,jop,company,color}) => {
  return (
    <div className="WelcomeFunction">
      <h1>Welcome Mr : {(name)?name: "....."} .</h1>
      <h1>You Had  : {(age)?age: "....."} Years Old .</h1>
      <h1>You Job Is :  {(jop)?jop: "....."} At Company Name {(company)?company: "....."} .</h1>
      <h1>You Have Car With Color : {(color)?color: "....."} .</h1>
    </div>
  );
}

export default WelcomeFunction;

// ******************************************************************

// const WelcomeFunction = (prop) => {
//   return (
//     <div className="WelcomeFunction">
//       <h1>Welcome Mr : {(prop.name)?prop.name: "X"} .</h1>
//       <h1>You Had  : {(prop.age)?prop.age: "28"} Years Old .</h1>
//       <h1>You Job Is :  {(prop.jop)?prop.jop: "FE"} At Company Name {(prop.company)?prop.company: "Xeed"} .</h1>
//       <h1>You Have Car With Color : {(prop.jop)?prop.jop: "RED"} .</h1>
//     </div>
//   );
// }

// export default WelcomeFunction;


// ******************************************************************

// const WelcomeFunction = () => {
//   return (
//     <div className="WelcomeFunction">
//       <h1>Welcome Mr : {} .</h1>
//       <h1>You Had  : {} Years Old .</h1>
//       <h1>You Job Is :  {} At Company Name {} .</h1>
//       <h1>You Have Car With Color : {} .</h1>
//     </div>
//   );
// }

// export default WelcomeFunction;

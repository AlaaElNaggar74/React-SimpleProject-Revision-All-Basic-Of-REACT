import { useState } from "react";

const LoginPage = () => {
  let [text, setText] = useState("Wecome To Our Site .Please Click");
  let [login, setLogin] = useState("Login");
  let [cond, setCond] = useState(true);

  let chngetex=()=>{
    (text==="You Are Log IN")?(setText("Wecome To Our Site .Please Click")):(setText("You Are Log IN"));
    // (text==="You Are Log OUT")?(setText("You Are Log  IN"), console.log("Test Failed")):(setText("You Are Log OUT"), console.log("Test Passed"));

  }
  let changelog=()=>{
    (login==="Login")?setLogin("Logout"):  setLogin("Login");
  }
  return (
    <div className="LoginPage">
      <h1 className="text-center mb-5">{text}</h1>
      <button
        className="btn btn-danger d-block m-auto"
        onClick={() => {
          chngetex();
          changelog();

          // cond?setText("You Are Log  IN"):setText("You Are Log  OUT")
          // cond?setLogin("Logout"):  setLogin("Login");
          // cond?setCond(false):setCond(true)
        
          // if (cond) {
          //   setText("You Are Log  IN");
          //   setLogin("Logout");
          //   setCond(false);
          // console.log("Helow True")
          // } else {
          //   setText("You Are Log  OUT");
          //   setLogin("Login");
          //   setCond(true);
          // console.log("Helow False")
          // }
        }}
      >
        {login}
      </button>
    </div>
  );
};

export default LoginPage;

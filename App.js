import React from "react";
import Card from "./components/card";
import Image from "./components/Learning-bro 1.png";


const App = () =>{
  return (
    <div>
      <img src={Image} width= "450" height="400" className="vector" />
      <Card />
    </div>
  );
}

export default App;

import { useState } from "react";

import { Container } from "@mui/material";
import "./App.css";

import Algorithm from "./Components/Algorithm";
import ToolBar from "./Components/Toolbar";

function App() {
  const [randomInt, setRandomInt] = useState([])

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min); 
  }

  const randomBars = () => {
    const arrOfNumbers = []

    for (let i = 0; i <= 200; i++) {
      arrOfNumbers.push(getRandomNumber(1, 500))
    }
    console.log(arrOfNumbers)
    setRandomInt(arrOfNumbers)
  }

  return (
    <>
      <ToolBar randomBars={randomBars}/>
      <Container maxWidth={false} sx={{m: 0}}>
        <Algorithm randomInt={randomInt}/>
      </Container>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import "./App.css";

import ToolBar from "./Components/Toolbar";
import Bars from "./Components/Bars";

function App() {
  const [randomInt, setRandomInt] = useState([]);

  useEffect(() => {
    randomBars();
  }, []);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomBars = () => {
    const arrOfNumbers = [];

    for (let i = 0; i <= 200; i++) {
      arrOfNumbers.push(getRandomNumber(10, 500));
    }
    console.log(arrOfNumbers);
    setRandomInt(arrOfNumbers);
  };

  return (
    <>
      <ToolBar
        randomBars={randomBars}
        arrayIntegers={randomInt}
        setRandomInt={setRandomInt}
      />
      <Container maxWidth={false} sx={{ m: 0 }}>
        <Bars randomInt={randomInt} />
      </Container>
    </>
  );
}

export default App;

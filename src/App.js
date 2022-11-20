import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import "./App.css";

import Algorithm from "./Components/Algorithm";
import ToolBar from "./Components/Toolbar";

function App() {
  const [randomInt, setRandomInt] = useState([]);
  const [starter, setStarter] = useState(false);

  useEffect(() => {
    setRandomInt(selection_sort(randomInt));
  }, [starter]);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomBars = () => {
    const arrOfNumbers = [];

    for (let i = 0; i <= 2000; i++) {
      arrOfNumbers.push(getRandomNumber(1, 800));
    }
    console.log(arrOfNumbers);
    setRandomInt(arrOfNumbers);
  };

  const startSort = () => {
    setStarter(!starter);
  };

  function selection_sort(arr) {
    let newArr = [...arr]
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      let el_min = i;

      for (let j = i + 1; j < len; j++) {
        if (newArr[j] < newArr[el_min]) {
          el_min = j;
        } else {
        }
      }

      if (el_min !== i) {
        swap(newArr, i, el_min);
      } else {
      }
    }
    console.log(newArr)
    return newArr
  }

  function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  return (
    <>
      <ToolBar
        randomBars={randomBars}
        arrayIntegers={randomInt}
        startSort={startSort}
      />
      <Container maxWidth={false} sx={{ m: 0 }}>
        <Algorithm randomInt={randomInt} />
      </Container>
    </>
  );
}

export default App;

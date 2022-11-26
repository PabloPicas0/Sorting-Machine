import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import "./App.css";

import ToolBar from "./Components/Toolbar";
import Bars from "./Components/Bars";

function App() {
  const [animation, setAnimation] = useState([]);
  const [switchAlgorithm, setSwitchAlgorithm] = useState("");

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomBars = () => {
    const arrOfNumbers = [];

    for (let i = 0; i <= 100; i++) {
      arrOfNumbers.push(getRandomNumber(10, 500));
    }
    console.log(arrOfNumbers);
    setAnimation(arrOfNumbers);
  };

  useEffect(() => {
    randomBars();
  }, []);

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const finishedAnimation = async () => {
    for (let i = 0; i < animation.length; i++) {
      let bar = document.getElementById(i).style;
      bar.backgroundColor = "green";
      await sleep(5);
    }
  };

  const selectionSort = async () => {
    const sortedArr = animation;
    let sorted = false;

    while (!sorted) {
      sorted = true;

      for (let i = 0; i < sortedArr.length; i++) {
        for (let j = i + 1; j < sortedArr.length; j++) {
          if(!sorted) {
            let bar1 = document.getElementById(i).style;
            let bar2 = document.getElementById(j).style;

            bar1.backgroundColor = "green";
            bar2.backgroundColor = "red";

            await sleep(10);

            bar1.backgroundColor = "#03a9f4";
            bar2.backgroundColor = "#03a9f4";
          }
          if (sortedArr[i] > sortedArr[j]) {
            let temp1 = sortedArr[i];
            let temp2 = sortedArr[j];

            sortedArr[i] = temp2;
            sortedArr[j] = temp1;

            setAnimation([...animation, sortedArr]);

            sorted = false;
          }
        }
      }
      if (sorted) {
        finishedAnimation();
      }
    }
  };

  const bubbleSort = async () => {
    const sortedArr = animation
    let sorted = false

    while(!sorted) {
      sorted = true

      for(let i = 0; i < sortedArr.length; i++) {
        for(let j = 0; j < sortedArr.length; j++) {
          if(!sorted) {
            let bar1 = document.getElementById(j).style;
            let bar2 = document.getElementById(j + 1).style;

            bar1.backgroundColor = "green";
            bar2.backgroundColor = "red";

            await sleep(10);

            bar1.backgroundColor = "#03a9f4";
            bar2.backgroundColor = "#03a9f4";
          }
          if(sortedArr[j] > sortedArr[j + 1]) {
            let temp = sortedArr[j]
            sortedArr[j] = sortedArr[j + 1]
            sortedArr[j + 1] = temp

            setAnimation([...animation, sortedArr])

            sorted = false
          }
        }
      }
      if (sorted) {
        finishedAnimation()
      }
    }
  }

  return (
    <>
      <ToolBar
        randomBars={randomBars}
        animation={animation}
        selectionSort={bubbleSort}
      />
      <Container maxWidth={false} sx={{ m: 0 }}>
        <Bars animation={animation} />
      </Container>
    </>
  );
}

export default App;

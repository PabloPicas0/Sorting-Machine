import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import "./App.css";

import ToolBar from "./Components/Toolbar";
import Bars from "./Components/Bars";

function App() {
  const [animation, setAnimation] = useState([]);
  const [switchAlgorithm, setSwitchAlgorithm] = useState("Insertion Sort");
  const [disableBtn, setDisableBtn] = useState(false);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomBars = () => {
    const arrOfNumbers = [];

    for (let i = 0; i <= 100; i++) {
      arrOfNumbers.push(getRandomNumber(10, 500));
    }
    setAnimation(arrOfNumbers);
  };

  useEffect(() => {
    for (let i = 0; i < animation.length; i++) {
      let bar = document.getElementById(i).style;
      bar.backgroundColor = "#03a9f4";
    }
    randomBars();
  }, []);

  const algoSwitch = (event) => {
    setSwitchAlgorithm(event.target.textContent);
  };

  const startAlgorithm = () => {
    switch (switchAlgorithm) {
      case "Insertion Sort":
        insetrtionSort();
        break;
      case "Selection Sort":
        selectionSort();
        break;
      case "Bubble Sort":
        bubbleSort();
        break;
      case "Merge Sort":
        mergeSort();
        break;
      default:
        break;
    }
  };

  const generateNewArr = async () => {
    for (let i = animation.length - 1; i >= 0; i--) {
      let bars = document.getElementById(i).style;
      bars.backgroundColor = "#03a9f4";
      await sleep(1);
    }
    randomBars();
  };

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

  // -------------- Algorithms Section -------------- //

  //Selection Sort
  const selectionSort = async () => {
    const sortedArr = animation;
    let sorted = false;

    while (!sorted) {
      sorted = true;

      for (let i = 0; i < sortedArr.length; i++) {
        for (let j = i + 1; j < sortedArr.length; j++) {
          if (!sorted) {
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
            setDisableBtn(!sorted);
          }
        }
      }
      if (sorted) {
        finishedAnimation();
      }
      setDisableBtn(!sorted);
    }
  };

  //Bubble Sort
  const bubbleSort = async () => {
    const sortedArr = animation;
    let sorted = false;

    while (!sorted) {
      sorted = true;

      for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length; j++) {
          if (sortedArr[j] > sortedArr[j + 1]) {
            let temp = sortedArr[j];
            sortedArr[j] = sortedArr[j + 1];
            sortedArr[j + 1] = temp;

            setAnimation([...animation, sortedArr]);

            sorted = false;
            setDisableBtn(!sorted);
          }
          if (!sorted) {
            let bar1 = document.getElementById(j).style;
            let bar2 = document.getElementById(j + 1).style;

            bar1.backgroundColor = "green";
            bar2.backgroundColor = "red";

            await sleep(10);

            bar1.backgroundColor = "#03a9f4";
            bar2.backgroundColor = "#03a9f4";
          }
          console.log(sortedArr)
        }
      }
      if (sorted) {
        finishedAnimation();
      }
      setDisableBtn(!sorted);
    }
  };

  //Insertion Sort
  const insetrtionSort = async () => {
    const sortedArr = animation;
    let sorted = false;

    while (!sorted) {
      sorted = true;

      for (let i = 1; i < sortedArr.length; i++) {
        let current = sortedArr[i];
        let j = i - 1;

        while (j >= 0 && sortedArr[j] > current) {
          sorted = false;
          setDisableBtn(!sorted);
          if (!sorted) {
            let bar1 = document.getElementById(j + 1).style;
            let bar2 = document.getElementById(j).style;

            bar1.backgroundColor = "red";
            bar2.backgroundColor = "green";

            await sleep(10);
            bar1.backgroundColor = "#03a9f4";
            bar2.backgroundColor = "#03a9f4";
          }
          sortedArr[j + 1] = sortedArr[j];
          setAnimation([...animation, sortedArr]);
          j--;
        }
        sortedArr[j + 1] = current;
        setAnimation([...animation, sortedArr]);
      }
    }
    if (sorted) {
      finishedAnimation();
    }
    setDisableBtn(!sorted);
  };

  //Merge Sort
  const merge = async (arr, left, mid, right) => {
    let l = left;
    let r = mid + 1;
    let base = 0;
    let tempArr = [];

    while (l <= mid && r <= right) {
      if (arr[l] < arr[r]) {
        tempArr[base] = arr[l];
        l++;
        base++;
      } else {
        tempArr[base] = arr[r];
        r++;
        base++;
      }
      setAnimation([...animation, tempArr]);

      let bar1 = document.getElementById(l).style;
      let bar2 = document.getElementById(r).style;

      bar1.backgroundColor = "green";
      bar2.backgroundColor = "red";

      await sleep(10);
      bar1.backgroundColor = "#03a9f4";
      bar2.backgroundColor = "#03a9f4";
    }

    while (l <= mid) {
      tempArr[base] = arr[l];

      setAnimation([...animation, tempArr]);

      let bar1 = document.getElementById(l).style;
      let bar2 = document.getElementById(r).style;

      bar1.backgroundColor = "green";
      bar2.backgroundColor = "red";

      await sleep(10);
      bar1.backgroundColor = "#03a9f4";
      bar2.backgroundColor = "#03a9f4";

      l++;
      base++;
    }

    while (r <= right) {
      tempArr[base] = arr[r];

      setAnimation([...animation, tempArr]);

      let bar1 = document.getElementById(l).style;
      let bar2 = document.getElementById(r).style;

      bar1.backgroundColor = "green";
      bar2.backgroundColor = "red";

      await sleep(10);
      bar1.backgroundColor = "#03a9f4";
      bar2.backgroundColor = "#03a9f4";

      r++;
      base++;
    }

    for (let i = left; i <= right; i++) {
      arr[i] = tempArr[i - left];
      setAnimation([...arr]);
    }
  };

  const sort = async (arr, left, right) => {
    if (left >= right) {
      return;
    }
    let mid = Math.floor((left + right) / 2);
    await sort(arr, left, mid);
    await sort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
  };

  const mergeSort = async () => {
    let sortedArr = animation;
    setDisableBtn(true);

    await sort(sortedArr, 0, sortedArr.length - 1);

    setDisableBtn(false);
    finishedAnimation();
  };

  return (
    <>
      <ToolBar
        startAlgorithm={startAlgorithm}
        generateNewArr={generateNewArr}
        animation={animation}
        algoSwitch={algoSwitch}
        disableBtn={disableBtn}
      />
      <Container maxWidth={false} sx={{ m: 0 }}>
        <Bars animation={animation} />
      </Container>
    </>
  );
}

export default App;

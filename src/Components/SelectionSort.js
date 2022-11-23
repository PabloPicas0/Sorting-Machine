const selectionSort = (arr, callback) => {
  setTimeout(() => {
    let newArr = [...arr];
    const arrElements = document.querySelectorAll("#randomBar");
    for (let i = 0; i < arr.length - 1; i++) {
      setTimeout(() => {
        for (let j = i + 1; j < arr.length; j++) {
          if (newArr[i] > newArr[j]) {
            let temp = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = temp;
            let nextStep = [...newArr];
            
            setTimeout(() => {
              callback([...nextStep]);
            }, j * 5);
          }
        }
      }, i * 100);
    }
  }, 10);
};

export default selectionSort;

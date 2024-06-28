//Question 1

const calculateSum = (a, b) => {
    return a + b;
  };
  
  console.log(calculateSum(10, 20));
  
  // 2
  
  const isEven = (num) => {
    return num % 2 == 0;
  };
  
  console.log(isEven(10));
  
  //Question 3
  
  const findMax = (arr) => {
    let max = 0;
    arr.forEach((item) => {
      if (max < item) {
        max = item;
      }
    });
    return max;
  };
  
  console.log(findMax([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  
  //Question 4
  
  const reverseString = (text) => {
    return text.split("").reverse().join("");
  };
  
  console.log(reverseString("REVERSE STRING"));
  
  //Question 5
  
  const filterOddNumbers = (odd) => {
    let arr = [];
    odd.forEach((item) => {
      if (item % 2 == 1) {
        arr.push(item);
      }
    });
    return arr;
  };
  
  console.log(filterOddNumbers([0, 1, 2, 3, 4, 5, , 6, 7, 8, 9]));
  
  //Question 6
  
  const sumArray = (num) => {
    let sum = 0;
    num.forEach((item) => {
      sum += item;
    });
    return sum;
  };
  
  console.log(sumArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  
  //Question 7
  
  const sortArray = (num) => {
    num.sort((a, b) => {
      return a - b;
    });
    return num;
  };
  
  console.log(sortArray([1, 5, 3, 4, 2, 8, 6, 7, 9, 8, 0, 44, 143, 126, 865]));
  
  //Question 8
  
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  console.log(capitalizeFirstLetter("hello"));
  
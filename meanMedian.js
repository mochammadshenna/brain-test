function mean(array) {

  // Your code here.
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let result = sum / array.length;
  return result;
}

function median(array) {
  
  // Your code here.
  array.sort(function(a, b) {
    return a - b;
  });
  let half = Math.floor(array.length / 2);
  if (array.length % 2) {
    return array[half];
  } else {
    return (array[half - 1] + array[half]) / 2.0;
  }
}


const firstData = [3, 4, 6, 17, 25];
const secondData = [21, 23];

console.log(`firstData: ${firstData}`);
console.log(`Mean: ${mean(firstData)}`);
console.log(`Median: ${median(firstData)}`);
console.log(`secondData: ${secondData}`);
console.log(`Mean: ${mean(secondData)}`);
console.log(`Median: ${median(secondData)}`);
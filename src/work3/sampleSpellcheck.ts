// Spelcheck practice
// This function calculate the sum of numbers and print the reslt.

function calculateSum(numbers: number[]) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total
  }
  
calculateSum([10, 20, 30]);
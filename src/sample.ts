// Aveerage calculater
// This function returns the aveerage of numbers.
function avg(a: any[]) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
      s += a[i];
    }
    return s / a.length;
  }
  
  console.log("Heloo World", avg([1, 2, 3, 4, 5]));
  
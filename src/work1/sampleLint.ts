// Aveerage calculater function
// This function prints the aveerage of numbers

function printAverage(nums: number[]) {
    let sum=0
    for(let i=0; i<nums.length; i++){   // インデント不揃い & スペース不足
        sum += nums[i]
    }
    const ave = sum / nums.length
    console.log("Aveerage is: " + ave) // console.log禁止ルールに違反
}

printAverage([1,2,3,4,5])

function calcAverage(nums: number[]) {
    let sum=0
    for(let i=0; i<nums.length; i++){   // インデント不揃い & スペース不足
        sum += nums[i]
    }
    const ave = sum / nums.length
    console.log("Average is: " + ave) // console.log禁止ルールに違反
}

calcAverage([1,2,3,4,5])

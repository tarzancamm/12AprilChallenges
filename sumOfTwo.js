// function sumTwoSmallestNumbers(arr) {
//     let smallest = Number.POSITIVE_INFINITY
//     let secondSmallest = Number.POSITIVE_INFINITY

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i]
//         }
//     }

//     for (let k = 0; k < arr.length; k++) {
//         if (arr[k] === smallest) {
//             continue
//         } else if (arr[k] < secondSmallest) {
//             secondSmallest = arr[k]
//         }
//     }

//     return smallest + secondSmallest
// }


const sumTwoSmallestNumbers = (arr) => {
    let smallest = Math.min(...arr)
    let indexSmallest = arr.indexOf(smallest)
    arr.splice(indexSmallest, 1)
    let secondSmallest = Math.min(...arr)

    return smallest + secondSmallest
}


console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) //13
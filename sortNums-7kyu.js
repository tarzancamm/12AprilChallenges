const solution = (arr) => {
    if (arr === null || arr.length === []) {
        return []
    } else {
        return arr.sort((a, b) => a -b)
    }
}


console.log(solution([1, 2, 3, 10, 5]))
console.log(solution([]))
console.log(solution(null))
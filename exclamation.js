const remove = (str) => {
    if (str.endsWith('!')){
        let arr = str.split('')
        let index = arr.length - 1
        arr.splice(index, 1)
        return arr.join('')
    } else {
        return str
    }
}


console.log(remove('Hi! Hi!'))
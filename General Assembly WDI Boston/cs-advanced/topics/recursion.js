// option 1 using a loop - linear O(n)
const summation1 = (num) => {
    let total = 0

    for (var i = num; i >= 0; i--) {
        total += i
    }

    return total
}

console.log(summation1(10))

// option 2 using recursion - linear O(n)
const summation2 = (num) => {
    if (num > 0) {
        return num + summation2(num - 1)
    } else {
        return 0
    }
}

console.log(summation2(10))

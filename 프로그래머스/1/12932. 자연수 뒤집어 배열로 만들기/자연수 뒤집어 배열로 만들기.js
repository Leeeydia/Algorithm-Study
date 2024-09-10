function solution(n) {
    let result = [];
    let arr = String(n).split("").reverse().map((data) => Number(data))
    for(let i = 0; i < arr.length; i++) {
        result.push(Number(arr[i]))
    }
    return result;
}
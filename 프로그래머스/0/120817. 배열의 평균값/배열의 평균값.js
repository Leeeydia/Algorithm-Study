function solution(numbers) {
    let answer = 0;
    for (i = 0; i < numbers.length; i++){
        answer+=numbers[i]
    }
    return avg= answer/numbers.length;
}
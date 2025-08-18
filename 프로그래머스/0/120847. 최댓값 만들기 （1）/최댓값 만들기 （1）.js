function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const last = numbers[numbers.length - 1];
    const secondLast = numbers[numbers.length - 2];
    return last * secondLast;
}

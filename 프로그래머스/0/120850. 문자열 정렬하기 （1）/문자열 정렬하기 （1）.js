function solution(my_string) {
    return my_string
        .split("")
        .filter(ch => !isNaN(Number(ch)))
        .map(ch => Number(ch))
        .sort((a, b) => a - b);
}

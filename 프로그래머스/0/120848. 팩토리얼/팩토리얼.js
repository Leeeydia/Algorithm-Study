function solution(n) {
    let factorial = 1;
    let i = 1;
    
    while (true) {
        factorial *= i;
        if (factorial > n) {
            return i - 1;
        }
        if (factorial === n) {
            return i;
        }
        i++;
    }
}

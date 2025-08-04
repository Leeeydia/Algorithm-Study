function solution(age) {
    return age
        .toString()
        .split('')
        .map(digit => String.fromCharCode(97 + Number(digit)))
        .join('');
}

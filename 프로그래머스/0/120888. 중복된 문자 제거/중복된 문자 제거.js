function solution(my_string) {
    let result = '';
    for (const ch of my_string) {
        if (!result.includes(ch)) {
            result += ch;
        }
    }
    return result;
}

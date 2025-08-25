function solution(s) {
    const stack = [];
    const tokens = s.split(" ");

    for (const token of tokens) {
        if (token === "Z") {
            stack.pop();
        } else {
            stack.push(Number(token));
        }
    }

    return stack.reduce((acc, cur) => acc + cur, 0);
}

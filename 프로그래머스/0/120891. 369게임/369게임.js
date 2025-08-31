function solution(order) {
    return String(order)
        .split("")
        .filter(ch => ch === "3" || ch === "6" || ch === "9")
        .length;
}

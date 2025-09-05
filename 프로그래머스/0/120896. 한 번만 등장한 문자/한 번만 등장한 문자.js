function solution(s) {
    const countMap = new Map();
    for (const char of s) {
        countMap.set(char, (countMap.get(char) ?? 0) + 1);
    }
    const uniqueChars = [...countMap]
        .filter(([_, count]) => count === 1)
        .map(([char]) => char)
        .sort()
        .join("");
    return uniqueChars;
}

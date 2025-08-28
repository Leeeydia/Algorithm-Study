function solution(array, n) {
    return array.reduce((prev, curr) => {
        const prevDiff = Math.abs(prev - n);
        const currDiff = Math.abs(curr - n);

        if (currDiff < prevDiff) return curr;
        if (currDiff === prevDiff && curr < prev) return curr;
        return prev;
    });
}

function solution(my_string) {
    return my_string.split(" ").reduce((acc, cur, idx, arr) => {
        if (cur === "+") return acc + Number(arr[idx + 1]);
        if (cur === "-") return acc - Number(arr[idx + 1]);
        return acc;
    }, Number(my_string.split(" ")[0]));
}

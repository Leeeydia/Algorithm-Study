function solution(num_list) {
    let evenCount = 0;  // 짝수 개수
    let oddCount = 0;   // 홀수 개수

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenCount++;  // 짝수일 경우
        } else {
            oddCount++;   // 홀수일 경우
        }
    }

    return [evenCount, oddCount];
}

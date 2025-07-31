const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);

    // 높이 n만큼 반복
    for (let i = 1; i <= n; i++) {
        // 각 줄에 i개만큼 * 출력
        console.log('*'.repeat(i));
    }
});

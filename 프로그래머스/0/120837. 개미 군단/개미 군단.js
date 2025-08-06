function solution(hp) {
 const A = Math.floor(hp/5)
 hp%=5
    const B = Math.floor(hp/3)
    hp%=3
    const C=hp

return A+B+C
}
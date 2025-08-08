function solution(balls, share) {
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  const result = factorial(balls) / (factorial(share) * factorial(balls - share));
  return Math.round(result);
}

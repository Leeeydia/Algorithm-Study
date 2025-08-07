function solution(rsp) {
  const winMap = {
    '2': '0',
    '0': '5',
    '5': '2'
  };

  const result = rsp
    .split('')
    .map((char) => winMap[char])
    .join('');

  return result;
}

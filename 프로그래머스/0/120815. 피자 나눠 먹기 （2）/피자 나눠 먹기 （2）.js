function solution(n) {
  let pizza_num = 1
  while((pizza_num*6)%n !==0){
      pizza_num++
  }
      return pizza_num
  }

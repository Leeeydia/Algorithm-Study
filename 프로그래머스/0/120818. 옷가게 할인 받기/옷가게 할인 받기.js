function solution(price) {
  let discountRate = 0;


  if (price >= 500000) {
    discountRate = 20; 
  } else if (price >= 300000) {
    discountRate = 10;
  } else if (price >= 100000) {
    discountRate = 5; 
  }


  const discountedPrice = Math.floor(price * (1 - discountRate / 100));
  return discountedPrice;
}

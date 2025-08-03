function solution(n, k) {

    const lambPrice = 12000;

    const drinkPrice = 2000;

    const serviceDrink = Math.floor(n / 10);

    const paidDrink = k - serviceDrink;

    const total = n * lambPrice + paidDrink * drinkPrice;

    return total;
}

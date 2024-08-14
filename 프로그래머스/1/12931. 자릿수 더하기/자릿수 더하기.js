function solution(n)
{
    var answer = 0;
var num = String(n)
    for(var i=0; i < num.length; i++){
        answer += Number(num[i]);
    }
    console.log('Hello Javascript')

    return answer;
}
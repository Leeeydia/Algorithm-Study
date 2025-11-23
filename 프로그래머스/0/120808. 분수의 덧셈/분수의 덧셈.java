class Solution {
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int[] answer = {};
        
        int bunja = (numer1 * denom2) + (numer2 * denom1);
        int bunmo = denom1 * denom2;
        
        for(int i = bunja; i>1; i--){
            if(bunja % i == 0 && bunmo % i == 0){
                bunja /= i;
                bunmo /= i;
            }
        }
        
        answer = new int[]{bunja, bunmo};
        
        return answer;
    }
}
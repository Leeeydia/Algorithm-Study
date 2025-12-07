class Solution {
    public int solution(int num, int k) {
        String s = String.valueOf(num);
        String target = String.valueOf(k);

        int idx = s.indexOf(target);
        return idx == -1 ? -1 : idx + 1;
    }
}

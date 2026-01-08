class Solution {
    public String solution(String polynomial) {
        int xSum = 0;
        int numSum = 0;

        String[] parts = polynomial.split(" \\+ ");

        for (String part : parts) {
            if (part.contains("x")) {
                if (part.equals("x")) {
                    xSum += 1;
                } else {
                    xSum += Integer.parseInt(part.replace("x", ""));
                }
            } else {
                numSum += Integer.parseInt(part);
            }
        }

        StringBuilder sb = new StringBuilder();

        if (xSum > 0) {
            if (xSum == 1) {
                sb.append("x");
            } else {
                sb.append(xSum).append("x");
            }
        }

        if (numSum > 0) {
            if (sb.length() > 0) {
                sb.append(" + ");
            }
            sb.append(numSum);
        }

        return sb.toString();
    }
}

/**
 * Created by charlie on 6/27/16.
 */
public class Solutions {
    public static void main(String[] args) {

        System.out.println("sleep in on weekday on vacation? " + sleepIn(true, true));

        System.out.println("sumDouble of 15 and 40: " + sumDouble(15, 40));
        System.out.println("sumDouble of 21 and 21: " + sumDouble(21, 21));

        System.out.println("closer to 10 -> 5 or 12? " + close10(5, 12));
        System.out.println("closer to 10 -> 9 or 11? " + close10(9, 11));

        System.out.println("frontBack of \"code\": " + frontBack("code"));
        System.out.println("frontBack of \"hi\": " + frontBack("hi"));

        System.out.println("add \"not\" to \"bad\": " + notString("bad"));
    }


    public static boolean sleepIn(boolean weekday, boolean vacation) {
        if (!weekday || vacation) {
            return true;
        } else {
            return false;
        }

        // shorter version that does the same thing:
        //return !weekday || vacation;
    }


    public static int sumDouble(int a, int b) {
        if (a == b) {
            return (a + b) * 2;
        } else {
            return a + b;
        }
    }


    public static int close10(int a, int b) {
        int distanceToTenA = Math.abs(a - 10);
        int distanceToTenB = Math.abs(b - 10);

        if (distanceToTenA == distanceToTenB) {
            return 0;
        } else if (distanceToTenA < distanceToTenB) {
            return a;
        } else {
            return b;
        }

        // shorter if/else that does the same thing:
        /*
        if (distanceToTenA == distanceToTenB) {
            return 0;
        } else {
            return distanceToTenA < distanceToTenB ? a : b; // this is the ternary operator
        }
        */
    }


    public static String frontBack(String str) {
        int len = str.length();

        if (len < 2) {
            return str;
        } else {
            // last char + middle of string from index 1 up to, but not including, index (len-1) + first char
            return str.charAt(len - 1) + str.substring(1, len - 1) + str.charAt(0);
        }
    }


    public static String notString(String str) {
        // remember to check if the length is at least 3 before calling .substring(0,3)
        if (str.length() >= 3 && str.substring(0,3).equals("not")) {
            return str;
        } else {
            return "not " + str;
        }
    }
}

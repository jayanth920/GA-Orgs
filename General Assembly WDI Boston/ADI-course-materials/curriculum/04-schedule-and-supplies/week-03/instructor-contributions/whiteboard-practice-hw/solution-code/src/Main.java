/**
 * Created by charlie on 7/5/16.
 */
public class Main {
    public static void main(String[] args) {

        // Here are a few test calls for each method; see MainTest.java for more tests

        System.out.println("doubleChar(\"The\") -> " + doubleChar("The"));
        System.out.println("doubleChar(\"AAbb\") -> " + doubleChar("AAbb"));
        System.out.println("doubleChar(\"Hi-There\") -> " + doubleChar("Hi-There"));

        System.out.println("cigarParty(30, false) -> " + cigarParty(30, false));
        System.out.println("cigarParty(50, false) -> " + cigarParty(50, false));
        System.out.println("cigarParty(70, true) -> " + cigarParty(70, true));

        System.out.println("rotateLeft3([1, 2, 3]) -> " + intArrayToString(rotateLeft3(new int[]{1,2,3})));
        System.out.println("rotateLeft3([5, 11, 9]) -> " + intArrayToString(rotateLeft3(new int[]{5,11,9})));
        System.out.println("rotateLeft3([7, 0, 0]) -> " + intArrayToString(rotateLeft3(new int[]{7,0,0})));

        System.out.println("fix23([1, 2, 3]) -> " + intArrayToString(fix23(new int[]{1,2,3})));
        System.out.println("fix23([2, 3, 5]) -> " + intArrayToString(fix23(new int[]{2,3,5})));
        System.out.println("fix23([1, 2, 1]) -> " + intArrayToString(fix23(new int[]{1,2,1})));

        System.out.println("makeBricks(3, 1, 8) -> " + makeBricks(3, 1, 8));
        System.out.println("makeBricks(3, 1, 9) -> " + makeBricks(3, 1, 9));
        System.out.println("makeBricks(3, 2, 10) -> " + makeBricks(3, 2, 10));
    }


    // 1) Given a string, return a string where for every char in the original, there are two chars.
    public static String doubleChar(String str) {
        StringBuilder sb = new StringBuilder();
        for (char c : str.toCharArray()) {
            sb.append(c);
            sb.append(c);
        }
        return sb.toString();
    }


    // 2) When squirrels get together for a party, they like to have cigars. A squirrel party is successful
    // when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case
    // there is no upper bound on the number of cigars. Return true if the party with the given values is
    // successful, or false otherwise.
    public static boolean cigarParty(int cigars, boolean isWeekend) {
        if (isWeekend) {
            return cigars >= 40;
        } else {
            return (cigars >= 40) && (cigars <= 60);
        }
    }


    // 3) Given an array of ints length 3, return an array with the elements "rotated left"
    // so {1, 2, 3} yields {2, 3, 1}.
    public static int[] rotateLeft3(int[] nums) {
        if (nums.length < 2) return nums;
        int holder = nums[0];
        for (int i = 0; i < nums.length - 1; i++) {
            nums[i] = nums[i + 1];
        }
        nums[nums.length - 1] = holder;
        return nums;
    }


    // Bonus 1) Given an int array length 3, if there is a 2 in the array immediately followed by a 3,
    // set the 3 element to 0. Return the changed array.
    public static int[] fix23(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            if (nums[i - 1] == 2 && nums[i] == 3) {
                nums[i] = 0;
            }
        }
        return nums;
    }


    // Bonus 2) We want to make a row of bricks that is goal inches long. We have a number of small bricks
    // (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by
    // choosing from the given bricks. This is a little harder than it looks and can be done without any loops.
    public static boolean makeBricks(int small, int big, int goal) {
        int bigUsed = goal / 5;
        if (bigUsed > big) {
            bigUsed = big;
        }
        return (goal - (bigUsed * 5)) <= small;
    }


    // helper method to turn an int array into a string for easy printing
    public static String intArrayToString(int[] nums) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("[");
        for (int i = 0; i < nums.length; i++) {
            stringBuilder.append(nums[i]);
            if (i < nums.length - 1) {
                stringBuilder.append(", ");
            }
        }
        stringBuilder.append("]");
        return stringBuilder.toString();
    }
}

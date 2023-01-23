package day1.arrays;

import java.util.ArrayList;

public class ArrayExercise {
	public int commonFactors(int num1, int num2) {
		int smallerNumber = Math.min(num1, num2);
		
		int factors = 0;
		
		for	(int i = 1; i <= smallerNumber; i++) {
			if (num1 % i == 0 && num2 % i == 0) {
				factors += 1;
			}
		}
		
		return factors;
	}
}

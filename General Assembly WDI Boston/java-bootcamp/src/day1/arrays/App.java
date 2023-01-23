package day1.arrays;

import java.util.ArrayList;

public class App {
	public static void main(String args[]) {
		// basic array
		int[] numbers;
		numbers = new int[10];
		numbers[0] = 10;
		numbers[1] = 20;
		
		// more dynamic ArrayList
		ArrayList<String> names = new ArrayList<String>();

		names.add("Dan");
		names.add("Ella");
		names.add("Ava");
		names.add("Owen");

		// print all names
		System.out.println(names);

		// print names one at a time
		for (int i = 0; i < names.size(); i++) {
			System.out.println(names.get(i));
		}

		// remove one by one
		System.out.println(names);

		while(names.size() > 0) {
			names.remove(names.size() - 1);
			System.out.println(names);
		}
		
		for (int i = 1; i <= 3; i++) {
			for (int j = 1; j <= 3; j++) {
				System.out.print(i*j);
			}
			
			System.out.println();
		}
	}
}

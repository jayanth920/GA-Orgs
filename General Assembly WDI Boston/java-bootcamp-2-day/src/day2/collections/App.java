package day2.collections;

import java.util.HashMap;

public class App {
	public static void main(String args[]) {
		
		HashMap<String, Object> person = new HashMap<>();
		
		person.put("name", "dan");
		person.put("age", 36);
		
		System.out.println(person);
		
		System.out.println(person.get("name"));
		System.out.println(person.get("age"));
		
	}
}

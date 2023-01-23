package day1.objectoriented;

public class Farm {
	public Farm(String name, int numHorses) {
		System.out.println("Farm name: " + name);
		
//		for (int i = 0; i < numHorses; i++) {
//			Horse horse = new Horse();
//			System.out.println(horse.talk());
//		}
		
		Cow cow = new Cow("John");
		
		System.out.println(cow.getName());
		
//		System.out.println(cow.talk());
//		
//		System.out.println(sayPassword());
	}
	
	private String sayPassword() {
		return "password";
	}
}

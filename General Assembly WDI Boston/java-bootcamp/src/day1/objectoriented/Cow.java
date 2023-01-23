package day1.objectoriented;

public class Cow extends Animal {
	private String name;
	
	public Cow(String incomingName) {
		name = incomingName;
	}
	
	public String talk() {
		return name + " says Moo!";
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String newName) {
		name = newName;
	}
}

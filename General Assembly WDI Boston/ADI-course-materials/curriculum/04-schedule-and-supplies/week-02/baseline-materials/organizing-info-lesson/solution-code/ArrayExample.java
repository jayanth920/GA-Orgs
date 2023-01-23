//Use the following list to populate your array
// {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'}
public class ArrayExample {
	public static void main(String args[]){
		//Define your array of type char here
		char[] alphabet = new char[]{'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
		//Fill out the for loop. Iterate through the array and print each character 
		for(int i=0;i<alphabet.length;i++){
			//Put each character in the print() method to print it to the console
			System.out.print(alphabet[i]);
		}
	}
}

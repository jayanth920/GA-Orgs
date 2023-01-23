import java.util.LinkedList;

public class ListTest {
	public static void main(String args[]){
		//Define linked list here 
		//NOTICE: You must use the type Integer in the LinkedList declaration, not int
		LinkedList<Integer> intList = new LinkedList<Integer>();
		
		//Add the numbers 1-10 to your list
		for(int j=1; j<=10; j++){
			intList.add(j);
		}
		
		//Iterate through values 5-15 here, testing to see if the element is in the list.
		//If the element exists, remove it.
		for(int i=5;i<=15;i++){
			if(intList.contains(i)){
				intList.remove(new Integer(i));
			}
		}
		
		//Print the size
		System.out.println(intList.size());
	}
}


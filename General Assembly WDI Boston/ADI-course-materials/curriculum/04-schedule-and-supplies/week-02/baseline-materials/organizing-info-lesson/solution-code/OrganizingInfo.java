import java.util.ArrayList;
import java.util.HashMap;

public class OrganizingInfo {

	public static void main(String[] args) {
		
		//declare your values array of ints here
		int[] values = new int[]{1,2,3,4};
		
		//declare your keys List of Strings here
		ArrayList<String> keys = new ArrayList<String>();
		keys.add("one");
		keys.add("two");
		keys.add("three");
		keys.add("four");
		
		//declare your HashMap here and add the key/value pairs
		HashMap<String,Integer> map = new HashMap<String,Integer>();
		for(int i=0;i<keys.size();i++){
			map.put(keys.get(i), values[i]);
		}
		
		//Print out the HashMap size here
		System.out.println(map.size());

	}

}


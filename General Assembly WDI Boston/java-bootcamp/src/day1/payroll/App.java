package day1.payroll;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;

public class App {
	public static void main(String args[]) {
		String filepath = "/Users/dan/Sites/java-bootcamp/src/day1/payroll/data/sample_data.csv";
		
		try {
			ArrayList<Employee> employees = parseCSVIntoArrayList(filepath);
			Report.generate(employees);
		} catch(IOException e) {
			System.out.println(e.getMessage());
		}
	}
	
	public static ArrayList<Employee> parseCSVIntoArrayList(String filepath) throws IOException {
		ArrayList<Employee> employees = new ArrayList<Employee>();
		
		BufferedReader reader = new BufferedReader(new FileReader(filepath));
		
		String line = reader.readLine();
		
		while ((line = reader.readLine()) != null && !line.isEmpty()) {
			String[] fields = line.split(",");
			
			if (fields[2].equals("Executive")) {
				employees.add(new Executive(fields));
			} else if (fields[2].equals("Manager")) {
				employees.add(new SalesManager(fields));
			} else if (fields[2].equals("Sales")) {
				employees.add(new SalesAssociate(fields));
			} else if (fields[2].equals("Engineer")) {
				employees.add(new Engineer(fields));
			}
		}
		
		reader.close();
		
		return employees;
	}
}

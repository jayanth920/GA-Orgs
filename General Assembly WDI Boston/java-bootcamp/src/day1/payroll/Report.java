package day1.payroll;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.ArrayList;

public class Report {
	public static void generate(ArrayList<Employee> employees) {
		BigDecimal totalSalary = new BigDecimal(0);
		BigDecimal totalBonus = new BigDecimal(0);
		BigDecimal totalCommission = new BigDecimal(0);
		
		for (int i = 0; i < employees.size(); i++) {
			EmployeeBase eb = (EmployeeBase)employees.get(i);
			Employee e = employees.get(i);
			
			totalSalary = totalSalary.add(eb.monthlySalary());
			totalBonus = totalBonus.add(e.bonus());
			totalCommission = totalCommission.add(e.commission());
		}
		
		NumberFormat formatter = NumberFormat.getCurrencyInstance();
		
		System.out.println("Total Monthly Salary: " + formatter.format(totalSalary));
		System.out.println("Total Monthly Bonus: " + formatter.format(totalBonus));
		System.out.println("Total Monthly Commission: " + formatter.format(totalCommission));
	}
}

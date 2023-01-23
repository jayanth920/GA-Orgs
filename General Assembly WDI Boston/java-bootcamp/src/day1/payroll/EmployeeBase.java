package day1.payroll;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class EmployeeBase {
	private String firstName;
	private String lastName;
	private String position;
	private BigDecimal annualSalary;
	private BigDecimal monthlySales;
	
	public EmployeeBase(String[] fields) {
		firstName = fields[0];
		lastName = fields[1];
		position = fields[2];
		annualSalary = new BigDecimal(fields[3]);
		monthlySales = new BigDecimal(fields[4]);
	}
	
	public BigDecimal monthlySalary() {
		return this.annualSalary.divide(new BigDecimal(12), 2, RoundingMode.HALF_EVEN);
	}
	
	public BigDecimal getMonthlySales() {
		return this.monthlySales;
	}
}

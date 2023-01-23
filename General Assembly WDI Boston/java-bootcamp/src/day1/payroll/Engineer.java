package day1.payroll;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Engineer extends EmployeeBase implements Employee {
	public Engineer(String[] fields) {
		super(fields);
	}
	
	public BigDecimal bonus() {
		return monthlySalary().multiply(new BigDecimal(0.05)).setScale(2, RoundingMode.HALF_EVEN);
	}
	
	public BigDecimal commission() {
		return new BigDecimal(0).setScale(2, RoundingMode.HALF_EVEN);
	}
}
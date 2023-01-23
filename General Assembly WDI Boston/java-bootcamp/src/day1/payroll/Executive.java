package day1.payroll;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Executive extends EmployeeBase implements Employee {
	public Executive(String[] fields) {
		super(fields);
	}
	
	public BigDecimal bonus() {
		return monthlySalary().multiply(new BigDecimal(0.2)).setScale(2, RoundingMode.HALF_EVEN);
	}
	
	public BigDecimal commission() {
		return new BigDecimal(0).setScale(2, RoundingMode.HALF_EVEN);
	}
}

package day1.payroll;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class SalesAssociate extends EmployeeBase implements Employee {
	public SalesAssociate(String[] fields) {
		super(fields);
	}
	
	public BigDecimal bonus() {
		return monthlySalary().multiply(new BigDecimal(0.05)).setScale(2, RoundingMode.HALF_EVEN);
	}
	
	public BigDecimal commission() {
		BigDecimal commission = getMonthlySales().multiply(new BigDecimal(0.1));
		return commission.setScale(2, RoundingMode.HALF_EVEN);
	}
}
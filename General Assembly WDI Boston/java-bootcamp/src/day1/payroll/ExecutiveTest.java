package day1.payroll;

import static org.junit.jupiter.api.Assertions.*;
import java.math.BigDecimal;
import java.math.RoundingMode;

import org.junit.jupiter.api.Test;

class ExecutiveTest {

	@Test
	void testBonus() {
		String[] fields = new String[] {"","","","100","100"};	
		
		Executive e = new Executive(fields);
		assertEquals(e.bonus(), new BigDecimal(1.67).setScale(2, RoundingMode.HALF_EVEN));
	}

}

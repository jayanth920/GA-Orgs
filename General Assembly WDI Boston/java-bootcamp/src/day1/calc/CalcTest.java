package day1.calc;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CalcTest {
	
	Calc c;
	
	@BeforeEach
	void beforeAllTests() {
		c = new Calc();
	}

	@Test
	void testAdd() {
		assertEquals(c.add(1.1, 2.1), 3.2);
		assertEquals(c.add(2.3, 4.2), 6.5);
	}
	
	@Test
	void testSubtract() {
		assertEquals(c.subtract(1, 2), -1);
		assertEquals(c.subtract(100, 2), 98);
	}
	
	@Test
	void testMultiply() {
		assertEquals(c.multiply(1, 2), 2);
	}

}

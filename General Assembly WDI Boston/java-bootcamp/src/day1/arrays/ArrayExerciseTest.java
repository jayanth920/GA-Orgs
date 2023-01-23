package day1.arrays;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ArrayExerciseTest {

	@Test
	void testCommonFactors() {
		ArrayExercise ae = new ArrayExercise();
		
		assertEquals(ae.commonFactors(10, 20), 4); // 1, 2, 5, 10
	}

}

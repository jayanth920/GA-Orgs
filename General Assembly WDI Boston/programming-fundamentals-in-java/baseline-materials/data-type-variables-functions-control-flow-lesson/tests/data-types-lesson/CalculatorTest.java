package ly.gengeneralassemb;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;
    private static final double DELTA = 1e-15; // how close the answer should be


    @Before
    public void setUp() throws Exception {
        calc = new Calculator();
    }

    @Test
    public void testIntDivision(){
        int result = 5/2;
        assertEquals(result, calc.intDivision(5,2));
    }

    @Test
    public void testFloatingPointDivision(){
        float result = 5.0f/2.0f;
        assertEquals(result, calc.floatingPointDivision(5.0f,2.0f), DELTA);
    }

    @Test
    public void testDoubleDivsion(){
        double result = 5d/2d;
        assertEquals(result, calc.doubleDivision(5d,2d), DELTA);
    }

    @Test
    public void testAdd(){
        long result = 10 + 23 + (-1) + 16;

        assertEquals(result, calc.adds(10, 23, (-1), 16));

        result = 100 + 102;
        assertEquals(result, calc.adds(100, 102));

        result = 0;
        assertEquals(result, calc.adds(0));
    }

    @Test
    public void testSubtract(){

        long result = 100 - 102;
        assertEquals(result, calc.subtracts(100, 102));

        result = 0;
        assertEquals(result, calc.subtracts(0));
    }

    @Test
    public void testPow(){
        double result = Math.pow(3,2);
        assertEquals(result, calc.pow(3,2), DELTA);
    }

    @Test
    public void testSqrt(){
        double result = Math.sqrt(4);
        assertEquals(result, calc.sqrt(4), DELTA);
    }

    @Test
    public void testRandomRange(){
        int range = Math.abs(10 - 1) + 1;
        double result = (Math.random() * range) + 1;
        double calcResult  = calc.random(range, 1);

        boolean isResultInRange = result > 1d && result < 10d;
        boolean isCalcResultInRange = calcResult > 1d && result < 10d;

        assertEquals(isResultInRange, isCalcResultInRange);
    }

}

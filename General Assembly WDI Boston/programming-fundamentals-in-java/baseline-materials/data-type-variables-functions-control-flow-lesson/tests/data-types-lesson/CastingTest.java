package ly.gengeneralassemb;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CastingTest {

    private Casting cast;
    private static final double DELTA = 1e-15; // how close the answer should be


    @Before
    public void setUp() throws Exception {
        cast = new Casting();
    }

    @Test
    public void testChangeToDouble(){
        int a = 100;
        double result = a;
        assertEquals(result, cast.changeToDouble(100), DELTA);

    }

    @Test
    public void testChangeToInt(){
        double a = 100.7;
        int result = (int) a;
        assertEquals(result, cast.changeToInt(100.7d), DELTA);

    }
}

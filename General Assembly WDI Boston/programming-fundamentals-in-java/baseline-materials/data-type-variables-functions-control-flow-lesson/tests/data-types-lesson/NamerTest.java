package ly.gengeneralassemb;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;


public class NamerTest {

    private Namer name;
    @Before
    public void setUp() throws Exception {
        name = new Namer();
    }

    @Test
    public void testStringMethods(){
        String result = new String("Syed Salahuddin");
        assertEquals(result, name.showFullName());
        // check first char
        assertEquals(result.charAt(0), name.showFullName().charAt(0));
        // check length
        assertEquals(result.length(), name.showFullName().length());
        // Search and Replace
        assertEquals(result.replace("Syed", "Ed"), name.showFullName().replace("Syed", "Ed"));
        // Set toUpperCase
        assertEquals(result.toUpperCase(), name.showFullName().toUpperCase());
        // Concat with concat method
        assertEquals(result.concat(" meow"), name.showFullName().concat(" meow"));
    }

    @Test
    public void testStringConcat(){
        String result = new String("Syed Salahuddin");
        // => false, true
        assertThat((result == name.showFullName()), is(not(result.equals(name.showFullName()))));
    }



}

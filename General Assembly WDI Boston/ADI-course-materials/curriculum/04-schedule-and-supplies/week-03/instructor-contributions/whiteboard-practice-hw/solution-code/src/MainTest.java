import static org.junit.Assert.*;

/**
 * Created by charlie on 7/5/16.
 */
public class MainTest {
    @org.junit.Test
    public void doubleChar() throws Exception {
        assertEquals(Main.doubleChar("The"), "TThhee");
        assertEquals(Main.doubleChar("AAbb"), "AAAAbbbb");
        assertEquals(Main.doubleChar("Hi-There"), "HHii--TThheerree");
        assertEquals(Main.doubleChar("Word!"), "WWoorrdd!!");
        assertEquals(Main.doubleChar("!!"), "!!!!");
        assertEquals(Main.doubleChar(""), "");
        assertEquals(Main.doubleChar("a"), "aa");
        assertEquals(Main.doubleChar("."), "..");
        assertEquals(Main.doubleChar("aa"), "aaaa");
    }

    @org.junit.Test
    public void cigarParty() throws Exception {
        assertEquals(Main.cigarParty(30, false), false);
        assertEquals(Main.cigarParty(50, false), true);
        assertEquals(Main.cigarParty(70, true), true);
        assertEquals(Main.cigarParty(30, true), false);
        assertEquals(Main.cigarParty(50, true), true);
        assertEquals(Main.cigarParty(60, false), true);
        assertEquals(Main.cigarParty(61, false), false);
        assertEquals(Main.cigarParty(40, false), true);
        assertEquals(Main.cigarParty(39, false), false);
        assertEquals(Main.cigarParty(40, true), true);
        assertEquals(Main.cigarParty(39, true), false);
    }

    @org.junit.Test
    public void rotateLeft3() throws Exception {
        assertArrayEquals(Main.rotateLeft3(new int[]{1,2,3}), new int[]{2,3,1});
        assertArrayEquals(Main.rotateLeft3(new int[]{5,11,9}), new int[]{11,9,5});
        assertArrayEquals(Main.rotateLeft3(new int[]{7,0,0}), new int[]{0,0,7});
        assertArrayEquals(Main.rotateLeft3(new int[]{1,2,1}), new int[]{2,1,1});
        assertArrayEquals(Main.rotateLeft3(new int[]{0,0,1}), new int[]{0,1,0});
    }

    @org.junit.Test
    public void fix23() throws Exception {
        assertArrayEquals(Main.fix23(new int[]{1,2,3}), new int[]{1,2,0});
        assertArrayEquals(Main.fix23(new int[]{2,3,5}), new int[]{2,0,5});
        assertArrayEquals(Main.fix23(new int[]{1,2,1}), new int[]{1,2,1});
        assertArrayEquals(Main.fix23(new int[]{3,2,1}), new int[]{3,2,1});
        assertArrayEquals(Main.fix23(new int[]{2,2,3}), new int[]{2,2,0});
        assertArrayEquals(Main.fix23(new int[]{2,3,3}), new int[]{2,0,3});
    }

    @org.junit.Test
    public void makeBricks() throws Exception {
        assertEquals(Main.makeBricks(3,1,8), true);
        assertEquals(Main.makeBricks(3,1,9), false);
        assertEquals(Main.makeBricks(3, 2, 10),  true);
        assertEquals(Main.makeBricks(3, 2, 8),  true);
        assertEquals(Main.makeBricks(3, 2, 9),  false);
        assertEquals(Main.makeBricks(6, 1, 11),  true);
        assertEquals(Main.makeBricks(6, 0, 11),  false);
        assertEquals(Main.makeBricks(1, 4, 11),  true);
        assertEquals(Main.makeBricks(0, 3, 10),  true);
        assertEquals(Main.makeBricks(1, 4, 12),  false);
        assertEquals(Main.makeBricks(3, 1, 7),  true);
        assertEquals(Main.makeBricks(1, 1, 7),  false);
        assertEquals(Main.makeBricks(2, 1, 7),  true);
        assertEquals(Main.makeBricks(7, 1, 11),  true);
        assertEquals(Main.makeBricks(7, 1, 8),  true);
        assertEquals(Main.makeBricks(7, 1, 13),  false);
        assertEquals(Main.makeBricks(43, 1, 46),  true);
        assertEquals(Main.makeBricks(40, 1, 46),  false);
        assertEquals(Main.makeBricks(40, 2, 47),  true);
        assertEquals(Main.makeBricks(40, 2, 50),  true);
        assertEquals(Main.makeBricks(40, 2, 52),  false);
        assertEquals(Main.makeBricks(22, 2, 33),  false);
        assertEquals(Main.makeBricks(0, 2, 10),  true);
        assertEquals(Main.makeBricks(1000000, 1000, 1000100),  true);
        assertEquals(Main.makeBricks(2, 1000000, 100003),  false);
        assertEquals(Main.makeBricks(20, 0, 19),  true);
        assertEquals(Main.makeBricks(20, 0, 21),  false);
        assertEquals(Main.makeBricks(20, 4, 51),  false);
        assertEquals(Main.makeBricks(20, 4, 39),  true);
    }

}
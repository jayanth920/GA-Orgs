import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.*;

/**
 * Test the MyLinkedList class
 *
 * Created by charlie on 8/25/16.
 */
public class MyLinkedListTest {
    private MyLinkedList<Integer> mList;

    @Rule
    public final ExpectedException mException = ExpectedException.none();

    @Test
    public void testPopulatingAList() throws Exception {
        mList = new MyLinkedList<Integer>();

        assertEquals(0, mList.size());

        mList.add(0);
        assertEquals(1, mList.size());

        mList.add(1);
        assertEquals(2, mList.size());

        for (int i = 2; i < 10; i++) {
            mList.add(i);
        }
        assertEquals(10, mList.size());
    }

    @Test
    public void testRetrievingItems() throws Exception {
        resetListToZeroToNine();

        assertEquals(new Integer(0), mList.get(0));
        assertEquals(new Integer(5), mList.get(5));
    }

    @Test
    public void testRetrievingNegativeIndex() throws Exception {
        resetListToZeroToNine();

        mException.expect(IndexOutOfBoundsException.class);
        mList.get(-1);
    }

    @Test
    public void testRetrievingTooLargeIndex() throws Exception {
        resetListToZeroToNine();

        mException.expect(IndexOutOfBoundsException.class);
        mList.get(9999);
    }

    @Test
    public void testAddingItemAtIndex() throws Exception {
        resetListToZeroToNine();

        assertEquals(new Integer(3), mList.get(3));
        mList.add(2, 123);
        assertEquals(new Integer(123), mList.get(2));
        assertEquals(new Integer(2), mList.get(3));
    }

    @Test
    public void testRemovingItems() throws Exception {
        resetListToZeroToNine();

        assertEquals(10, mList.size());
        assertEquals(new Integer(4), mList.get(4));

        assertTrue(mList.remove(4));

        assertEquals(9, mList.size());
        assertEquals(new Integer(5), mList.get(4));

        assertFalse(mList.remove(99999));
        assertEquals(9, mList.size());

        assertFalse(mList.remove(-1));
        assertEquals(9, mList.size());
    }

    @Test
    public void testReversingListIteratively() throws Exception {
        resetListToZeroToNine();

        String expectedListString = mList.toString();

        mList.reverseIteratively();

        String actualListString = mList.toString();

        assertNotEquals(expectedListString, actualListString);

        mList.reverseIteratively();

        actualListString = mList.toString();

        assertEquals(expectedListString, actualListString);
    }

    @Test
    public void testReversingListRecursively() throws Exception {
        resetListToZeroToNine();

        String expectedListString = mList.toString();

        mList.reverseRecursively();

        String actualListString = mList.toString();

        assertNotEquals(expectedListString, actualListString);

        mList.reverseRecursively();

        actualListString = mList.toString();

        assertEquals(expectedListString, actualListString);
    }

    private void resetListToZeroToNine() {
        mList = new MyLinkedList<Integer>();
        for (int i = 0; i < 10; i++) {
            mList.add(i);
        }
    }
}
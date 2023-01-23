import java.util.Iterator;

/**
 * Sample implementation of a Linked List
 *
 * Created by charlie on 8/25/16.
 */
public class MyLinkedList<T> implements Iterable<T> {

    private Node mHead;
    private int mSize = 0;

    /**
     * Reverse the list using an iterative approach
     */
    public void reverseIteratively() {

        // If list is empty or only 1 item, there's nothing to do
        if (mSize <= 1) {
            return;
        }

        // If size >= 2, get first 2 items
        Node prevNode = mHead;
        Node currNode = mHead.getNext();

        while (currNode != null) {

            // This will eventually be null when currNode is the last item
            Node nextNode = currNode.getNext();

            // Make currNode point the opposite direction, back at prevNode rather than forward at nextNode
            currNode.setNext(prevNode);

            // Move prev and curr nodes forward by one
            prevNode = currNode;
            currNode = nextNode;
        }

        // Set the old head's next to null, since it's now at the end of the list
        mHead.setNext(null);

        // Reset head to be the new first item
        mHead = prevNode;
    }

    /**
     * Reverse the list using a recursive approach
     */
    public void reverseRecursively() {

        // If list is empty or only 1 item, there's nothing to do
        if (mSize > 1) {
            reverseRecursively(mHead);
        }
    }

    private void reverseRecursively(Node currentNode) {

        Node nextNode = currentNode.getNext();

        // Check for base case, when currentNode is the last item in the list
        if (nextNode == null) {
            // Reset the head to be the new head, which was previously the last item
            mHead = currentNode;
            return;
        }

        // Otherwise, recurse through the rest of the list after currentNode
        reverseRecursively(nextNode);

        // Make next node point the opposite direction, back toward current node
        nextNode.setNext(currentNode);
        currentNode.setNext(null);
    }

    /**
     * Get size of list
     * @return number of items in the list
     */
    public int size() {
        return mSize;
    }

    private Node getNode(int index) {

        if (index < 0 || index > mSize - 1) {
            throw new IndexOutOfBoundsException();
        }
        else if (index == 0) {
            return mHead;
        }
        else {
            Node currentNode = mHead;
            for (int i = 0; i < index; i++) {
                currentNode = currentNode.getNext();
            }
            return currentNode;
        }
    }

    /**
     * Retrieve item from specified index
     * @param index - position of item to be retrieved
     * @return data T
     */
    public T get(int index) {
        return getNode(index).getData();
    }

    /**
     * Add item to end of list
     * @param object - item to be added
     */
    public void add(T object) {
        Node newTailNode = new Node(object);

        if (mSize == 0) {
            mHead = newTailNode;
        }
        else {
            Node oldTailNode = this.getNode(mSize - 1);
            oldTailNode.setNext(newTailNode);
        }

        mSize++;
    }

    /**
     * Add item to list at specified index
     * @param index - position at which to add item
     * @param object - item to be added
     */
    public void add(int index, T object) {

        if (index < 0 || index > size() - 1) {
            throw new IndexOutOfBoundsException();
        }
        else if (index == 0) {
            mHead = new Node(object, mHead);
        }
        else {
            Node previousNode = getNode(index - 1);
            Node newNode = new Node(object, previousNode.getNext());
            previousNode.setNext(newNode);
        }

        mSize++;
    }

    /**
     * Remove item from list at specified index
     * @param index - position of item to be removed
     * @return true if item successfully removed, else false
     */
    public boolean remove(int index) {
        if (index < 0 || index > mSize - 1) {
            return false;
        }
        else if (index == 0) {
            mHead = mHead.getNext();
        }
        else {
            Node previousNode = getNode(index - 1);
            Node nodeToRemove = previousNode.getNext();
            previousNode.setNext(nodeToRemove.getNext());
        }

        mSize--;
        return true;
    }

    @Override
    public Iterator<T> iterator() {
        return new MyIterator();
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        for (T item : this) {
            stringBuilder.append(item).append(", ");
        }
        stringBuilder.setLength(stringBuilder.length() - 2); // remove the trailing ", "
        return stringBuilder.toString();
    }

    /**
     * Iterates over the items of the list
     */
    private class MyIterator implements Iterator<T> {

        private int mIndex = 0;

        @Override
        public boolean hasNext() {
            return mIndex < mSize;
        }

        @Override
        public T next() {
            T currentData = get(mIndex);
            mIndex++;
            return currentData;
        }

        @Override
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /**
     * Node containing T data and reference to next node
     */
    private class Node {
        T mData;
        Node mNext;

        Node(T data) {
            mData = data;
        }

        Node(T data, Node next) {
            mData = data;
            mNext = next;
        }

        T getData() {
            return mData;
        }

        Node getNext() {
            return mNext;
        }

        void setNext(Node next) {
            mNext = next;
        }
    }
}

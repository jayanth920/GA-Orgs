package ly.generalassemb.drewmahrt.calculator;

import android.graphics.Color;
import android.test.ActivityInstrumentationTestCase2;
import android.test.TouchUtils;
import android.test.suitebuilder.annotation.MediumTest;
import android.text.method.Touch;
import android.widget.Button;
import android.widget.TextView;


public class MainActivityTest extends ActivityInstrumentationTestCase2<MainActivity> {

    MainActivity mainActivity;


    Button oneButton;
    Button twoButton;
    Button threeButton;
    Button fourButton;
    Button fiveButton;
    Button sixButton;
    Button sevenButton;
    Button eightButton;
    Button nineButton;
    Button zeroButton;

    Button mAddButton;
    Button mSubtractButton;
    Button mMultButton;
    Button mDivideButton;

    Button mPeriodButton;
    Button clearButton;
    Button deleteButton;
    Button mExecuteButton;

    TextView displayView;

    public MainActivityTest() {
        super(MainActivity.class);
    }

    @Override
    protected void setUp() throws Exception {
        super.setUp();

        mainActivity = getActivity();

        displayView = (TextView) mainActivity.findViewById(R.id.calculation_text_view);

        oneButton = (Button) mainActivity.findViewById(R.id.one_button);
        twoButton = (Button) mainActivity.findViewById(R.id.two_button);
        threeButton = (Button) mainActivity.findViewById(R.id.three_button);
        fourButton = (Button) mainActivity.findViewById(R.id.four_button);
        fiveButton = (Button) mainActivity.findViewById(R.id.five_button);
        sixButton = (Button) mainActivity.findViewById(R.id.six_button);
        sevenButton = (Button) mainActivity.findViewById(R.id.seven_button);
        eightButton = (Button) mainActivity.findViewById(R.id.eight_button);
        nineButton = (Button) mainActivity.findViewById(R.id.nine_button);
        zeroButton = (Button) mainActivity.findViewById(R.id.zero_button);


        mAddButton = (Button) mainActivity.findViewById(R.id.add_button);
        mSubtractButton = (Button) mainActivity.findViewById(R.id.subtract_button);
        mMultButton = (Button) mainActivity.findViewById(R.id.mult_button);
        mDivideButton = (Button) mainActivity.findViewById(R.id.divide_button);


        mPeriodButton = (Button) mainActivity.findViewById(R.id.period_button);
        clearButton = (Button) mainActivity.findViewById(R.id.clear_button);
        deleteButton = (Button) mainActivity.findViewById(R.id.del_button);
        mExecuteButton = (Button) mainActivity.findViewById(R.id.execute_button);


    }

    //Tests proper initialization of screen
    @MediumTest
    public void testPreconditions() {

        assertNotNull("functionActivity is null", mainActivity);
        assertNotNull("oneButton is null", oneButton);
        assertNotNull("twoButton is null", twoButton);
        assertNotNull("threeButton is null", threeButton);
        assertNotNull("fourButton is null", fourButton);
        assertNotNull("fiveButton is null", fiveButton);
        assertNotNull("sixButton is null", sixButton);
        assertNotNull("sevenButton is null", sevenButton);
        assertNotNull("eightButton is null", eightButton);
        assertNotNull("nineButton is null", nineButton);
        assertNotNull("zeroButton is null", zeroButton);

        assertNotNull("mAddButton is null", mAddButton);
        assertNotNull("mSubtractButton is null", mSubtractButton);
        assertNotNull("mMultiButton is null", mMultButton);
        assertNotNull("mDivideButton is null", mDivideButton);

        assertNotNull("mPeriodButton is null", mDivideButton);
        assertNotNull("clearButton is null", clearButton);
        assertNotNull("deleteButton is null", deleteButton);
        assertNotNull("mExecuteButton is null", mExecuteButton);

        assertNotNull("calculationTextView is null", displayView);

    }

    @MediumTest
    public void testAddition() {

        TouchUtils.clickView(this, twoButton);
        TouchUtils.clickView(this, mAddButton);
        TouchUtils.clickView(this, threeButton);
        TouchUtils.clickView(this, mExecuteButton);
        assertEquals("5.0", displayView.getText());

        TouchUtils.clickView(this, clearButton);
        assertEquals("", displayView.getText());


        TouchUtils.clickView(this, twoButton);
        TouchUtils.clickView(this, mPeriodButton);
        TouchUtils.clickView(this, fiveButton);
        TouchUtils.clickView(this, mAddButton);
        TouchUtils.clickView(this, sevenButton);
        TouchUtils.clickView(this, mExecuteButton);
        assertEquals("9.5", displayView.getText());

    }

    @MediumTest
    public void testSubtraction() {

        TouchUtils.clickView(this, twoButton);
        TouchUtils.clickView(this, mSubtractButton);
        TouchUtils.clickView(this, threeButton);
        TouchUtils.clickView(this, mExecuteButton);
        assertEquals("-1.0", displayView.getText());

        TouchUtils.clickView(this, clearButton);
        assertEquals("", displayView.getText());

        TouchUtils.clickView(this, nineButton);
        TouchUtils.clickView(this, mPeriodButton);
        TouchUtils.clickView(this, fiveButton);
        TouchUtils.clickView(this, mSubtractButton);
        TouchUtils.clickView(this, sevenButton);
        TouchUtils.clickView(this, mExecuteButton);
        assertEquals("2.5", displayView.getText());

    }

    @MediumTest
    public void testMultiplication() {

        TouchUtils.clickView(this, sixButton);
        TouchUtils.clickView(this, mMultButton);
        TouchUtils.clickView(this, threeButton);
        TouchUtils.clickView(this, mExecuteButton);
        assertEquals("18.0", displayView.getText());

        TouchUtils.clickView(this, clearButton);
        assertEquals("", displayView.getText());

        TouchUtils.clickView(this, twoButton);
        TouchUtils.clickView(this, mPeriodButton);
        TouchUtils.clickView(this, fiveButton);
        TouchUtils.clickView(this, mMultButton);
        TouchUtils.clickView(this, threeButton);
        TouchUtils.clickView(this, mExecuteButton);
        assertEquals("7.5", displayView.getText());

    }

    @MediumTest
    public void testDivision() {

        TouchUtils.clickView(this, sixButton);
        TouchUtils.clickView(this, mDivideButton);
        TouchUtils.clickView(this, threeButton);
        TouchUtils.clickView(this, mExecuteButton);
        assertEquals("2.0", displayView.getText());

        TouchUtils.clickView(this, clearButton);
        assertEquals("", displayView.getText());


        TouchUtils.clickView(this, threeButton);
        TouchUtils.clickView(this, mPeriodButton);
        TouchUtils.clickView(this, threeButton);
        TouchUtils.clickView(this, mDivideButton);
        TouchUtils.clickView(this, threeButton);
        TouchUtils.clickView(this, mExecuteButton);
        assertEquals("1.1", displayView.getText());

    }

    @MediumTest
    public void testDivideByZero() {

        TouchUtils.clickView(this, sixButton);
        TouchUtils.clickView(this, mDivideButton);
        TouchUtils.clickView(this, zeroButton);
        TouchUtils.clickView(this, mExecuteButton);

    }

    public void tearDown() throws Exception {
        super.tearDown();
    }

}

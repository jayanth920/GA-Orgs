package co.ga.advancedfunctions;

import android.graphics.Color;
import android.test.ActivityInstrumentationTestCase2;
import android.test.TouchUtils;
import android.test.suitebuilder.annotation.MediumTest;
import android.widget.Button;
import android.widget.TextView;


import static android.support.test.espresso.Espresso.onView;
import static android.support.test.espresso.action.ViewActions.clearText;
import static android.support.test.espresso.action.ViewActions.click;
import static android.support.test.espresso.action.ViewActions.closeSoftKeyboard;
import static android.support.test.espresso.action.ViewActions.typeText;
import static android.support.test.espresso.assertion.ViewAssertions.matches;
import static android.support.test.espresso.matcher.ViewMatchers.withId;
import static android.support.test.espresso.matcher.ViewMatchers.withText;

import static android.support.test.espresso.assertion.ViewAssertions.matches;
import static android.support.test.espresso.matcher.RootMatchers.withDecorView;
import static android.support.test.espresso.matcher.ViewMatchers.isDisplayed;
import static android.support.test.espresso.matcher.ViewMatchers.withText;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;

public class FunctionActivityTest extends ActivityInstrumentationTestCase2<FunctionActivity> {

    FunctionActivity functionActivity;

    TextView outputText;
    TextView inputText;
    Button gradeButton;
    Button passFailButton;

    Button fiveButton;

    public FunctionActivityTest() {
        super(FunctionActivity.class);
    }

    @Override
    protected void setUp() throws Exception {
        super.setUp();

        functionActivity = getActivity();

        outputText = (TextView) functionActivity.findViewById(R.id.outputText);
        inputText = (TextView) functionActivity.findViewById(R.id.inputText);

        gradeButton = (Button) functionActivity.findViewById(R.id.gradeButton);
        passFailButton = (Button) functionActivity.findViewById(R.id.passFailButton);
        fiveButton = (Button) functionActivity.findViewById(R.id.fiveButton);

    }

    //Tests proper initialization of screen
    @MediumTest
    public void testPreconditions() {

        assertNotNull("functionActivity is null", functionActivity);
        assertNotNull("outputText is null", outputText);
        assertNotNull("inputText is null", inputText);
        assertNotNull("gradeButton is null", gradeButton);
        assertNotNull("passFailButton is null", passFailButton);
        assertNotNull("fiveButton is null", fiveButton);

    }

    @MediumTest
    public void testGradeButton() {

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("91"), closeSoftKeyboard());
        TouchUtils.clickView(this, gradeButton);
        assertEquals(functionActivity.getString(R.string.A), outputText.getText());

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("81"), closeSoftKeyboard());
        TouchUtils.clickView(this, gradeButton);
        assertEquals(functionActivity.getString(R.string.B), outputText.getText());

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("71"), closeSoftKeyboard());
        TouchUtils.clickView(this, gradeButton);
        assertEquals(functionActivity.getString(R.string.C), outputText.getText());

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("61"), closeSoftKeyboard());
        TouchUtils.clickView(this, gradeButton);
        assertEquals(functionActivity.getString(R.string.D), outputText.getText());

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("59"), closeSoftKeyboard());
        TouchUtils.clickView(this, gradeButton);
        assertEquals(functionActivity.getString(R.string.F), outputText.getText());

    }

    @MediumTest
    public void testPassFailButton() {

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("91"), closeSoftKeyboard());
        TouchUtils.clickView(this, passFailButton);
        assertEquals(functionActivity.getString(R.string.pass), outputText.getText());

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("59"), closeSoftKeyboard());
        TouchUtils.clickView(this, passFailButton);
        assertEquals(functionActivity.getString(R.string.fail), outputText.getText());

    }

    @MediumTest
    public void testFiveButton() {

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("90"), closeSoftKeyboard());
        TouchUtils.clickView(this, fiveButton);
        assertEquals(functionActivity.getString(R.string.times_5), outputText.getText());

    }

    @MediumTest
    public void testBonus() {

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("91"), closeSoftKeyboard());
        TouchUtils.clickView(this, passFailButton);
        assertEquals(Color.GREEN, outputText.getCurrentTextColor());

        onView(withId(R.id.inputText)).perform(clearText())
                .perform(typeText("59"), closeSoftKeyboard());
        TouchUtils.clickView(this, passFailButton);
        assertEquals(Color.RED, outputText.getCurrentTextColor());

    }

//    @MediumTest
//    public void testInvalids() {
//
//        onView(withId(R.id.inputText)).perform(clearText())
//                .perform(typeText("901"), closeSoftKeyboard());
//        TouchUtils.clickView(this, gradeButton);
//
//        onView(withText(R.string.toast_string)).inRoot(withDecorView(not(is(getActivity().getWindow().getDecorView())))).check(matches(isDisplayed()));
//
//    }

    public void tearDown() throws Exception {
        super.tearDown();
    }

}

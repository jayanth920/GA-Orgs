package ly.generalassemb.drewmahrt.settingsmorningexercise;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

public class SettingsActivity extends AppCompatActivity {
    EditText mtTextSize1EditText, mTextSize2EditText;
    Spinner mSpinner1, mSpinner2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);

        SharedPreferences sharedPreferences = getSharedPreferences("ly.generalassemb.drewmahrt.settingsmorningexercise.mySettings", Context.MODE_PRIVATE);

        mtTextSize1EditText = (EditText)findViewById(R.id.editTextSize1);
        mtTextSize1EditText.setText(String.valueOf((int)sharedPreferences.getFloat("textView1Size", 15)));

        mTextSize2EditText = (EditText)findViewById(R.id.editTextSize2);
        mTextSize2EditText.setText(String.valueOf((int)sharedPreferences.getFloat("textView2Size",15)));

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this, R.array.colors_array, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        mSpinner1 = (Spinner) findViewById(R.id.font_1_spinner);
        mSpinner1.setAdapter(adapter);

        mSpinner2 = (Spinner) findViewById(R.id.font_2_spinner);
        mSpinner2.setAdapter(adapter);

        mSpinner1.setSelection(getColorPosition(sharedPreferences.getInt("textView1Color", Color.BLACK)));
        mSpinner2.setSelection(getColorPosition(sharedPreferences.getInt("textView2Color",Color.BLACK)));
    }

    @Override
    protected void onPause() {
        super.onPause();
        SharedPreferences sharedPreferences = getSharedPreferences("ly.generalassemb.drewmahrt.settingsmorningexercise.mySettings", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putFloat("textView1Size", Float.parseFloat(mtTextSize1EditText.getText().toString()));
        editor.putFloat("textView2Size",Float.parseFloat(mTextSize2EditText.getText().toString()));
        editor.putInt("textView1Color", getColorValue(mSpinner1.getSelectedItem().toString()));
        editor.putInt("textView2Color", getColorValue(mSpinner2.getSelectedItem().toString()));
        editor.commit();
    }

    private int getColorValue(String color){
        switch (color){
            case "Black": return Color.BLACK;
            case "Blue": return Color.BLUE;
            case "Red": return Color.RED;
            case "Green": return Color.GREEN;
            case "Yellow": return Color.YELLOW;
            default: return Color.BLACK;
        }
    }

    private int getColorPosition(int color){
        switch (color){
            case Color.BLACK: return 0;
            case Color.BLUE: return 1;
            case Color.RED: return 2;
            case Color.GREEN: return 3;
            case Color.YELLOW: return 4;
            default: return 0;
        }
    }
}

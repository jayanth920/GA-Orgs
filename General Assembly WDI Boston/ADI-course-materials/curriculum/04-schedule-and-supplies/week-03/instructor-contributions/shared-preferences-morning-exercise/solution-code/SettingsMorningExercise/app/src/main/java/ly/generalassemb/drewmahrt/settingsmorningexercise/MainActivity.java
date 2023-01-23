package ly.generalassemb.drewmahrt.settingsmorningexercise;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.util.TypedValue;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        SharedPreferences sharedPreferences = getSharedPreferences("ly.generalassemb.drewmahrt.settingsmorningexercise.mySettings", Context.MODE_PRIVATE);

        if(!sharedPreferences.getBoolean("setupCompleted",false)){
            setupDefaultSettings(sharedPreferences);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        SharedPreferences sharedPreferences = getSharedPreferences("ly.generalassemb.drewmahrt.settingsmorningexercise.mySettings", Context.MODE_PRIVATE);

        TextView textView = (TextView)findViewById(R.id.text_view1);
        textView.setTextSize(TypedValue.COMPLEX_UNIT_SP,sharedPreferences.getFloat("textView1Size",15));
        textView.setTextColor(sharedPreferences.getInt("textView1Color", Color.BLACK));

        TextView textView2 = (TextView)findViewById(R.id.text_view2);
        textView2.setTextSize(TypedValue.COMPLEX_UNIT_SP,sharedPreferences.getFloat("textView2Size",15));
        textView2.setTextColor(sharedPreferences.getInt("textView2Color", Color.BLACK));
    }

    private void setupDefaultSettings(SharedPreferences sharedPreferences){
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putFloat("textView1Size", 15);
        editor.putFloat("textView2Size",15);
        editor.putInt("textView1Color", Color.BLACK);
        editor.putInt("textView2Color", Color.BLACK);
        editor.putBoolean("setupCompleted",true);
        editor.commit();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main_menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()){
            case R.id.settings_menu_item:
                Intent intent = new Intent(MainActivity.this,SettingsActivity.class);
                startActivity(intent);
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }

    }
}

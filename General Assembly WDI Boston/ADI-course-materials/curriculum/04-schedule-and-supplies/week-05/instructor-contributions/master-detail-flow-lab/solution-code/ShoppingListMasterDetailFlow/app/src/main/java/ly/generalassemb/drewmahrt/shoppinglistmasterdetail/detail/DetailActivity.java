package ly.generalassemb.drewmahrt.shoppinglistmasterdetail.detail;

import android.os.Bundle;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.R;

public class DetailActivity extends AppCompatActivity
        implements DetailFragment.OnItemCheckedListener {

    public static final String ITEM_ID_KEY = "itemIdKey";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);

        // Get ID of selected item
        int selectedItemId = getIntent().getIntExtra(ITEM_ID_KEY, -1);

        // If we don't have a valid ID, no reason to continue
        if (selectedItemId == -1) {
            Log.d("DetailActivity", "onCreate: No ID passed on the intent!");
            finish();
        }

        // Load the detail fragment
        DetailFragment detailFragment = DetailFragment.newInstance(selectedItemId);

        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.add(R.id.detail_fragment_container, detailFragment);
        fragmentTransaction.commit();
    }

    @Override
    public void onItemChecked(int itemId, boolean isChecked) {
        // Nothing to do
    }
}

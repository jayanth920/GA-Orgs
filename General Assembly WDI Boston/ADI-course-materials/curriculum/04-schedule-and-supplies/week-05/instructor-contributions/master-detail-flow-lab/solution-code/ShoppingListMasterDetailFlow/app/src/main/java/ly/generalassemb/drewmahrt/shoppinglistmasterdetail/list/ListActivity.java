package ly.generalassemb.drewmahrt.shoppinglistmasterdetail.list;

import android.content.Intent;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;

import java.util.List;

import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.R;
import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.data.ShoppingItem;
import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.data.ShoppingSQLiteOpenHelper;
import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.data.setup.DBAssetHelper;
import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.detail.DetailActivity;
import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.detail.DetailFragment;

public class ListActivity extends AppCompatActivity
        implements ShoppingListAdapter.OnItemSelectedListener,
        DetailFragment.OnItemCheckedListener {

    private List<ShoppingItem> mShoppingList;
    private ShoppingSQLiteOpenHelper mDatabaseHelper;
    private RecyclerView.Adapter mAdapter;
    private boolean mTwoPane;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list);

        //Ignore the two lines below, they are for setup
        DBAssetHelper dbSetup = new DBAssetHelper(ListActivity.this);
        dbSetup.getReadableDatabase();

        //Setup the RecyclerView
        RecyclerView shoppingListRecyclerView = (RecyclerView) findViewById(R.id.shopping_list_recyclerview);

        mDatabaseHelper = ShoppingSQLiteOpenHelper.getInstance(this);
        mShoppingList = mDatabaseHelper.getShoppingList();

        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(this,LinearLayoutManager.VERTICAL,false);
        shoppingListRecyclerView.setLayoutManager(linearLayoutManager);

        mAdapter = new ShoppingListAdapter(mShoppingList, this);
        shoppingListRecyclerView.setAdapter(mAdapter);

        // Check if in two-pane mode (is the new XML file being used)
        mTwoPane = (findViewById(R.id.detail_fragment_container) != null);
    }

    @Override
    protected void onResume() {
        super.onResume();

        mShoppingList.clear();
        mShoppingList.addAll(mDatabaseHelper.getShoppingList());

        mAdapter.notifyDataSetChanged();
    }

    @Override
    public void onItemSelected(int itemId) {
        if (mTwoPane) {
            // Load the detail fragment
            DetailFragment detailFragment = DetailFragment.newInstance(itemId);

            FragmentManager fragmentManager = getSupportFragmentManager();
            FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
            fragmentTransaction.replace(R.id.detail_fragment_container, detailFragment);
            fragmentTransaction.commit();
        }
        else {
            // Start the detail activity
            Intent intent = new Intent(this, DetailActivity.class);
            intent.putExtra(DetailActivity.ITEM_ID_KEY, itemId);
            startActivity(intent);
        }
    }

    @Override
    public void onItemChecked(int itemId, boolean isChecked) {
        for (int i = 0; i < mShoppingList.size(); i++) {
            if (mShoppingList.get(i).getId() == itemId) {
                mShoppingList.get(i).setChecked(isChecked);
                mAdapter.notifyItemChanged(i);
                break;
            }
        }
    }
}

package com.clevertap.adidemo;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;

import com.clevertap.android.sdk.CleverTapAPI;
import com.clevertap.android.sdk.exceptions.CleverTapMetaDataNotFoundException;
import com.clevertap.android.sdk.exceptions.CleverTapPermissionsNotSatisfied;

import java.util.ArrayList;


public class MainActivity extends AppCompatActivity  {

    public final static String PRODUCT = "com.clevertap.adidemo.PRODUCT";

    private ArrayList<Product> data;

    private static final String SAVED_LAYOUT_MANAGER = "com.clevertap.adidemo.SAVED_LAYOUT_MANAGER";

    private  RecyclerView recyclerView;

    private Bundle layoutManagerSavedState;

    private CleverTapAPI clevertap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // so we can restore the scroll state of the product list
        if(savedInstanceState != null) {
            layoutManagerSavedState = savedInstanceState.getParcelable(SAVED_LAYOUT_MANAGER);
        }

        // initialize the CleverTap SDK
        initCleverTap();

        // create our views
        setUpViews();
    }

    // CleverTap
    private void initCleverTap() {

        try {
            CleverTapAPI.setDebugLevel(1);
            clevertap = CleverTapAPI.getInstance(getApplicationContext());
            clevertap.enablePersonalization();
        } catch (CleverTapMetaDataNotFoundException | CleverTapPermissionsNotSatisfied e) {
            // handle appropriately
            e.printStackTrace();
        }
    }

    // views and view state restoration handling
    private void setUpViews(){

        Context context = getApplicationContext();

        recyclerView = (RecyclerView)findViewById(R.id.rv);
        recyclerView.setHasFixedSize(true);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(context);
        recyclerView.setLayoutManager(layoutManager);

        data = createProductData(null);

        RecyclerView.Adapter adapter = new DataAdapter(context, data);
        recyclerView.setAdapter(adapter);

        // if appropriate, restore the saved scroll state of the product list
        restoreLayoutManagerPosition();

        // add touch listener to detect product item view taps to show item view activity
        recyclerView.addOnItemTouchListener(new RecyclerView.OnItemTouchListener() {
            GestureDetector gestureDetector = new GestureDetector(getApplicationContext(), new GestureDetector.SimpleOnGestureListener() {

                @Override
                public boolean onSingleTapUp(MotionEvent e) {
                    return true;
                }

            });

            @Override
            public boolean onInterceptTouchEvent(RecyclerView rv, MotionEvent e) {
                // handle product item view tap
                View child = rv.findChildViewUnder(e.getX(), e.getY());
                if (child != null && gestureDetector.onTouchEvent(e)) {
                    int position = rv.getChildAdapterPosition(child);
                    launchItemViewActivityForProduct(data.get(position));
                    return true;
                }

                return false;
            }

            @Override
            public void onTouchEvent(RecyclerView rv, MotionEvent e) {
            }

            @Override
            public void onRequestDisallowInterceptTouchEvent(boolean disallowIntercept) {
            }

        });
    }

    public void onRestoreInstanceState(Bundle savedInstanceState) {
        // so we can restore the scroll state of the product list
        if(savedInstanceState != null) {
            layoutManagerSavedState = savedInstanceState.getParcelable(SAVED_LAYOUT_MANAGER);
        }

        super.onRestoreInstanceState(savedInstanceState);
    }

    private void restoreLayoutManagerPosition() {
        // restore the scroll state of the product list
        if (layoutManagerSavedState != null) {
            recyclerView.getLayoutManager().onRestoreInstanceState(layoutManagerSavedState);
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        // save the scroll state of the product list so we can restore it later
        outState.putParcelable(SAVED_LAYOUT_MANAGER, recyclerView.getLayoutManager().onSaveInstanceState());
        super.onSaveInstanceState(outState);
    }

    // helpers

    // start the product item view activity
    private void launchItemViewActivityForProduct(final Product product) {
        if (product == null) return ;

        Intent intent = new Intent(this, ItemViewActivity.class);
        intent.putExtra(PRODUCT, product);
        startActivity(intent);
    }

    // product data handling

    private ArrayList<Product> createProductData(final String sortCategory) {
        ArrayList<Product> _data = new ArrayList<Product>();

        _data.add(new Product("Shoes2", "Vans Classic Slip On", "47", "shoes",  R.drawable.vans));
        _data.add(new Product("Hats3", "Brixton Hat", "34", "hats", R.drawable.brixton));
        _data.add(new Product("Shoes3", "Asics Gel Nimbus",   "109",  "shoes",  R.drawable.asics));
        _data.add(new Product("Hats1", "Animal Farm Plucker Hat", "25",  "hats", R.drawable.animalfarm));
        _data.add(new Product("Bags2", "Marc Jacobs Bag", "125", "bags", R.drawable.marcjacobs));
        _data.add(new Product("Shoes1", "Converse Chuck Taylor", "50", "shoes",  R.drawable.chuck));
        _data.add(new Product("Bags3", "Kenneth Cole Bag", "100", "bags", R.drawable.kennethcole));
        _data.add(new Product("Hats2", "Nike Hat", "24", "hats", R.drawable.nike));
        _data.add(new Product("Bags1", "Kate Spade Bag", "298", "bags", R.drawable.katespade));

        if (sortCategory != null) {
            ArrayList<Product> _sorted = new ArrayList<Product>();
            for (Product product : _data) {
                if (product.getCategory().equals(sortCategory)) {
                    _sorted.add(0, product);
                } else {
                    _sorted.add(product);
                }
            }
            _data = _sorted;
        }
        return _data;
    }
}

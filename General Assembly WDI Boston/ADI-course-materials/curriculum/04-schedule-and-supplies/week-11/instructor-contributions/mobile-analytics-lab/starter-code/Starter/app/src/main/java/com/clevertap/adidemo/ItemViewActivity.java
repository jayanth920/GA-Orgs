package com.clevertap.adidemo;

import android.content.res.Resources;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.content.Intent;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.support.v4.app.NavUtils;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.clevertap.android.sdk.CleverTapAPI;
import com.clevertap.android.sdk.exceptions.CleverTapMetaDataNotFoundException;
import com.clevertap.android.sdk.exceptions.CleverTapPermissionsNotSatisfied;
import com.clevertap.android.sdk.exceptions.InvalidEventNameException;

import java.util.ArrayList;
import java.util.HashMap;

public class ItemViewActivity extends AppCompatActivity {

    private CleverTapAPI clevertap;

    private Product product = null;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_item_view);

        // grab a reference to CleverTap
        try {
            clevertap = CleverTapAPI.getInstance(getApplicationContext());
        } catch (CleverTapMetaDataNotFoundException | CleverTapPermissionsNotSatisfied e) {
            // handle appropriately
            e.printStackTrace();
        }

        // grab the product object from the intent
        Intent intent = getIntent();

        if (intent != null) {
            Product product = intent.getParcelableExtra(MainActivity.PRODUCT);
            if (product != null) {
                this.product = product;

                try {
                    getSupportActionBar().setTitle(product.getName());
                } catch (Exception e) {
                    // no-op
                }
            }
        }

        setUpViews();
    }

    private void setUpViews() {
        if (product == null) return;

        // populate the views
        TextView productName = (TextView)findViewById(R.id.product_name_detail);
        productName.setText(product.getName());

        ImageView productPhoto = (ImageView)findViewById(R.id.product_photo_detail);
        productPhoto.setImageResource(product.getPhotoId());

        TextView productPrice = (TextView)findViewById(R.id.product_price_detail);
        Resources res = getResources();
        String text = String.format(res.getString(R.string.price_format), product.getPrice());
        productPrice.setText(text);

        // set button listeners
        Button addToCartButton = (Button) findViewById(R.id.addtocart_button);
        addToCartButton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View arg0) {
                productAddToCart();
            }
        });

        Button buyNowButton = (Button) findViewById(R.id.buynow_button);
        buyNowButton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View arg0) {
                productPurchase();
            }
        });
    }

    private void productAddToCart() {
        if (product == null) return;
        showToastWithMessage("" + product.getName() + " added to cart");
    }

    private void productPurchase() {
        if (product == null) return;
        showToastWithMessage("" + product.getName() + " purchased!");
    }

    // helpers

    private void showToastWithMessage(String message) {
        Toast toast = Toast.makeText(getApplicationContext(), message, Toast.LENGTH_SHORT);
        toast.show();
    }

    // navigation

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            // Respond to the action bar's Up/Home button
            case android.R.id.home:
                NavUtils.navigateUpFromSameTask(this);
                return true;
        }
        return super.onOptionsItemSelected(item);
    }

}
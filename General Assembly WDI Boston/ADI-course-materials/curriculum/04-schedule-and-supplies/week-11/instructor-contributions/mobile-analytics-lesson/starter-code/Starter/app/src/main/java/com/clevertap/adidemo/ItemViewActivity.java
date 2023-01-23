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

        // track the product view
        trackProductView(product);
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
        trackProductAddedToCart(product);
    }

    private void productPurchase() {
        if (product == null) return;
        showToastWithMessage("" + product.getName() + " purchased!");
        trackProductPurchased(product);
    }

    private void trackProductView(Product product) {
        if (clevertap == null || product == null) return;

        // store the last category and product viewed on the user profile
        HashMap<String, Object> profile = new HashMap<String, Object>();
        profile.put("lastCategoryViewed", product.getCategory());
        profile.put("lastProductViewed", product.getId());
        clevertap.profile.push(profile);

        // store the ProductViewed action event
        HashMap<String, Object> prodViewedAction = new HashMap<String, Object>();
        prodViewedAction.put("ProductId", product.getId());
        prodViewedAction.put("ProductName", product.getName());
        prodViewedAction.put("Category", product.getCategory());
        prodViewedAction.put("Price", product.getPrice());
        prodViewedAction.put("Currency", "USD");
        clevertap.event.push("ProductViewed", prodViewedAction);
    }

    private void trackProductAddedToCart(Product product) {
        if (clevertap == null || product == null) return;

        // store the last category and product added to cart on the user profile
        HashMap<String, Object> profile = new HashMap<String, Object>();
        profile.put("lastCategoryAddedToCart", product.getCategory());
        profile.put("lastProductAddedToCart", product.getId());
        clevertap.profile.push(profile);

        // store the ProductAddedToCart action event
        HashMap<String, Object> prodAddAction = new HashMap<String, Object>();
        prodAddAction.put("ProductId", product.getId());
        prodAddAction.put("ProductName", product.getName());
        prodAddAction.put("Category", product.getCategory());
        prodAddAction.put("Price", product.getPrice());
        prodAddAction.put("Currency", "USD");
        clevertap.event.push("ProductAddedToCart", prodAddAction);
    }

    private void trackProductPurchased(Product product) {
        if (clevertap == null || product == null) return;

        // store the last category and product purchased on the user profile
        HashMap<String, Object> profile = new HashMap<String, Object>();
        profile.put("lastCategoryPurchased", product.getCategory());
        profile.put("lastProductPurchased", product.getId());
        clevertap.profile.push(profile);

        // store the special "Charged" action event
        HashMap<String, Object> chargeDetails = new HashMap<String, Object>();
        chargeDetails.put("Amount", Integer.parseInt(product.getPrice()));
        chargeDetails.put("Currency", "USD");
        chargeDetails.put("PaymentMode", "CreditCard");

        HashMap<String, Object> item1 = new HashMap<String, Object>();
        item1.put("ProductId", product.getId());
        item1.put("ProductName", product.getName());
        item1.put("Category", product.getCategory());
        item1.put("Quantity", 1);

        ArrayList<HashMap<String, Object>> items = new ArrayList<HashMap<String, Object>>();
        items.add(item1);

        try {
            clevertap.event.push(CleverTapAPI.CHARGED_EVENT, chargeDetails, items);
        } catch (InvalidEventNameException e) {
            // You have to specify the first parameter to push()
            // as CleverTapAPI.CHARGED_EVENT
        }
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
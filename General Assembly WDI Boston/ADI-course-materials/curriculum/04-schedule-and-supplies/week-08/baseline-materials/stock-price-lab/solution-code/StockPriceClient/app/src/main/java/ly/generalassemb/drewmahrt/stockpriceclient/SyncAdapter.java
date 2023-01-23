package ly.generalassemb.drewmahrt.stockpriceclient;

import android.accounts.Account;
import android.content.AbstractThreadedSyncAdapter;
import android.content.ContentProviderClient;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.content.SyncResult;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;

import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Created by drewmahrt on 3/7/16.
 */
public class SyncAdapter extends AbstractThreadedSyncAdapter{
    ContentResolver mResolver;

    public SyncAdapter(Context context, boolean autoInitialize) {
        super(context, autoInitialize);
        mResolver = context.getContentResolver();
    }

    public SyncAdapter(Context context, boolean autoInitialize, boolean allowParallelSyncs) {
        super(context, autoInitialize, allowParallelSyncs);
        mResolver = context.getContentResolver();
    }

    @Override
    public void onPerformSync(Account account, Bundle extras, String authority, ContentProviderClient provider, SyncResult syncResult) {
        Log.d(SyncAdapter.class.getName(),"Starting sync");

        Cursor cursor = mResolver.query(StockPriceContentProvider.CONTENT_URI,null,null,null,null);

        Stock stock;
        while(cursor.moveToNext()){
            stock = getStock(cursor.getString(cursor.getColumnIndex(StockDBHelper.COLUMN_STOCK_SYMBOL)));
            Uri uri = Uri.parse(StockPriceContentProvider.CONTENT_URI + "/" + cursor.getString(cursor.getColumnIndex(StockDBHelper.COLUMN_ID)));
            ContentValues values = new ContentValues();
            values.put(StockDBHelper.COLUMN_STOCK_PRICE,stock.getLastPrice());
            mResolver.update(uri,values,null,null);
        }

    }

    private Stock getStock(String symbol){
        String data ="";
        try {
            URL url = new URL("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol="+symbol);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.connect();
            InputStream inStream = connection.getInputStream();
            data = getInputData(inStream);
        } catch (Throwable e) {
            e.printStackTrace();
        }

        Gson gson = new Gson();
        return gson.fromJson(data,Stock.class);
    }

    private String getInputData(InputStream inStream) throws IOException {
        StringBuilder builder = new StringBuilder();
        BufferedReader reader = new BufferedReader(new InputStreamReader(inStream));

        String data = null;

        while ((data = reader.readLine()) != null){
            builder.append(data);
        }

        reader.close();

        return builder.toString();
    }
}

package ly.generalassemb.drewmahrt.stockpriceclient;

import android.content.ContentProvider;
import android.content.ContentValues;
import android.content.UriMatcher;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.net.Uri;
import android.support.annotation.Nullable;
import android.util.Log;

/**
 * Created by drewmahrt on 3/6/16.
 */
public class StockPriceContentProvider extends ContentProvider {
    private static final String AUTHORITY = "ly.generalassemb.drewmahrt.stockpriceclient.StockPriceContentProvider";
    private static final String STOCK_PRICES_TABLE = StockDBHelper.TABLE_STOCKS;
    public static final Uri CONTENT_URI = Uri.parse("content://"
            + AUTHORITY + "/" + STOCK_PRICES_TABLE);
    public static final Uri PORTFOLIO_CONTENT_URI = Uri.parse("content://"
            + AUTHORITY + "/" + STOCK_PRICES_TABLE + "/portfolio");

    public static final int STOCK = 1;
    public static final int STOCK_ID = 2;
    public static final int STOCK_PORTFOLIO = 3;

    private static final UriMatcher sURIMatcher = new UriMatcher(UriMatcher.NO_MATCH);

    static {
        sURIMatcher.addURI(AUTHORITY, STOCK_PRICES_TABLE, STOCK);
        sURIMatcher.addURI(AUTHORITY, STOCK_PRICES_TABLE + "/#", STOCK_ID);
        sURIMatcher.addURI(AUTHORITY, STOCK_PRICES_TABLE + "/portfolio", STOCK_PORTFOLIO);
    }

    private StockDBHelper dbHelper;

    @Override
    public boolean onCreate() {
        dbHelper = new StockDBHelper(getContext(), null, null, 1);
        return false;
    }

    @Nullable
    @Override
    public Cursor query(Uri uri, String[] projection, String selection, String[] selectionArgs, String sortOrder) {
        int uriType = sURIMatcher.match(uri);

        Cursor cursor;

        switch (uriType) {
            case STOCK_ID:
                cursor = dbHelper.getStockById(uri.getLastPathSegment());
                break;
            case STOCK:
                cursor = dbHelper.getStocks(selection,sortOrder);
                break;
            default:
                throw new IllegalArgumentException("Unknown URI");
        }

        cursor.setNotificationUri(getContext().getContentResolver(), uri);
        return cursor;
    }

    @Nullable
    @Override
    public String getType(Uri uri) {
        return null;
    }

    @Nullable
    @Override
    public Uri insert(Uri uri, ContentValues values) {
        int uriType = sURIMatcher.match(uri);

        long id = 0;
        switch (uriType) {
            case STOCK:
                id = dbHelper.addStock(values);
                break;
            default:
                throw new IllegalArgumentException("Unknown URI: " + uri);
        }
        getContext().getContentResolver().notifyChange(uri, null);
        return Uri.parse(STOCK_PRICES_TABLE + "/" + id);
    }

    @Override
    public int delete(Uri uri, String selection, String[] selectionArgs) {
        return 0;
    }

    @Override
    public int update(Uri uri, ContentValues values, String selection, String[] selectionArgs) {
        int uriType = sURIMatcher.match(uri);
        int rowsUpdated = 0;

//        Log.d(StockPriceContentProvider.class.getName(), "Triggered update");

        switch (uriType) {
            case STOCK_ID:
                rowsUpdated = dbHelper.updateStockById(uri.getLastPathSegment(), values);
                break;
            case STOCK:
                rowsUpdated = dbHelper.updateStockBySymbol(values, selection);
                break;
            default:
                throw new IllegalArgumentException("Unknown URI: " + uri);
        }

        getContext().getContentResolver().notifyChange(uri, null);
        return rowsUpdated;
    }
}

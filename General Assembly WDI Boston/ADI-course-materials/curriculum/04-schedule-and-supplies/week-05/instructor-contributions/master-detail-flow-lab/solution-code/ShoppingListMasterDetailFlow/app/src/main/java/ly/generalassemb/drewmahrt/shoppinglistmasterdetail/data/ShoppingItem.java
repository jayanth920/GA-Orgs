package ly.generalassemb.drewmahrt.shoppinglistmasterdetail.data;

/**
 * Created by drewmahrt on 10/21/16.
 */

public class ShoppingItem {
    private int mId;
    private String mName, mDescription, mPrice, mType;
    private boolean mIsChecked;

    public ShoppingItem(int id, String name, String description, String price, String type, boolean isChecked) {
        mId = id;
        mName = name;
        mDescription = description;
        mPrice = price;
        mType = type;
        mIsChecked = isChecked;
    }

    public int getId() {
        return mId;
    }

    public String getName() {
        return mName;
    }

    public String getDescription() {
        return mDescription;
    }

    public String getPrice() {
        return mPrice;
    }

    public String getType() {
        return mType;
    }

    public boolean isChecked() {
        return mIsChecked;
    }

    public void setChecked(boolean checked) {
        mIsChecked = checked;
    }
}

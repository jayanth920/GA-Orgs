package ly.generalassemb.drewmahrt.shoppinglistmasterdetail.detail;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.TextView;

import java.text.NumberFormat;
import java.util.Locale;

import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.R;
import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.data.ShoppingItem;
import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.data.ShoppingSQLiteOpenHelper;


public class DetailFragment extends Fragment {

    private int mItemId;

    private OnItemCheckedListener mListener;

    public DetailFragment() {
        // Required empty public constructor
    }

    public static DetailFragment newInstance(int itemId) {
        DetailFragment fragment = new DetailFragment();
        Bundle args = new Bundle();
        args.putInt(DetailActivity.ITEM_ID_KEY, itemId);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mItemId = getArguments().getInt(DetailActivity.ITEM_ID_KEY);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_detail, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        TextView name = (TextView) view.findViewById(R.id.detail_name);
        TextView description = (TextView) view.findViewById(R.id.detail_description);
        TextView price = (TextView) view.findViewById(R.id.detail_price);
        TextView category = (TextView) view.findViewById(R.id.detail_category);
        CheckBox checkBox = (CheckBox) view.findViewById(R.id.detail_checkbox);

        // Get the selected item from the database.
        // Write a new method in the open helper for this.
        final ShoppingSQLiteOpenHelper helper = ShoppingSQLiteOpenHelper.getInstance(getContext());
        final ShoppingItem selectedItem = helper.getShoppingItemById(mItemId);

        // Populate the TextViews & CheckBox
        name.setText(selectedItem.getName());
        description.setText(selectedItem.getDescription());
        category.setText(selectedItem.getType());
        checkBox.setChecked(selectedItem.isChecked());

        NumberFormat currencyFormat = NumberFormat.getCurrencyInstance(Locale.getDefault());
        double priceValue = Double.valueOf(selectedItem.getPrice());
        price.setText(currencyFormat.format(priceValue));

        // Set a listener for the checkbox
        checkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean isChecked) {

                selectedItem.setChecked(isChecked);

                helper.updateItemCheckedStatus(mItemId, isChecked);

                mListener.onItemChecked(mItemId, isChecked);
            }
        });
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof OnItemCheckedListener) {
            mListener = (OnItemCheckedListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnItemCheckedListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    public interface OnItemCheckedListener {
        void onItemChecked(int itemId, boolean isChecked);
    }
}

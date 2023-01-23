package ly.generalassemb.drewmahrt.shoppinglistmasterdetail.list;

import android.content.Context;
import android.content.Intent;
import android.graphics.Paint;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.List;

import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.detail.DetailActivity;
import ly.generalassemb.drewmahrt.shoppinglistmasterdetail.data.ShoppingItem;

/**
 * Created by drewmahrt on 10/21/16.
 */

public class ShoppingListAdapter extends RecyclerView.Adapter<ShoppingItemViewHolder> {

    private List<ShoppingItem> mShoppingItems;
    private OnItemSelectedListener mOnItemSelectedListener;

    public ShoppingListAdapter(List<ShoppingItem> shoppingItems, OnItemSelectedListener listener) {
        mShoppingItems = shoppingItems;
        mOnItemSelectedListener = listener;
    }

    @Override
    public ShoppingItemViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        return new ShoppingItemViewHolder(LayoutInflater.from(parent.getContext()).inflate(android.R.layout.simple_list_item_1,parent,false));
    }

    @Override
    public void onBindViewHolder(final ShoppingItemViewHolder holder, int position) {

        final ShoppingItem currentItem = mShoppingItems.get(position);

        holder.mNameTextView.setText(currentItem.getName());

        if (currentItem.isChecked()) {
            // If the item is checked off, set text to be strikethru
            holder.mNameTextView.setPaintFlags(holder.mNameTextView.getPaintFlags() | Paint.STRIKE_THRU_TEXT_FLAG);
        }
        else {
            // Otherwise, if not checked off, make it NOT strikethru
            holder.mNameTextView.setPaintFlags(holder.mNameTextView.getPaintFlags() & (~Paint.STRIKE_THRU_TEXT_FLAG));
        }

        // Add an OnClickListener that launches DetailActivity and passes it the item's ID
        holder.mNameTextView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                // Call the listener which is implemented by the activity
                mOnItemSelectedListener.onItemSelected(currentItem.getId());
            }
        });
    }

    @Override
    public int getItemCount() {
        return mShoppingItems.size();
    }

    public interface OnItemSelectedListener {
        void onItemSelected(int itemId);
    }
}

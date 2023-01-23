package com.clevertap.adidemo;

import android.content.Context;
import android.content.res.Resources;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.ImageView;

import java.util.ArrayList;

public class DataAdapter extends RecyclerView.Adapter<DataAdapter.ViewHolder> {

    private Context mContext;

    public class ViewHolder extends RecyclerView.ViewHolder{

        TextView productName;
        TextView productPrice;
        ImageView productPhoto;

        public ViewHolder(View view) {
            super(view);
            productName = (TextView)itemView.findViewById(R.id.product_name);
            productPrice = (TextView)itemView.findViewById(R.id.product_price);
            productPhoto = (ImageView)itemView.findViewById(R.id.product_photo);
        }
    }

    private ArrayList<Product> data;


    public DataAdapter(Context context, ArrayList<Product> data) {
        this.data = data;
        this.mContext = context;
    }

    @Override
    public DataAdapter.ViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.card_view, viewGroup, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(DataAdapter.ViewHolder viewHolder, int i) {

        Product _product = data.get(i);

        viewHolder.productName.setText(_product.getName());
        viewHolder.productPhoto.setImageResource(_product.getPhotoId());
        Resources res = mContext.getResources();
        String text = String.format(res.getString(R.string.price_format), _product.getPrice());
        viewHolder.productPrice.setText(text);

    }

    @Override
    public int getItemCount() {
        return data.size();
    }

}

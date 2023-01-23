package com.clevertap.adidemo;

import android.os.Parcelable;
import android.os.Parcel;


class Product implements Parcelable {
    private String id;
    private String name;
    private String price;
    private String category;
    private int photoId;


    Product(String id, String name, String price, String category, int photoId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.photoId = photoId;
    }

    public Product(Parcel in){
        String[] data= new String[5];
        in.readStringArray(data);
        this.id = data[0];
        this.name = data[1];
        this.price = data[2];
        this.category = data[3];
        this.photoId = Integer.parseInt(data[4]);
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPrice() {
        return price;
    }

    public String getCategory() {
        return category;
    }

    public int getPhotoId() {
        return photoId;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {

        dest.writeStringArray(new String[]{this.id,this.name,this.price,this.category,String.valueOf(this.photoId)});
    }

    public static final Parcelable.Creator<Product> CREATOR = new Parcelable.Creator<Product>() {

        @Override
        public Product createFromParcel(Parcel source) {
            return new Product(source);  //using parcelable constructor
        }

        @Override
        public Product[] newArray(int size) {
            return new Product[size];
        }

    };
}



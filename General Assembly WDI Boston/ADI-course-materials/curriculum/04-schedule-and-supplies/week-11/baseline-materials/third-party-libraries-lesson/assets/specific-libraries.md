> This is a doc that goes over popular libraries by functionality.


## A quick note about the company, Square

<p align="center">
	<img src="https://9to5mac.files.wordpress.com/2014/03/sr-swipe-iphone-e3df889d656d0feb803e6850521a91f8.jpg" height="300px" /> <img src="https://dl6rt3mwcjzxg.cloudfront.net/assets/stand/configure-counter-7dc4881c9aa248e1c0bca54905eb9b6a.jpg" height="300px" />
</p

So you probably know [Square](https://squareup.com/). They are best known for their point of sale systems, which you've likely seen in a store, trendy coffee shop, farmer's market, etc.

Why am I bring them up? Well, they are [huge in the open source community](http://square.github.io/)! They have **15** high-quality Android libraries.


#### Networking

You can do a lot of useful things with [HttpURLConnection](http://developer.android.com/training/basics/network-ops/connecting.html). However, managing your own HTTP code can be a lot of work. There are two libraries that try to remedy this: Volley and Retrofit.

**Volley**

Volley is a networking library created by Google. [There's even a multi-page guide on the Android Developer website on how to use it](http://developer.android.com/training/volley/index.html).

It's a terrific library that makes networking easier and more efficient.

... but then Square said they could do it better.

**Retrofit**

Retrofit, which is a wrapper of Square's other library OkHttp, is another library that is more efficient than Volley.

One drawback is that Retrofit is a bit more complicated to implement the first time around. However, once you understand what's happening, it becomes more straightforward.

#### Downloading Images

Downloading images asynchronously is a pain. Usually, you have to create an AsyncTask that would download the bitmap and save it to a given ImageView. If the image is too big, you will have to scale it and/or lower its resolution programmatically, which may still cause OutOfMemory errors if you are unlucky.

Or, you can use a library that handles all of that for you.

**Picasso**

Square created [Picasso](http://square.github.io/picasso/), an image loading library that can load images efficiently from a url, caching them as needed, and animating the view when loaded.

The biggest benefit is that loading an image from url to an ImageView is only one line of code.

**Glide**

[Glide](https://github.com/bumptech/glide) is another library that loads images. In fact, it's almost exactly like the Picasso; most of the methods are exactly the same.

What's the difference? Glide is [more memory efficient and also can load animated GIFS](http://inthecheesefactory.com/blog/get-to-know-glide-recommended-by-google/en).

Glide is not as big as Picasso but it is slowly looking like the best competitor.

**Honorable mention: Volley's NetworkImageView**

Volley created a view called NetworkImageView, which handles most of the work for you. However, you will still have to set up your own cache (which is relatively easy, but the other options are so much easier).


#### Database Management

**Realm**

[Realm](http://inthecheesefactory.com/blog/get-to-know-glide-recommended-by-google/en) is a replacement for SQLite, running directly on the phone's hardware (making it really fast). It makes it easy to manipulate data by making their framework object focused.

It auto-updates object connected to the database.

It is *much* easier to setup than a standard SQLite database.

**DBFlow**

[DBFlow](https://github.com/Raizlabs/DBFlow)'s GitHub page says that it will write most of the database code for you, and it does it well! Also faster than the standard SQLite database (though maybe not as fast as Realm), it caches data in a meaningful way.

Also, since it's still based on SQLite, there is an abundance of support for it.


#### Saving and Restoring Instance State

**IcePick**

[IcePick](https://github.com/frankiesardo/icepick) is a useful library that simplifies saving and loading instance state (which can be an annoying task).

All you have to do is annotate the things you want to save/restore, with @State. Then, `IcePick.saveInstanceState(...)` and `IcePick.restoreInstanceState()` in their respective Activity/Fragment method.

That's it. The rest of the heavy work is done for you!


# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Things to focus on while making ProjectX/Blazon accessible:  

Here are the changes to the file to be done to make the app accessible:  
##### Hint: to make edit fields focusable, delete the attribute ```android:focusableInTouchMode="true”```, because it sets the focus on the parent element in the view hierarchy.

1 activity_details.xml: 
```
	<ImageView
		android:id="@+id/where_image"
		android:layout_width="match_parent"
 		android:layout_height="0dp"
 		android:layout_weight="1"
 		android:padding="27dp"
 		android:src="@drawable/where"
 		android:contentDescription="@string/where"/>
```

```
	<ImageView
	        android:id="@+id/when_image"
	        android:layout_width="match_parent"
	        android:layout_height="0dp"
	        android:layout_weight="1"
	        android:padding="27dp"
	        android:src="@drawable/when"
	        android:contentDescription="@string/when"/>
```

```
	<ImageView
	        android:id="@+id/who_image"
	        android:layout_width="match_parent"
	        android:layout_height="0dp"
	        android:layout_weight="1"
	        android:padding="27dp"
	        android:src="@drawable/who"
	        android:contentDescription="@string/who"/>
```

```
	<ImageView
	        android:id="@+id/what_image"
	        android:layout_width="match_parent"
	        android:layout_height="0dp"
	        android:layout_weight="1"
	        android:padding="27dp"
	        android:src="@drawable/what"
	        android:contentDescription="@string/what"/>
```

2 custom_toast.xml: 
```
	<ImageView
	        android:layout_width="50dp"
	        android:layout_height="50dp"
	        android:src="@drawable/smallwhitelogo"
	        android:paddingTop="10dp" 
	        android:contentDescription="@string/thank_you_image"/>
```

3 map_fragment.xml
```
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
	    	xmlns:app="http://schemas.android.com/apk/res-auto"
	    	android:layout_width="match_parent"
	    	android:layout_height="match_parent"
	    	android:focusableInTouchMode="true"
	    	android:orientation="vertical"
	    	android:id="@+id/scene_container"
	    	android:contentDescription="@string/map_fragment">
```
```
	<AutoCompleteTextView
	       android:id="@+id/search"
	       android:layout_width="wrap_content"
	       android:layout_height="wrap_content"
	       android:layout_gravity="center_vertical"
	       android:hint="Search by location                                     "
	       android:imeOptions="actionGo"
	       android:textSize="18dp"
	       android:focusable="true"/>
```
```
	<ImageView
            	android:layout_width="0dp"
            	android:layout_height="match_parent"
            	android:layout_gravity="center"
            	android:layout_weight="2"
            	android:padding="2dp"
            	android:layout_marginRight="5dp"
            	android:src="@drawable/search"
            	android:contentDescription="@string/description_find_location"/>
```
```
	<android.support.design.widget.FloatingActionButton
            	android:id="@+id/add_shame"
            	android:layout_width="wrap_content"
            	android:layout_height="wrap_content"
            	android:src="@drawable/addshame"
            	android:visibility="invisible"
            	app:backgroundTint="@color/primary"
            	app:elevation="6dp"
            	app:pressedTranslationZ="6dp"
            	app:rippleColor="@color/primary_dark" 
            	android:contentDescription="@string/add_instance"/>
```
4 bar_chart_fragment.xml
```
	<net.steamcrafted.materialiconlib.MaterialIconView
	    	android:id="@+id/back"
	    	android:layout_width="50dp"
	    	android:layout_height="50dp"
	    	android:layout_marginStart="10dp"
	    	app:materialIcon="arrow_left_bold"
	    	app:materialIconColor="#ffffff"
	    	android:contentDescription="@string/previous_chart"/>
```
5 pie_chart_fragment.xml
```
	<net.steamcrafted.materialiconlib.MaterialIconView
    		android:id="@+id/next"
	        android:layout_width="50dp"
	        android:layout_height="50dp"
	        android:layout_alignParentEnd="true"
	        android:layout_centerHorizontal="true"
	        android:layout_centerVertical="true"
	        android:layout_marginEnd="15dp"
        	app:materialIcon="arrow_right_bold"
        	app:materialIconColor="#ffffff" 
	        android:contentDescription="@string/next_chart_button"/>
```
6 profile_fragment.xml
```
	<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    		xmlns:app="http://schemas.android.com/apk/res-auto"
    		android:layout_width="match_parent"
    		android:layout_height="match_parent"
    		android:contentDescription="@string/profile_fragment">
```

```
	<de.hdodenhof.circleimageview.CircleImageView
                android:id="@+id/profile_image"
                android:layout_width="0dp"
                android:layout_height="200dp"
                android:layout_marginLeft="10dp"
                android:layout_weight="1"
                android:src="@drawable/logo_white"
                app:border_color="@color/accent"
                app:border_width="2dp"
                android:contentDescription="@string/profile_image_container"/>
```

```
	<EditText
	        android:id="@+id/year"
	        android:layout_width="match_parent"
	        android:layout_height="match_parent"
	        android:hint="@string/birth_year"
	        android:inputType="number"
	        android:maxLength="4"
	        android:textColor="#000000"
	        android:textColorHint="#363636"
	        android:focusable="true"/>
```

7 signup_fragment.xml
```
	<ImageView
	        android:id="@+id/name"
	        android:layout_width="159dp"
	        android:layout_height="159dp"
	        android:layout_gravity="center"
	        android:layout_marginBottom="25dp"
	        android:src="@drawable/logo_large"
	        android:contentDescription="@string/app_logo"/>
```

```
	<ImageButton
        	android:layout_width="0dp"
	        android:layout_height="match_parent"
	        android:layout_weight="1"
	        android:background="@android:color/transparent"
	        android:id="@+id/facebook_button"
       		android:src="@drawable/facebook"
	    	android:contentDescription="@string/fb_authentication"/>
```

```
	<ImageButton
	    	android:layout_width="0dp"
        	android:layout_height="match_parent"
        	android:layout_weight="1"
        	android:layout_marginLeft="10dp"
        	android:layout_marginRight="10dp"
	    	android:id="@+id/twitter_button"
	    	android:src="@drawable/twitter"
	    	android:background="@android:color/transparent"
	    	android:contentDescription="@string/twitter_authentication"/>
```

```
	<ImageButton
	    	android:id="@+id/googleplus_button"
	    	android:layout_width="0dp"
	    	android:layout_height="match_parent"
	    	android:layout_weight="1"
	    	android:src="@drawable/google"
	    	android:background="@android:color/transparent"
	    	android:contentDescription="@string/google_plus_authentication"/>
```

8 stats_fragment.xml
```
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
	    	android:layout_width="match_parent"
	    	android:layout_height="0dp"
	    	android:background="@drawable/gradient"
	    	android:descendantFocusability="beforeDescendants"
	    	android:focusableInTouchMode="true"
	    	android:orientation="vertical"
	    	android:contentDescription="@string/stats_data_fragment">
```
```
	<ImageView
            	android:layout_width="0dp"
            	android:layout_height="match_parent"
            	android:layout_gravity="center"
            	android:layout_weight="2"
            	android:layout_marginRight="5dp"
            	android:src="@drawable/search"
            	android:contentDescription="@string/zipcode_description"/>
```
```
	<EditText
            	android:id="@+id/zipcode"
            	android:layout_width="0dp"
            	android:layout_height="wrap_content"
            	android:layout_gravity="center_vertical"
            	android:layout_weight="8"
            	android:hint="@string/zipcode"
            	android:inputType="number"
            	android:maxLength="5"
            	android:textSize="18sp"
            	android:focusable="true"/>
```


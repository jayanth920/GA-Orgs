package com.example.g.activitytransitionsdemo;

import android.app.ActivityOptions;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.AppBarLayout;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.transition.ChangeTransform;
import android.transition.Explode;
import android.transition.Fade;
import android.transition.TransitionSet;
import android.util.Pair;
import android.view.View;
import android.view.Window;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        TransitionSet transition = new TransitionSet();
        transition.addTransition(new ChangeTransform());

        getWindow().requestFeature(Window.FEATURE_CONTENT_TRANSITIONS);
        getWindow().setSharedElementEnterTransition(transition);
        getWindow().setSharedElementReturnTransition(transition);

        getWindow().setExitTransition(new Explode());
        getWindow().setEnterTransition(new Fade());

        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);



        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                AppBarLayout appBar = (AppBarLayout) findViewById(R.id.appBar);
                ImageView persistantImage1 = (ImageView) findViewById(R.id.persistantImage1);
                ImageView persistantImage2 = (ImageView) findViewById(R.id.persistantImage2);

                Intent intent = new Intent(MainActivity.this, SecondActivity.class);

                Pair<View, String> pair1 = Pair.create((View)persistantImage1, "persistantImage1");
                Pair<View, String> pair2 = Pair.create((View)persistantImage2, "persistantImage2");
                Pair<View, String> pair3 = Pair.create((View)appBar, "appBarTransition");

                ActivityOptions options = ActivityOptions.makeSceneTransitionAnimation(MainActivity.this, pair1, pair2, pair3);

                // start the new activity
                startActivity(intent, options.toBundle());
            }
        });
    }

}

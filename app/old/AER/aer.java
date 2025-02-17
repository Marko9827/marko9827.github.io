package com.getwebviewpagetitleurl_android_examples.com;

import android.app.Activity;
import android.app.ProgressDialog;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends Activity {

    WebView webView;
    ProgressDialog Pdialog;
    String PageURL, PageTitle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = (WebView) findViewById(R.id.webView1);

        webView.setWebViewClient(new WebViewClient());

        webView.loadUrl("https://www.android-examples.com");

    }

    public class WebViewClient extends android.webkit.WebViewClient {
        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {

            // TODO Auto-generated method stub
            super.onPageStarted(view, url, favicon);

            PageURL = view.getUrl();

            getActionBar().setSubtitle(PageURL);

        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {

            // TODO Auto-generated method stub
            view.loadUrl(url);
            return true;
        }

        @Override
        public void onPageFinished(WebView view, String url) {

            // TODO Auto-generated method stub

            super.onPageFinished(view, url);

            // Getting WebPage URL .
            PageURL = view.getUrl();

            // Getting WebPage TITLE .
            PageTitle = view.getTitle();

            // Adding Page URL inside Action Bar;
            getActionBar().setTitle(PageURL);

            // Adding Page Title inside Action Bar;
            getActionBar().setSubtitle(PageTitle);

        }

    }

}
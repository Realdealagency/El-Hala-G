/*

 * Licensed to the Apache Software Foundation (ASF) under one

 * or more contributor license agreements.  See the NOTICE file

 * distributed with this work for additional information

 * regarding copyright ownership.  The ASF licenses this file

 * to you under the Apache License, Version 2.0 (the

 * "License"); you may not use this file except in compliance

 * with the License.  You may obtain a copy of the License at

 *

 * http://www.apache.org/licenses/LICENSE-2.0

 *

 * Unless required by applicable law or agreed to in writing,

 * software distributed under the License is distributed on an

 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY

 * KIND, either express or implied.  See the License for the

 * specific language governing permissions and limitations

 * under the License.

 */

var app = {

    // Application Constructor

    initialize: function () {

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);





    },



    // deviceready Event Handler

    //

    // Bind any cordova events here. Common events are:

    // 'pause', 'resume', etc.

    onDeviceReady: function () {

        this.receivedEvent('deviceready');

        //lines added inappbrowser


        var inAppBrowserbRef = cordova.InAppBrowser.open('https://electrostar.ovplatform.tk', '_self', 'location=no,toolbar=no');

        inAppBrowserbRef = cordova.InAppBrowser.open('http://ramadan.ovplatform.tk/Mosalsallat/my_eposide/68', '_self', 'location=no,toolbar=no,zoom=no');

        //admob
     // Set AdMobAds options:
      admob.setOptions({
        publisherId:           "ca-app-pub-7251676025279948/1312189581",  // Required
        interstitialAdId:      "ca-app-pub-7251676025279948/1358213628",  // Optional
        autoShowBanner:        true,                                      // Optional
        autoShowRInterstitial: true,                                     // Optional
        autoShowRewarded:      false,                                     // Optional
        tappxIdiOS:            "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        tappxIdAndroid:        "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        tappxShare:            0.5                                        // Optional
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();
      
      // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd();
 
      // Request rewarded ad (will present automatically when autoShowRewarded is set to true)
      admob.requestRewardedAd();
       //admob
    },



    // Update DOM on a Received Event

    receivedEvent: function (id) {

        var parentElement = document.getElementById(id);

        var listeningElement = parentElement.querySelector('.listening');

        var receivedElement = parentElement.querySelector('.received');



        listeningElement.setAttribute('style', 'display:none;');

        receivedElement.setAttribute('style', 'display:block;');



        console.log('Received Event: ' + id);


    }

};


                //admob


           //admob

app.initialize();

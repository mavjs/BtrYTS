// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $sceProvider, $compileProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $sceProvider.enabled(false)
  // creds: https://github.com/driftyco/ionic/issues/1814
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|app):/)
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:
    
    .state('tab.upcoming', {
      url: '/upcoming',
      views: {
        'tab-upcoming': {
          templateUrl: 'templates/tab-upcoming.html',
          controller: 'UpcomingCtrl'
        }
      }
    })

    .state('tab.movies', {
      url: '/movies',
      views: {
        'tab-movies': {
          templateUrl: 'templates/tab-movies.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('tab.confirmed', {
      url: '/confirmed',
      views: {
        'tab-confirmed': {
          templateUrl: 'templates/tab-confirmed.html',
          controller: 'ConfirmedCtrl'
        }
      }
    })

    .state('tab.accepted', {
      url: '/accepted',
      views: {
        'tab-accepted': {
          templateUrl: 'templates/tab-accepted.html',
          controller: 'AcceptedCtrl'
        }
      }
    })

    .state('tab.movie', {
      url: '/movie/:ImdbCode',
      views: {
        'tab-upcoming': {
          templateUrl: 'templates/tab-movie.html',
          controller: 'MovieCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/upcoming');

});


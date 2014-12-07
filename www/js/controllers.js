angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('AboutCtrl', function($scope) {
})

.controller('ConfirmedCtrl', function($scope, $http) {
  $scope.confirmed = [];
  $http.get('https://yts.re/api/requests.json?page=confirmed').success(function(data) {
    $scope.confirmed = data['RequestList'];
  });
})

.controller('AcceptedCtrl', function($scope, $http) {
  $scope.accepted = [];
  $http.get('https://yts.re/api/requests.json?page=accepted').success(function(data) {
    $scope.accepted = data['RequestList'];
  });
})

.controller('UpcomingCtrl', function($scope, $http) {
  $scope.upcoming = [];
  $http.get(' https://yts.re/api/upcoming.json').success(function(data) {
    $scope.upcoming = data;
  });
})

.controller('MoviesCtrl', function($scope, $http) {
  $scope.movies = [];
  $http.get('https://yts.re/api/list.json').success(function(data) {
    $scope.movies = data['MovieList'];
  });
})

.controller('MovieCtrl', function($scope, $http, $stateParams, $sce) {
  $http.get('https://yts.re/api/listimdb.json',
    { params: {
        imdb_id: $stateParams.ImdbCode
        }
    })
    .success(function(data) {
        if(!data['error']){
            $http.get('https://yts.re/api/movie.json',
                { params: {
                    id: data['MovieList'][0].MovieID
                }
            })
            .success(function(data) {
                $scope.movie = data;
                $scope.yt = function() { return $sce.trustAsResourceUrl( 'http://www.youtube.com/embed/'+$scope.movie.YoutubeTrailerID ); }
            });
        } else {
            $scope.movie = data;
        }
    });
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

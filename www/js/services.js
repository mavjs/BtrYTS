angular.module('starter.services', [])

.factory('ListImdb', function($http) {
  var movie = [];
  return {
    get: function(ImdbCode) {
        $http.get('https://yts.re/api/listimdb.json', {imdb_id: ImdbCode})
            .success(function(data) {
                movie = data;
            });
        return movie['MovieList'];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});

tescoinSearch.factory('Search', ['$http', function($http) {

  // var queryUrl = 'https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&';
  return {
    query: function(urlString) {
      return $http({
        url: urlString,
        method: 'GET',
  
      });
    }
  }
}]);




      
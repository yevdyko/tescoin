tescoinSearch.factory('Search', ['$http', function($http) {

  // var queryUrl = 'https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=myproduct&page=1&sessionkey=';
  return {
    query: function(queryUrl) {
      return $http.jsonp({
        url: queryUrl,
        method: 'GET'
      });
    }
  }
}]); 

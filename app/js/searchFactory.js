tescoinSearch.factory('Search', ['$resource', function($resource) {

  var queryUrl = 'https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=:searchTerm&page=1&sessionkey=:sessionKey';
  return {
    query: function(sessionKey, searchTerm) {
      return $resource({
        url: queryUrl,
        method: 'GET',
        params: {
         'searchTerm': searchTerm, 
         'sessionKey': sessionKey
        }  
      });
    }
  }
}]);
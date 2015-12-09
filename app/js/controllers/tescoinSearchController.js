"use strict";

tescoinSearch.controller('TescoinSearchController', ['$http', function($http) {
	var self = this;

	    self.doSearch = function() {
        $http.jsonp('https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=butter&page=1&sessionkey=i2WVyUPLPfCQWgmlHzzqxaLaO5Oo1qIuHNHw4PPJbkqSfHc8aX&JSONP=JSON_CALLBACK')
              .success(function(data){
                console.log(data);
              });
	    	// Search.query(self.createUrlString())
      // 		.then(function(response) {
      //   		self.searchResult = response.data;
      //   })
	    };

	    self.createUrlString = function() {
				// console.log("URL: https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=".concat(self.searchTerm).concat("&page=1&sessionkey=").concat(self.sessionKey));
        return "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=".concat(self.searchTerm).concat("&page=1&sessionkey=").concat(self.sessionKey).concat("&JSONP=myfunction");
        // return "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=" + self.searchTerm + "&page=1&sessionkey=" + self.sessionKey;
      };
}]);


// https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=LOGIN&email=ruralmyth@gmail.com&password=m00m1NS??&developerkey=MYrigdksfRpGy2DdaXQe&applicationkey=67F37A4AB79CF4D72BBB

// https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=myproduct&page=1&sessionkey=


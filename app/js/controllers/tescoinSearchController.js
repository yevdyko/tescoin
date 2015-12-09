"use strict";

tescoinSearch.controller('TescoinSearchController', ['$http', function($http) {
	var self = this;
  self.activeTab = 1;


      self.isActiveTab = function(num) {
        return (self.activeTab === num);
      };

      self.setTab = function(num) {
        self.activeTab = num;
      };

	    self.doSearch = function() {
        $http.jsonp(self.createUrlString())
              .success(function(data){
                self.searchResult = data;
                console.log(self.searchResult);
                // console.log(data);
              });
	    	// Search.query(self.createUrlString())
      // 		.then(function(response) {
      //   		self.searchResult = response.data;
      //   })
	    };

	    self.createUrlString = function() {
        self.sessionKey = "r3skDV33vRgx5YqIFtVN1fw1LOqZMeI1vBl325BrpjepZIOX1q";
				// console.log("URL: https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=".concat(self.searchTerm).concat("&page=1&sessionkey=").concat(self.sessionKey));
        return "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=".concat(self.searchTerm).concat("&page=1&sessionkey=").concat(self.sessionKey).concat("&JSONP=JSON_CALLBACK");
        // return "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=" + self.searchTerm + "&page=1&sessionkey=" + self.sessionKey;
      };
}]);


// https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=LOGIN&email=ruralmyth@gmail.com&password=m00m1NS??&developerkey=MYrigdksfRpGy2DdaXQe&applicationkey=67F37A4AB79CF4D72BBB

// https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=myproduct&page=1&sessionkey=


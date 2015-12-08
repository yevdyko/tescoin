"use strict";

tescoinSearch.controller('TescoinSearchController', ["Search", function(Search) {
	var self = this;
  self.activeTab = 1;

	    self.doSearch = function() {
	    	var urlString = self.createUrlString();
        Search.query(urlString)
      		.then(function(response) {
        		self.searchResult = response.data;
        })
	    };

	    self.createUrlString = function() {
				return "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=" + self.searchTerm + "&page=1&sessionkey=" + self.sessionkey;
	    };

      self.setTab = function(number) {
        self.activeTab = number;
      };

      self.isActiveTab = function(number) {
        return (self.activeTab === number);
      };
}]);


// https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=LOGIN&email=ruralmyth@gmail.com&password=m00m1NS??&developerkey=MYrigdksfRpGy2DdaXQe&applicationkey=67F37A4AB79CF4D72BBB

// https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=myproduct&page=1&sessionkey=


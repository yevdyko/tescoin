"use strict";

tescoinSearch.controller('TescoinSearchController', ['$resource', function($resource) {
	var self = this;
	var searchResource = $resource('https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=myproduct&page=1&sessionkey=');

	    self.doSearch = function() {
	    	self.searchResult = searchResource.get(
				  { q: self.searchTerm }
				);
	    };
}]);


// https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=LOGIN&email=ruralmyth@gmail.com&password=m00m1NS??&developerkey=MYrigdksfRpGy2DdaXQe&applicationkey=67F37A4AB79CF4D72BBB

// https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=myproduct&page=1&sessionkey=
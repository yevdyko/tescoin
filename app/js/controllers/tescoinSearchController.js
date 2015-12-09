"use strict";

tescoinSearch.controller('TescoinSearchController', ['$http', '$resource', function($http, $resource) {
	var self = this;
  self.activeTab = 1;
  self.searchedProducts = [];
  self.searchResource = $resource('https://bittylicious.com/api/v1/quote/BTC/GB/GBP/BANK/1/BUY');


      self.isActiveTab = function(num) {
        return (self.activeTab === num);
      };

      self.setTab = function(num) {
        self.activeTab = num;
      };

      self.getBittylicious = function() {
              return self.searchResource.get();
      };

      self.getBitcoinRate =function() {
        var bittyliciousObject = self.getBittylicious();
        bittyliciousObject.$promise.then(function(data) {
          self.bitcoinRate = data.totalPrice;
        });
      };

      self.convertPrice = function(poundPr) {
        return (poundPr / self.bitcoinRate).toFixed(5); 
      };

      self.convertImage = function(imgString) {
        return (imgString.replace("90x90", "540x540"));
      };

      self.getInfo = function() {
       var products =  self.searchResult.Products;
        for (var i = 0; i < products.length; i++) {
          var item = {};
          item.price = self.convertPrice(products[i].Price);
          item.pName = products[i].Name;
          item.img = self.convertImage(products[i].ImagePath);
          item.unitPrice = self.convertPrice(products[i].UnitPrice);
          item.unitType = products[i].UnitType;
          self.searchedProducts.push(item);
        }
        console.log(self.searchedProducts);
      };

	    self.doSearch = function() {
        self.clearSearchResults();
        $http.jsonp(self.createUrlString())
              .success(function(data){
                self.searchResult = data;
                      self.getInfo();
              });

        self.getBitcoinRate();
	    };

      self.clearSearchResults = function() {
        self.searchedProducts = [];
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


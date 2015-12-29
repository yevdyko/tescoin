(function() {
  'use strict';

  angular
    .module('app')
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$http', '$resource'];

  function SearchController($http, $resource) {
    var self = this;

    self.activeTab = 1;
    self.searchedProducts = [];
    self.searchResource = $resource('https://bittylicious.com/api/v1/quote/BTC/GB/GBP/BANK/1/BUY');

    self.isActiveTab = isActiveTab;
    self.setTab = setTab;
    self.getBittylicious = getBittylicious;
    self.getBitcoinRate = getBitcoinRate;
    self.convertPrice = convertPrice;
    self.convertImage = convertImage ;
    self.getInfo = getInfo;
    self.doSearch = doSearch;
    self.clearSearchResults = clearSearchResults;
    self.createUrlString = createUrlString;

    function isActiveTab(num) {
      return (self.activeTab === num);
    };

    function setTab(num) {
      return self.activeTab = num;
    };

    function getBittylicious() {
      return self.searchResource.get();
    };

    function getBitcoinRate() {
      var bittyliciousObject = self.getBittylicious();
      bittyliciousObject.$promise.then(function(data) {
        self.bitcoinRate = data.totalPrice;
      });
    };

    function convertPrice(poundPr) {
      return (poundPr / self.bitcoinRate).toFixed(5);
    };

    function convertImage(imgString) {
      return (imgString.replace("90x90", "540x540"));
    };

    function getInfo() {
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

    function doSearch() {
      self.clearSearchResults();
        $http.jsonp(self.createUrlString())
              .success(function(data){
                self.searchResult = data;
                      self.getInfo();
              });

        self.getBitcoinRate();
    };

    function clearSearchResults() {
      return self.searchedProducts = [];
    };

    function createUrlString() {
      return "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext="
        .concat(self.searchTerm)
        .concat("&page=1&sessionkey=")
        .concat(self.sessionKey)
        .concat("&JSONP=JSON_CALLBACK");
    };
  }
})();
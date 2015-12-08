"use strict";

tescoinSearch.controller("TescoinSearchController", [function() {
	var self = this;

	    self.doSearch = function() {
	    	self.searchResults = {
					"items"[
			      {
			        "ImagePath": "http://img.tesco.com/Groceries/pi/642/5053526772642/IDShot_90x90.jpg",
			        "Name": "Tesco Everyday Value Sponge Pan Cleaners 8 Pack",
			        "Price": 0.4
			      },
			      {
			        "ImagePath": "http://img.tesco.com/Groceries/pi/467/5000436616467/IDShot_540x540.jpg",
			        "Name": "Tesco Everyday Cornflakes",
			        "Price": 2.0
			      }
				  ]
				};
	    };
}]);
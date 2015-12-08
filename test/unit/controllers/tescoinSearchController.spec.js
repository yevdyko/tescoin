describe('TescoinSearchController', function() {
	beforeEach(module('TescoinSearch'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('TescoinSearchController');
	}));

  it( 'initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a product', function() {
    var items = [
      {
        "ImagePath": "http://img.tesco.com/Groceries/pi/642/5053526772642/IDShot_90x90.jpg",
        "Name": "Tesco Everyday Value Sponge Pan Cleaners 8 Pack",
        "Price": 0.4
      }
    ];

    it('displays search results', function() {
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});
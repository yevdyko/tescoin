describe('factory: Search', function() {

  var search;
  var items = [
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
    ];

  beforeEach(module('TescoinSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=myproduct&page=1&sessionkey=&q=product")
      .respond(
        { items: items }
      );
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
  search.query('product')
    .then(function(response) {
      expect(response.data.items).toEqual(items)
    })
  httpBackend.flush();
})

});
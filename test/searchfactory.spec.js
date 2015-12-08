describe('factory: Search', function() {

  var search;

  beforeEach(module('TescoinSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&searchtext=products&page=1&sessionkey=123456789")
      .respond(
        { items: items }
      );
  }));

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

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('123456789', 'products') 
    .then(function(response) {
      expect(response.data.items).toEqual(items)
    })
    httpBackend.flush();
  });
});
describe('Business.Address', function() {
  var address;
  beforeEach(function(){
    address = new Business.Address('51 Melcher St', 'Boston', 'MA', '02110');
  });

  it("should create an address", function() {
    expect(address).not.toBe(null);
  });

  it("should create address with a street", function() {
    expect(address.street).toMatch(/51 Melcher St/);
  });

  it("should create address with a city", function() {
    expect(address.city).toMatch(/Boston/);
  });

  it("should create address with a state", function() {
    expect(address.state).toMatch(/MA/);
  });

  it("should create address with a zip", function() {
    expect(address.zip).toBe('02110');
  });

  it("should display an address", function(){
    expect(address.display()).toBe('51 Melcher St Boston MA in 02110');
  });

})
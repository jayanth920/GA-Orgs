const { expect } = require('chai');
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

// test suite
describe('GET /candies', function() {
  // a test
  it('should get back all of the candy + a 200 response', function(done) {
    api
      .get('/candies')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('should return an array', function(done) {
    api
      .get('/candies')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an obejct that has a "name" and "color" as properties', function(done) {
    api
      .get('/candies')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        expect(res.body[0]).to.have.property('name');
        expect(res.body[0]).to.have.property('color');
        done();
      });
  });
});

describe('POST /candies', function() {
  let candiesLength;

  // runs before once when test suite is called
  before(function(done) {
    api
      .post('/candies')
      .set('Accept', 'application/json')
      .send({
        "id": 5,
        "name": "lollipop",
        "color": "red"
      })
      .end(done);
  });

  // runs before each test
  beforeEach(function(done) {
    api
      .get('/candies')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          done(err);
        }

        candiesLength = res.body.length;
        done();
      });
  });

  it('should add a candies object to the candies array and return it', function(done) {
    api
      .get('/candies')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }

        expect(res.body.length).to.equal(candiesLength);
        done();
      });
  });
});

describe('GET /candies/:id', function() {
  let candyId;

  before(function(done) {
    api
     .get('/candies/5')
     .end(function(err, res) {
       if (err) {
         return done(err);
       }
      //  console.log(res.body);
       candyId = res.body.id;
       done();
     });
  });

  it('should have the fields name + color', function(done) {
    api
      .get(`/candies/${candyId}`)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          return done();
        }

        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('color');
        done();
      });
  });

  it('should return 404 if the id is not found', function(done) {
    api
      .get(`/candies/123abc`)
      .expect(404)
      .end(done);
  });
});

describe('PUT /candies/:id', function() {
  let candyId = 5;

  before(function(done) {
    api
      .put(`/candies/${candyId}`)
      .send({
        "id": candyId,
        "name": "reeses",
        "color": "brown and orange"
      })
      .end(done);
  });

  it('should update a candy object', function(done) {
    api
      .get(`/candies/${candyId}`)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          done(err);
        }

        expect(res.body.name).to.equal("reeses");
        expect(res.body.color).to.equal("brown and orange");
        done();
      });
  });

  it('should return 404 if the id is not found', function(done) {
    api
      .get(`/candies/123abc`)
      .expect(404)
      .end(done);
  });
});

describe('DELETE /candies/:id', function() {
  let candyId;

  before(function(done) {
    api
      .get('/candies/5')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          done(err);
        }

        candyId = res.body.id;
        done();
      });
  });

  it('should delete object from array of candies', function(done) {
    api
      .delete(`/candies/${candyId}`)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          done(err);
        }

        expect(res.body.message).to.equal('deleted');
        done();
      });
  });

  it('should return 404 if the id is not found', function(done) {
    api
      .get(`/candies/123abc`)
      .expect(404)
      .end(done);
  });
});

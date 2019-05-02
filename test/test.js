var assert = require('assert');
const app = require('./loginSandboxTestHelper');

describe('When the user visits the home page', function () {
  describe('And they are not logged in', function () {
    it('takes the user to the sign in page if authentication headers are not set', function (done) {
      request(app)
        .get('/')
        .set({cookie:true})
        .end(function (err, res) {
          expect(res.status).equals(302);
          done();
        });
    });
  });
});

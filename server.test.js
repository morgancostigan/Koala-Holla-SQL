const app = require('../server.js');
const testServer = require('supertest');

describe('description', () => {
    const successCode = 200;
    test(`route`, (done) => {
        testServer(app).get(`/api/<route here>`)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
        }
    );
});
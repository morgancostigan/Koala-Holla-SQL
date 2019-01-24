const app = require('../server.js');
const testServer = require('supertest');

describe('check routes', () => {
    const successCode = 200;
    const route = '/api/koala';
    const koalaId = 1;
    test(`route`, (done) => {
        testServer(app).get(route)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
        }
    );
    test(`route`, (done) => {
        testServer(app).post(route)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
    }
    );
    test(`route`, (done) => {
        testServer(app).put(route)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
    }
    );
    test(`route`, (done) => {
        testServer(app).delete(route)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
    }
    );
});
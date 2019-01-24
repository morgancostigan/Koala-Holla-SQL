const app = require('../server.js');
const testServer = require('supertest');

describe('check routes', () => {
    const successCode = 200;
    const route = '/api/koala';
    const koalaId = 1;
    test(`Route GET returns array`, (done) => {
        testServer(app).get(route)
            .then((resp) => {
                expect(ArrayisArray(resp)).toEqual(true);
                done();
            });
        }
    );
    test(`Route GET has keys if array not empty`, (done) => {
        testServer(app).get(route)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
        }
    );
    test(`Route POST`, (done) => {
        testServer(app).post(route)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
    }
    );
    test(`Route PUT`, (done) => {
        testServer(app).put(`${route}/${koalaId}`)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
    }
    );
    test(`Route DELETE`, (done) => {
        testServer(app).delete(`${route}/${koalaId}`)
            .then((resp) => {
                expect(resp.statusCode).toEqual(successCode);
                done();
            });
    }
    );
});
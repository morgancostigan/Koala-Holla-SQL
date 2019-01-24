const app = require('../server.js');
const testServer = require('supertest');

describe('check routes', () => {
    const successCode = 200;
    const route = '/api/koala';
    const koalaId = 1;
    test(`Route GET returns array`, (done) => {
        testServer(app).get(route)
            .then((resp) => {
                expect(Array.isArray(resp.body)).toEqual(true);
                done();
            });
        }
    );
    test(`Route GET has column keys if array not empty`, (done) => {
        testServer(app).get(route)
            .then((resp) => {
                console.log('in GET test:',resp.body);
                const returnedArrayIsCorrect = (
                    resp.body.length === 0 || // if empty array, pass 
                    (
                        resp.body[0].id &&
                        resp.body[0].name &&
                        resp.body[0].gender &&
                        resp.body[0].age &&
                        (resp.body[0].ready_to_transfer === true || resp.body[0].ready_to_transfer === false) &&
                        (resp.body[0].notes === null || resp.body[0].notes.length > 0)
                    )
                );
                expect(returnedArrayIsCorrect).toEqual(true);
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
import app from '../../src/app';
import {agent as request} from 'supertest';
import {expect} from 'chai';

let firstUserIdTest = '';
let firstUserBody = {
    "name" : "Test User",
    "email" : "test2@test.com",
    "password" : "MyPass"
};

const appRequest = request('http://localhost:3000');

it('should POST /users', async function () {
    const res = await appRequest
        .post('/users').send(firstUserBody);
    expect(res.status).to.equal(201);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    expect(res.body.id).to.be.an('number');
    firstUserIdTest = res.body.id;
});

it(`should GET /users/:userId`, async function () {
    const res = await appRequest
        .get(`/users/${firstUserIdTest}`).send();
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.an("object");
    expect(res.body.id).to.be.an('number');
    expect(res.body.name).to.be.equals(firstUserBody.name);
    expect(res.body.email).to.be.equals(firstUserBody.email);
    expect(res.body.id).to.be.equals(firstUserIdTest);
});

// it(`should GET /users`, async function () {
//     const res = await appRequest
//         .get(`/users`).send();
//     expect(res.status).to.equal(200);
//     expect(res.body).not.to.be.empty;
//     expect(res.body).to.be.an("array");
// expect(res.body[0].id).to.be.an('number');
//     expect(res.body[0].name).to.be.equals(firstUserBody.name);
//     expect(res.body[0].email).to.be.equals(firstUserBody.email);
//     expect(res.body[0].id).to.be.equals(firstUserIdTest);
// });

// it('should PUT /users/:userId', async function () {
//     const name = 'Jose';
//     const res = await appRequest
//         .put(`/users/${firstUserIdTest}`).send({
//             name: name,
//             email: firstUserBody.email
//         });
//     expect(res.status).to.equal(204);
// });

// it(`should GET /users/:userId to have a new name`, async function () {
//     const res = await appRequest
//         .get(`/users/${firstUserIdTest}`).send();
//     expect(res.status).to.equal(200);
//     expect(res.body).not.to.be.empty;
//     expect(res.body).to.be.an("object");
// expect(res.body.id).to.be.an('number');
//     expect(res.body.name).to.be.not.equals(firstUserBody.name);
//     expect(res.body.email).to.be.equals(firstUserBody.email);
//     expect(res.body.id).to.be.equals(firstUserIdTest);
// });

// it('should PATCH /users/:userId', async function () {
//     let newField = {description: 'My user description'};
//     const res = await appRequest
//         .patch(`/users/${firstUserIdTest}`).send(newField);
//     expect(res.status).to.equal(204);
// });

// it(`should GET /users/:userId to have a new field called description`, async function () {
//     const res = await appRequest
//         .get(`/users/${firstUserIdTest}`).send();
//     expect(res.status).to.equal(200);
//     expect(res.body).not.to.be.empty;
//     expect(res.body).to.be.an("object");
//     expect(res.body.id).to.be.an('number');
//     expect(res.body.description).to.be.equals('My user description');
// });

// it('should DELETE /users/:userId', async function () {
//     const res = await appRequest
//         .delete(`/users/${firstUserIdTest}`).send();
//     expect(res.status).to.equal(204);
// });

// it(`should GET /users`, async function () {
//     const res = await appRequest
//         .get(`/users`).send();
//     expect(res.status).to.equal(200);
//     expect(res.body).to.be.an("array");
//     expect(res.body).to.be.empty;
// });
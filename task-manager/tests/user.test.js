const request = require('supertest');
const app = require('../app');
const User = require('../src/models/user');

const userOne

beforeEach( async () => {
    await User.deleteMany({});
});

test('Should signup a new user', async () => {
     await request(app).post('/users').send({
        name: 'Peter',
        email: 'Jones@Peter.com',
        password: 'testingpass'
    }).expect(201)
});
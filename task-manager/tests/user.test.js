const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../src/models/user');

const userOne = new User({
    name: "Mike",
    email: "mike@example.com",
    password: "yoyoyoyo1"
})

beforeEach( async () => {
    await User.deleteMany({});
    await new User(userOne).save();
});

afterAll(() => {
    mongoose.connection.close();
});

test('Should signup a new user', async () => {
     await request(app).post('/users').send({
        name: 'Peter',
        email: 'Jones@Peter.com',
        password: 'testingpass'
    }).expect(201)
});

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: "mike@example.com",
        password: "yoyoyoyo1"
    }).expect(200)
});


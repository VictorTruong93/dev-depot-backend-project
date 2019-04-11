// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const User = require('../models/users');
const Favorites = require('../models/favorites');

// describe('Sanity check', function () {
//     it('should be 2', function () {
//         // assert.equal(2, 1 + 1);
//         expect(1 + 1).to.equal(2);
//     });
// });

describe('Users model', () => {
    it('Should be able to get an array of Users', async () => {
        const theUsers = await User.getAll();
        expect(theUsers).to.be.an.arrayOf(User);
    });
    it('should get one user by id', async () => {
        const theUser = await User.getById(1);
        expect(theUser).to.be.an.instanceOf(User);
    });
})

describe('Users and Favorites', () => {
    it('should get all the favorites for an individual user', async () => {
        const theUser = await User.getById(1);
        const theFavorites = await theUser.Favorites;
        expect(theFavorites).to.be.an.instanceOf(Array);
        expect(theFavorites).to.have.lengthOf(3);
        for(let i=0; i<theFavorites.length; i++) {
            expect(theFavorites[i]).to.be.an.instanceOf(Favorites);
        }
    })
})
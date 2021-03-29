const { describe, it } = require('mocha');
const { expect, spy } = require('chai');
const request = require('test/support/request');

describe('API :: POST user/create', () => {
    context('creating user with success', async () => {
        let payload;
        beforeEach(async () => {
            payload = {
                user_name: 'userName',
                password: 'aPassword',
            };
        });

        it('Create user - with all fields', async () => {
            const { body } = await request().post('/auth/sign-up').send(payload).expect(201);
            expect(body.id).to.be.exist();
            expect(body.user_name).to.be.eql('userName');
        });
    });
});

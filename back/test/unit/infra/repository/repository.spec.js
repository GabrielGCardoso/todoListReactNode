const { describe, it } = require('mocha');
const { expect, spy } = require('chai');

const Repository = require('src/infra/repository/repository');

describe('Repository test', () => {
    describe('create object', () => {
        let mockRepoEntity;
        before(() => {
            mockRepoEntity = {
                create: () => Promise.reject('Could not create object'),
            };
            spy.on(mockRepoEntity, 'create');
        });
        it('should call create function from mocked entity', async () => {
            const repo = new Repository(mockRepoEntity);
            repo.create();
            expect(mockRepoEntity.create).to.be.called.once();
        });
    });
    describe('create object', () => {
        let mockRepoEntity;
        before(() => {
            mockRepoEntity = {
                create: () => Promise.reject({ message: 'Could not create object' }),
            };
            spy.on(mockRepoEntity, 'create');
        });
        it('should throw error from mocked repository', (done) => {
            const repo = new Repository(mockRepoEntity);
            repo.create()
                .then(() => {
                    done('should throw error');
                })
                .catch((error) => {
                    expect(mockRepoEntity.create).to.be.called.once();
                    expect(error.message).to.be.equal('Could not create object');
                    done();
                });
        });
    });
});

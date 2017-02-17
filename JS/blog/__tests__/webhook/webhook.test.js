require('dotenv').config({
    path: `${__dirname}/../../.env`
});
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

const webhook = require(`${__dirname}/../../modules/webhook`);
const git = require(`${__dirname}/../../modules/git`);

describe("Webhook Module", () => {
    it('should contain the pull request object', () => {
        return webhook.acceptValidPRs(require(`${__dirname}/../../mocks/webhooks/mergedPR.json`))
        .then((pr) => {
            expect(pr.id).toBeDefined();
        });
    });
    it('should reject and return false if the pr object does not exitsts ', () => {
        return webhook.acceptValidPRs({})
        .catch((err)=>{
            expect(err).toBeDefined();
        });
    });
    it('should contain the pull request name and owner', () => {
        return webhook.getRepoAndOwner(require(`${__dirname}/../../mocks/webhooks/mergedPR.json`))
        .then((repo) => {
            expect(repo.owner).toBeDefined();
            expect(repo.name).toBeDefined();
        });
    });
    it('should reject the promise if an error occurred while getting the repo name and owner', () => {
        return webhook.acceptValidPRs({})
        .catch((err)=>{
            expect(err).toBeDefined();
        });
    });
    it('should contain the merge reqeust sha', () => {
        return webhook.getMergeSha(require(`${__dirname}/../../mocks/webhooks/mergedPR.json`))
        .then((sha) => {
            expect(sha).toBeDefined();
        });
    });
    it('should reject and return false if the sha commit does not exitsts ', () => {
        return webhook.getMergeSha({})
        .catch((err)=>{
            expect(err).toBeDefined();
        });
    });
});

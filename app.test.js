const {getName, getPlayers} = require("./app.js")
module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>/__tests__/setup.js"],
};

describe('game', () => {
    it('should get correct name', () => {
        let result = getName(1, "a")

        expect(result).toBe("Oswald Clover");
    });

    it('should get all players in a team', () => {
        let result = getPlayers("b")

        expect(result).toEqual(["Buster Baxter", "Cecily Parsley", "Jack Hare", "Peter Cottontail", "Runny Babbit", "Seeing har", "Binky Binkenstein", "Bongo Binkenstein", "Kevin Dewclaw", "Sheba Jones", "Hartley Hare", "Becca Sparkles"]);
    });
});
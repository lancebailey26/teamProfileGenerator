const Engineer = require("../lib/Engineer");
describe("Engineer class", () => {
    it("takes values from employee prompts + engineer specific prompts", () => {
        const engineer = new Engineer("Lance", "26", "lance@gmail.com", "github");

        expect(engineer.name).toBe("Lance");
        expect(engineer.id).toBe("26");
        expect(engineer.email).toBe("lance@gmail.com")
        expect(engineer.github).toBe("github")
    });
});
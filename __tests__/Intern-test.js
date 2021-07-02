const Intern = require("../lib/Intern");
describe("Intern class", () => {
    it("takes values from employee prompts + Intern specific prompts", () => {
        const intern = new Intern("Lance", "26", "lance@gmail.com", "Ohio State");

        expect(intern.name).toBe("Lance");
        expect(intern.id).toBe("26");
        expect(intern.email).toBe("lance@gmail.com")
        expect(intern.school).toBe("Ohio State")
    });
});
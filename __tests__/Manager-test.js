const Manager = require("../lib/Manager");
describe("Manager class", () => {
    it("takes values from employee prompts + Manager specific prompts", () => {
        const manager = new Manager("Lance", "26", "lance@gmail.com", "62");

        expect(manager.name).toBe("Lance");
        expect(manager.id).toBe("26");
        expect(manager.email).toBe("lance@gmail.com")
        expect(manager.officeNumber).toBe("62")
    });
});
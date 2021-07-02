const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("takes values from prompts", () => {
        const employee = new Employee("Lance", "26", "lance@gmail.com");

        expect(employee.name).toBe("Lance");
        expect(employee.id).toBe("26");
        expect(employee.email).toBe("lance@gmail.com")
    });
});
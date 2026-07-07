import { describe, expect, it } from "vitest";
import { Trainer } from "../../../src/domain/entities/trainer";

describe("Trainer entity", () => {
	it("should create a trainer with valid data", () => {
		const trainer = Trainer.create({ name: "Ash Ketchum" });

		expect(trainer.name).toBe("Ash Ketchum");
		expect(trainer.id).toBeDefined();
	});

	it("should not allow an empty name", () => {
		expect(() => Trainer.create({ name: "" })).toThrow("Name cannot be empty");
	});
});

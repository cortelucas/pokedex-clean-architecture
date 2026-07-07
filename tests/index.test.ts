import { expect, test } from "vitest";
import { Main } from "../src/index";

// test main class
test('Main class should return "Hello World"', async () => {
	// SUT
	const sut = new Main();
	// Act
	const result = await sut.execute();
	// Assert
	expect(result).toBe("Hello World");
	expect(typeof result).toBe("string");
});

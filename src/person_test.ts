/*
Demo test setup in Deno
*/

// Use import alias for deno std lib defined in deno.json
import { assertEquals } from "$std/assert/mod.ts";
// Import local module
import Person, { sayHello } from "./person.ts";

// Create test function
Deno.test("sayHello function", () => {
  const grace: Person = {
    lastName: "Hopper",
    firstName: "Grace",
  };

  assertEquals("Hello, Grace!", sayHello(grace));
});
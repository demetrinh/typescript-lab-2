import Greeter from "../src/greeter";

describe("test cases for greeter", () => {
  test("greet return greeting, name", () => {
    let greet: Greeter = new Greeter("Hello");
    let greetFunc: string = greet.greet("Bob");
    expect(greetFunc).toEqual("Hello, Bob!");
  });
  test("greet return different greeting and name", () => {
    let greet: Greeter = new Greeter("What's up");
    let greetFunc: string = greet.greet("Amber");
    expect(greetFunc).toEqual("What's up, Amber!");
  });
});

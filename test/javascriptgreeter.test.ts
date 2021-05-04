import JavaScriptGreeter from "../src/javascriptgreeter";

describe("test cases for JS greeter", () => {
  test("JSgreet", () => {
    let jsGreet: JavaScriptGreeter = new JavaScriptGreeter("Howdy");
    let greetFunc: string = jsGreet.greet("Zion");
    expect(greetFunc).toEqual("console.log('Howdy, Zion!')");
  });
  test("JSgreet", () => {
    let jsGreet: JavaScriptGreeter = new JavaScriptGreeter("What up doe");
    let greetFunc: string = jsGreet.greet("Sean");
    expect(greetFunc).toEqual("console.log('What up doe, Sean!')");
  });
});

import LoudGreeter from "../src/loudgreeter";

describe("loud tests", () => {
  test("loud with no func", () => {
    let loudg: LoudGreeter = new LoudGreeter("Good day");
    let greetFunc: string = loudg.greet("m'lord");
    expect(greetFunc).toEqual("Good day, m'lord!!");
  });
  test("calling the addVolume once", () => {
    let loudg: LoudGreeter = new LoudGreeter("Wassup");
    loudg.addVolume();
    let greetFunc: string = loudg.greet("Will");

    expect(greetFunc).toEqual("Wassup, Will!!!");
  });
  test("calling the addVolume multiple times", () => {
    let loudg: LoudGreeter = new LoudGreeter("Yoooo");
    loudg.addVolume();
    loudg.addVolume();
    loudg.addVolume();
    let greetFunc: string = loudg.greet("Kobe");

    expect(greetFunc).toEqual("Yoooo, Kobe!!!!!");
  });
});

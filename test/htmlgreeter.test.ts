import HtmlGreeter from "../src/htmlgreeter";

describe("html tests", () => {
  test("initial element", () => {
    let htmlg: HtmlGreeter = new HtmlGreeter("Hi");
    let greetFunc: string = htmlg.greet("Wayne");
    expect(greetFunc).toEqual("<h1>Hi, Wayne!</h1>");
  });
  test("new element", () => {
    let htmlg: HtmlGreeter = new HtmlGreeter("Hi");
    htmlg.tagName = "p";
    let greetFunc: string = htmlg.greet("Wayne");
    expect(greetFunc).toEqual("<p>Hi, Wayne!</p>");
  });
});

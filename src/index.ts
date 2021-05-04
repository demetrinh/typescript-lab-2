import Greeter from "./greeter";
import HtmlGreeter from "./htmlgreeter";
import JavaScriptGreeter from "./javascriptgreeter";
import LoudGreeter from "./loudgreeter";

function almightyGreeter(name: string): void {
  let greeter = new Greeter("Hello");
  let loudGreet = new LoudGreeter("Howdy");
  loudGreet.addVolume();
  loudGreet.addVolume();
  let jsGreeter = new JavaScriptGreeter("Sup");
  let htmlGreet = new HtmlGreeter("Hey");

  console.log(greeter.greet(name));
  console.log(loudGreet.greet(name));
  console.log(jsGreeter.greet(name));
  console.log(htmlGreet.greet(name));
}

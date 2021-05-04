import Greeter from "./greeter";

class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log('${super.greet(name)}')`;
  }
}

export default JavaScriptGreeter;

global.b = "test";

const child = require("./child");

console.log("child is: ", child);

console.log("__filename ", __filename);
console.log("__dirname ", __dirname);
console.log("process.cwd() ", process.cwd());

// Object process:
//
console.log("process.argv: ", process.argv);
// process.chdir();
console.log("__dirname ", __dirname);
process.exit(0);
// process.nextTick(fn)s

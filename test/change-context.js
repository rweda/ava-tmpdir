const test = require("ava");
const tmpdir = require("tmpdir");

tmpdir({
  path: "myPath",
  context: "someData",
});

test("uses alternative context variable for 'path'", t => {
  t.is(typeof t.context.myPath, "string");
});

test("uses alternative context variable for 'context'", t => {
  t.is(typeof t.context.someData.cleanup, "function");
});

let path = null;

test.serial("store path", t => {
  t.plan(0);
  path = t.context.myPath;
});

test.serial("old directory doesn't exist", t => {
  t.false(require("fs").existsSync(path));
});

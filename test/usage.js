const test = require("ava");
const tmpdir = require("tmpdir");
const { basename } = require("path");

tmpdir();

test("stores directory in context", t => {
  t.is(typeof t.context.tmp, "string");
});

test("directory includes 'tmp-' prefix", t => {
  const context = t.context;
  t.is(basename(context.tmp).indexOf("tmp-"), 0);
});

test("directory exists", t => {
  t.true(require("fs").existsSync(t.context.tmp));
});

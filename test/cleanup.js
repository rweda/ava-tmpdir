const test = require("ava");
const tmpdir = require("tmpdir");
const fs = require("fs");

tmpdir();

let path = null;

test.serial("store path", t => {
  t.plan(0);
  path = t.context.tmp;
});

test.serial("removes directory", t => {
  t.false(fs.existsSync(path));
});

test.serial("write file", t => {
  t.plan(0);
  path = t.context.tmp;
  fs.writeFileSync(`${path}/test.txt`, "Hello World");
});

test.serial("removes directory even with contents", t => {
  t.false(fs.existsSync(path));
});

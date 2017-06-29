const test = require("ava");
const tmpdir = require("tmpdir");

tmpdir();

let path = null;

test.serial("store path", t => {
  t.plan(0);
  path = t.context.tmp;
});

test.serial("old directory doesn't exist", t => {
  t.false(require("fs").existsSync(path));
});

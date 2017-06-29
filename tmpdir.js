const test = require("ava");
const tmp = require("tmp-promise");
const tmpDirOpts = require("./config");

/**
 * Creates AVA `beforeEach`/`afterEach` hooks to create and clean up temporary directories.
 * @param {Object} opts configuration options
*/
function hook(opts) {
  opts = tmpDirOpts.use(opts);
  test.beforeEach("creates a temporary directory", t => {
    return tmp
      .dir(opts.tmp)
      .then(d => {
        t.context[opts.context] = d;
        if(opts.path !== false) {
          t.context[opts.path] = d.path;
        }
      });
  });
  test.afterEach.always("cleans up temporary directory", t => {
    return t.context[opts.context].cleanup();
  });
}

module.exports = hook;

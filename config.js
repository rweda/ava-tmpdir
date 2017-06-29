const modconf = require("modconf");
const tmpOpts = require("./tmpdir-config");

module.exports = modconf
  .module("npm:@rweda/ava-tmpdir")
  // .option(tmpOpts, ...) See https://github.com/CodeLenny/modconf/issues/14
  .option(Object, "tmp", {
    description: "Configuration for the 'tmp' library",
    default: { "unsafeCleanup": true },
  })
  .option(String, "path", {
    description: "The AVA context variable to store the directories path in.  If 'false', the path is not saved.",
    default: "tmp",
  })
  .option(String, "context", {
    description: "The AVA context variable to store the cleanup function and other library options in.",
    default: "_tmpDir",
  });

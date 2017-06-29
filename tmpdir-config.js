const modconf = require("modconf");

module.exports = modconf
  .module("npm:@rweda/ava-tmpdir/tmpdir")
  .option(Boolean, "unsafeCleanup", {
    description: "recursively removes the created temporary directory, even when it's not empty.",
    default: false,
  });

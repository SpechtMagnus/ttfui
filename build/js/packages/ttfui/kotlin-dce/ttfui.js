(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ttfui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ttfui'.");
    }root.ttfui = factory(typeof ttfui === 'undefined' ? {} : ttfui, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  function main() {
    document.write('Hello, world!');
  }
  _.main = main;
  main();
  return _;
}));

//# sourceMappingURL=ttfui.js.map

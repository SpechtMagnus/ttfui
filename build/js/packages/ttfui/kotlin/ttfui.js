(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-dom', 'kotlin-react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ttfui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ttfui'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'ttfui'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'ttfui'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'ttfui'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'ttfui'.");
    }root.ttfui = factory(typeof ttfui === 'undefined' ? {} : ttfui, kotlin, this['kotlin-react-dom'], this['kotlin-react']);
  }
}(this, function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_react.react.RComponent;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  Lendingpage.prototype = Object.create(RComponent.prototype);
  Lendingpage.prototype.constructor = Lendingpage;
  Mainpage.prototype = Object.create(RComponent.prototype);
  Mainpage.prototype.constructor = Mainpage;
  Searchpage.prototype = Object.create(RComponent.prototype);
  Searchpage.prototype.constructor = Searchpage;
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function App() {
    RComponent_init(this);
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('Hallo Welt');
    $receiver.child_2usv9w$($receiver_0.create());
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_bzgiuu$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function Lendingpage() {
    RComponent_init(this);
  }
  Lendingpage.prototype.render_ss14n$ = function ($receiver) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Lendingpage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lendingpage',
    interfaces: [RComponent]
  };
  function Mainpage() {
    RComponent_init(this);
  }
  Mainpage.prototype.render_ss14n$ = function ($receiver) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Mainpage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mainpage',
    interfaces: [RComponent]
  };
  function Searchpage() {
    RComponent_init(this);
  }
  Searchpage.prototype.render_ss14n$ = function ($receiver) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Searchpage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Searchpage',
    interfaces: [RComponent]
  };
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  _.App = App;
  _.main = main;
  var package$pages = _.pages || (_.pages = {});
  package$pages.Lendingpage = Lendingpage;
  package$pages.Mainpage = Mainpage;
  package$pages.Searchpage = Searchpage;
  main();
  Kotlin.defineModule('ttfui', _);
  return _;
}));

//# sourceMappingURL=ttfui.js.map

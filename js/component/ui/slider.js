define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(imageContent);

  function imageContent() {

    this.after('initialize', function () {
      this.on(document, 'gallery:ImageReady', function (e, data) {
        this.node.style.background = data.imageurl;
      });
    });
  }
});

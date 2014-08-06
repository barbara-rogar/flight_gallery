define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(imageContent);

  function imageContent() {

    this.after('initialize', function () {
      this.on(document, 'dataImage', function (e, data) {
                                        this.node.style.background = data.imageurl;
                                        this.trigger('buttonsNeedNewValue',{number: data.number});
                                      });
    });
  }
});

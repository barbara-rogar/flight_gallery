define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(imageContent);

  function imageContent() {
    this.setImage = function (e, data) {
      //this.$node.style.background = data.imageurl;
      document.getElementById("imageslider").style.background = data.imageurl;
    }

    this.after('initialize', function () {
      this.on(document, 'dataImage', this.setImage);
    });
  }
});

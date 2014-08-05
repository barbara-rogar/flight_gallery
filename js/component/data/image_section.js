define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');
  
  return defineComponent(image);

  function image() {
    this.changeSection = function (e, data) {
      this.trigger('dataImage', {
        number: data.number,
        imageurl: "url('images/image_" + data.number + ".jpg')"
      });
    }

    this.after('initialize', function () {
      this.on('sliderNeedsNextImage', this.changeSection);
    });
  }
});


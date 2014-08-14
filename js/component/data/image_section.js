define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');
  
  return defineComponent(image);

  function image() {

    this.after('initialize', function () {
      var currentImage = 1;
      this.on('gallery:Move', function (e, data) {
        currentImage = currentImage+parseInt(data.offset);
        if (parseInt(currentImage) == 5) {
          currentImage = 1;
        }
        if (parseInt(currentImage)==0) {
          currentImage = 4;
        }
        this.trigger('gallery:ImageReady', {
          imageurl: "url('images/image_" + (parseInt(currentImage)) + ".jpg')"
        });
      });
    });
  }
});


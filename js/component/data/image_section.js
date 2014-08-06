define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');
  
  return defineComponent(image);

  function image() {

    this.after('initialize', function () {
      this.on('sliderNeedsNextImage', function (e, data) {
                                        if (data.number == 4) {
                                          data.number = 0;
                                        }
                                        this.trigger('dataImage', {
                                          number: parseInt(data.number)+1,
                                          imageurl: "url('images/image_" + (parseInt(data.number)+1) + ".jpg')"
                                        });
                                      });
      this.on('sliderNeedsPreviousImage', function (e, data) {
                                        if (data.number == 1) {
                                          data.number = 5;
                                        }
                                        this.trigger('dataImage', {
                                          number: parseInt(data.number)-1,
                                          imageurl: "url('images/image_" + (parseInt(data.number)-1) + ".jpg')"
                                        });
                                      });
    });
  }
});


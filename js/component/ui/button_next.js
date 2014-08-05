define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(nextImage);

  function nextImage() {
    this.defaultAttrs({
      itemSelector: '.button_next'
    });

    this.requestImageChange = function (e) {
      this.trigger('sliderNeedsNextImage', {
        number: 2  //TODO get number from hidden value on this button (consider using something other than button)
      });
    }

    this.after('initialize', function () {
      this.on('click', {
        itemSelector: this.requestImageChange
      });
      
    });
  }
});

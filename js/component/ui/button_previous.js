define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(previousImage);

  function previousImage() {
    this.defaultAttrs({
      itemSelector: '.button_previous'
    });

    this.requestImageChange = function (e) {
      this.trigger('sliderNeedsNextImage', {
        number: 1  //TODO get number from hidden value on this button (consider using something other than button)
      });
    }

    this.after('initialize', function () {
      this.on('click', {
        itemSelector: this.requestImageChange
      });
      
    });
  }
});

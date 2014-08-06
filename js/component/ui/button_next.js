define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(nextImage);

  function nextImage() {
    this.defaultAttrs({
      itemSelector: '.button_next'
    });


    this.after('initialize', function () {
      this.on('click', {
        itemSelector: function (e) {
                        this.trigger('sliderNeedsNextImage', {
                          number: this.node.value
                        });
                      }
      });
      
      this.on(document, 'buttonsNeedNewValue',function(e,data){
                                       this.node.value = data.number;
                                    });
    });
  }
});

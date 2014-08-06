define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(previousImage);

  function previousImage() {
    this.defaultAttrs({
      itemSelector: '.button_previous'
    });

    
    this.after('initialize', function () {
      this.on('click', {
        itemSelector: function (e) {
                        this.trigger('sliderNeedsPreviousImage', {
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

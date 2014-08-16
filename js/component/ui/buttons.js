define(function (require) {


  var defineComponent = require('flight/lib/component'),
      markup = require('text!button.html'); // PROBLEM

  return defineComponent(nextImage);

  function nextImage() {
    this.defaultAttrs({
      $itemSelectorPrev: '.button_previous',
      $itemSelectorNext: '.button_next'
    });


    this.after('initialize', function () {
      this.$node.html(markup);
      
      this.on('click', {
        $itemSelectorPrev: function (e) {
          this.trigger('gallery:Move', {
            offset: -1,
            text: "Previous"
          });
        },
     
        $itemSelectorNext: function (e) {
          this.trigger('gallery:Move', {
            offset: 1,
            text: "Next"
          });
        }
      });
    });
  }
});

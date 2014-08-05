define(function (require) {
  
  var buttonNextUI = require('component/ui/button_next');
  var buttonPreviousUI = require('component/ui/button_previous');
  var imageContentUI = require('component/ui/image_content');
  var sliderImageData = require('component/data/image_section');

  function initialize() {    
    buttonNextUI.attachTo('.button_next');
    buttonPreviousUI.attachTo('.button_previous');
    imageContentUI.attachTo('.imageslider');
    sliderImageData.attachTo(document);
  }
  
  return initialize;
});

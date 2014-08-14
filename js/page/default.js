define(function (require) {
  
  var buttonsUI = require('component/ui/buttons');
  var imageContentUI = require('component/ui/slider');
  var sliderImageData = require('component/data/image_section');

  function initialize() {    
    buttonsUI.attachTo('.btn');
    imageContentUI.attachTo('.imageslider');
    sliderImageData.attachTo(document);
  }
  
  return initialize;
});

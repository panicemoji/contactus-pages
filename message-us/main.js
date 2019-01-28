function doResize(event, ui) {
  
  var scale, origin;
    
  scale = Math.min(
    ui.size.width / 600,    
    ui.size.height / 1900
  );
  
  $('.circle').css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });
  
}

var starterData = { 
  size: {
    width: $('.container').width(),
    height: $('.container').height()
  }
}
doResize(null, starterData);
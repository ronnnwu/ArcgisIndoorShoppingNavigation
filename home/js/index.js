(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
    $(".hidd_chat").fadeToggle( "fast");
  });
})();

function like_bn(){ 
	$('.badge_0_badge').text("1");
} 

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
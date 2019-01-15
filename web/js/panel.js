function toggleSidebar(){
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('homea').classList.toggle('active');
    document.getElementById('eventosa').classList.toggle('active');
    document.getElementById('configa').classList.toggle('active');
    document.getElementById('salira').classList.toggle('active');
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activate");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

$('#desdedate').dateDropper();
$('#hastadate').dateDropper();

 //GRID DASHBOARD
 var elem = document.querySelector('.grid');
 var pckry = new Packery( elem, {
  itemSelector: '.grid-item',
  gutter: '.gutter-sizer',
  percentPosition: true
 });

 var draggies = [];
 var isDrag = false;
 
 pckry.getItemElements().forEach( function( itemElem ) {
   var draggie = new Draggabilly( itemElem );
   pckry.bindDraggabillyEvents( draggie );
   draggie.disable();
   draggies.push( draggie );
 });
 
 
 var toggleDragButton = document.querySelector('.toggle-drag-button');
 toggleDragButton.addEventListener( 'click', function() {
   var method = isDrag ? 'disable' : 'enable';
   if (method == 'enable') {
    this.style.backgroundColor = "#26c281";
   }else if(method == 'disable'){
    this.style.backgroundColor = "#cf000f";
   }
   
   draggies.forEach( function( draggie ) {
     draggie[ method ]();
   });
   // switch flag
   isDrag = !isDrag;
 });

 
  //LOADER
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
    console.log('pagina cargada!');
});
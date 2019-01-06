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
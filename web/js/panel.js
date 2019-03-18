//LOADER
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
  console.log('pagina cargada!');
});

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

var eventoscardsall = $('#allevents')

eventosRestClient.exportListEvent()
  .then(events => {
    events.forEach(function(event){
      var titulo = event.title;
      eventoscardsall.append('<div class="cardsevents"> <div class="titulocard"><h4>'+titulo+'</h4></div> <div class="imgcontentcard"> <img class="imgcard" src="'+event.urlImage+'"></div> <div class="btncardbot"> <button class="editbtn" ><i class="fas fa-pen"></i></button> <button class="editbtn" ><i class="fas fa-check"></i></button> <button class="editbtn" ><i class="fas fa-trash"></i></button>  <div></div> </div>')
      console.log(titulo);
    })
  }).catch(function(err) {
    console.log(err);
  })


/*axios.get('https://sustentatemiddleware-generous-bonobo.mybluemix.net/events')
  .then(function(res) {
    if(res.status==200) {
      res.data.forEach(function(eventos){
        var titulo = eventos.title;
        eventoscardsall.append('<div class="cardsevents"> <div class="titulocard"><h4>'+titulo+'</h4></div> <div class="imgcontentcard"> <img class="imgcard" src="https://source.unsplash.com/random"></div> <div class="btncardbot"> <button class="editbtn" ><i class="fas fa-pen"></i></button> <button class="editbtn" ><i class="fas fa-check"></i></button> <button class="editbtn" ><i class="fas fa-trash"></i></button>  <div></div> </div>')
        console.log(titulo);
      })
    }
  })
  
*/

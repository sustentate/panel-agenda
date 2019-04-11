//LOADER
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
  console.log('pagina cargada!');
});

/* function toggleSidebar(){
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('homea').classList.toggle('active');
    document.getElementById('eventosa').classList.toggle('active');
    document.getElementById('configa').classList.toggle('active');
    document.getElementById('salira').classList.toggle('active');
} */

$('document').ready(function() {

$('#collapse-toggle').on('click', function(e) {
  localStorage.setItem('menu-closed', !$('#sidebar').hasClass('collapsed'));
  $('#sidebar').toggleClass('collapsed');
  $('#homea').toggleClass('desactive');
  $('#eventosa').toggleClass('desactive');
  $('#configa').toggleClass('desactive');
  $('#salira').toggleClass('desactive');
});
 
// Code responsible for reading the state of the menu out of localStorage
var state = localStorage.getItem('menu-closed');

// When localStorage is not set, open the menu.
if (state === null) {
  
  $('#sidebar').removeClass('collapsed');
  $('#homea').removeClass('desactive');
  $('#eventosa').removeClass('desactive');
  $('#configa').removeClass('desactive');
  $('#salira').removeClass('desactive');
  
} else {
  
  // When localStorage is set, Save the state to the variable closed
  // Here set closed to a boolean true/false value instead of a string "true" or "false"      	
  var closed = state === "true" ? true : false;
  console.log(closed);
  // When the state of the menu is not closed, remove the collapsed class from the sidebar.
  if (!closed) {
    $('#sidebar').removeClass('collapsed');
    $('#homea').removeClass('desactive');
    $('#eventosa').removeClass('desactive');
    $('#configa').removeClass('desactive');
    $('#salira').removeClass('desactive');
  }
}
});
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

//Input
//function validateEventJS(){
//    var errores: 0;
//    if(!$('#descev').val()){
//        errores++    
//    }
//    if(!$('#link').val()){
//        errores++
//    }
//    if(!$('#address').val()){
//        errores++
//    }
//    if(!$('#precio').val()){
//        errores++
//    }
//    if(errores){
//        event.preventDefault()
//        console.log(errores);
//        return false;    
//    }else{
//        return true;
//    }
//}


var eventoscardsall = $('#allevents')

// GET EVENTOS
eventosRestClient.exportListEvent()
  .then(events => {
    $.each(events, function(i) {
      var arrayDt = [];
      arrayDt[i] = { 
          "id" : this.id,
          "name" : this.title,
          "description" : this.description,
          "link" : this.link,
          "published" : this.published,
          "promoted" : this.promoted,
          "address" : this.address,
          "startDate" : this.startDateTime,
          "precio" : this.price,
          "type" : this.type
      };
      console.log(arrayDt[i]);
      eventoscardsall.append('<div class="cardsevents"> <div class="titulocard" id="tituloeventsc'+i+'"><h4>'+arrayDt[i].name+'</h4></div> <div class="imgcontentcard"> <div class="esqback"></div> <img class="imgcard" src="https://source.unsplash.com/random"></div> <div class="btncardbot"> <button id="bt_'+i+'" class="editbtn" ><i class="fas fa-pen"></i></button> <button id="pub_'+i+'" class="editbtn" ><i class="fas fa-check"></i></button> <button id="dlt_'+i+'" class="editbtn" ><i class="fas fa-trash"></i></button>  <div></div> </div>')
      if(arrayDt[i].published){
        $('#tituloeventsc'+i).append("<span class='spanevent subido'><i class='fas fa-check-circle'></i></span>");
      }else{
        $('#tituloeventsc'+i).append("<span class='spanevent nosubido'><i class='fas fa-times'></i></span>");
      }
      //$("#show_test").append("<div><a id='bt_"+i+"'>click"+arrayDt[i].name+"</a></div>");
      $("#bt_"+i).click(function(){
        show_data(arrayDt[i]);
      });
      $("#dlt_"+i).click(function(){
        delete_event(arrayDt[i]);
      });
      $("#pub_"+i).click(function(){
        pub_event(arrayDt[i]);
      });
      
  });

  tippy('.subido', {
    content: "Este evento esta publicado!",
  })
  tippy('.nosubido', {
    content: "Este evento aun NO esta publicado!",
  })
    /* events.forEach(function(event){
      var titulo = event.title;
      var ids = event.id;
      eventoscardsall.append('<div class="cardsevents"> <div class="titulocard"><h4>'+titulo+'</h4></div> <div class="imgcontentcard"> <img class="imgcard" src="https://source.unsplash.com/random"></div> <div class="btncardbot"> <button id="editf" onclick="editarevento('+ids+')" class="editbtn" ><i class="fas fa-pen"></i></button> <button class="editbtn" ><i class="fas fa-check"></i></button> <button class="editbtn" ><i class="fas fa-trash"></i></button>  <div></div> </div>')
      console.log(titulo);
      console.log(ids);
    }) */
  }).catch(function(err) {
    console.log(err);
  })

  
//ALERT Y APPEND DATA EN VALUES FORM
  function show_data(data){
    /* alert(JSON.stringify(data)); */
    document.getElementById("evname").setAttribute('value', data.name);
    $('#descev').val(data.description);
    $('#link').val(data.link);
    $('#address').val(data.address);
    $('#precio').val(data.precio);
    
}
//PUBLICA EVENTO

function pub_event(data){
  let eventodata = JSON.stringify(data);
  swal({
    title: "¿Deseas Publicar el evento " + data.name + "?",
    text: eventodata,
    icon: "info",
    buttons: true,
    closeOnClickOutside: false
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("El evento fue publicado correctamente", {
        icon: "success",
      });
    } else {
      swal("El evento no fue publicado");
    }
  });
}

var errores = 0;
//POST EVENTOS
$( "#btnsubmitevent" ).click(function(e) {
  e.preventDefault();
  $('#loadingpost').show();
  $('#loadpost').css( "flex-direction", "column-reverse" );
  let titulo = $('#evname').val();
  let descripcion = $('#descev').val();
  let linked = $('#link').val();
  let direccion = $('#address').val();
  let precio = $('#precio').val();
  if(!titulo){
    errores++;
  }
  if(!descripcion){
    errores++;
  }
  if(!linked){
    errores++;
  }
  if(!direccion){
    errores++;
  }
  if(!precio){
    errores++;
  }
  if(errores == 0){
      var eventonuevo = 
    {
      "title": titulo,
      "description": descripcion,
      "published": true,
      "price": precio,
      "link": linked,
      "type": "festival",
      "contact": null,
      "address": direccion,
      "startDateTime" : 12232132
    }
    
    console.log(eventonuevo)
    eventosRestClient.createEvent(eventonuevo)
    .then(function (response) {
      $('#loadingpost').hide();
      swal({
        text: "El evento fue subido correctamente, se actualizara la pagina!",
        icon: "success"
      })
        .then(() => {
          location.reload();
        });
      console.log(response.statusText);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }else{
    swal("Todos los campos deben estar completos")
    .then(() => {
      $('#loadingpost').hide();
      $('#loadpost').css( "flex-direction", "row" );
      errores = 0;
    });
    
  } 
   
});

//DELETE EVENTOS

function delete_event(data){
  console.log(data.id)
  swal({
    title: "Eliminar Evento",
    text: "Deseas eliminar el evento " + data.name + " ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    closeOnClickOutside: false,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("El evento fue eliminado correctamente!", {
        icon: "success",
      });
    } else {
      swal("Decidiste no eliminar el evento");
    }
  });
}

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

'use strict';

var pokemonName = document.getElementById('name');
var picture = document.getElementById('picture');
var num = document.getElementById('num');
var type= document.getElementById('type');



function requestInfo(number) {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + number + '/', true);
  request.addEventListener('load', function(){
    refreshWeb(request);
  });
  request.addEventListener('error', function() {
    console.log('Error al tratar de conectarse con el servidor');
  });
  request.send();
}


function refreshWeb(request){
  if(request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var container = document.querySelector('.cards-container');
    var pokemonCard = '';
    pokemonCard += '<div class="one-card"><p><img src="' + data.sprites.front_default +'"><img src="' + data.sprites.back_default +'"></p>' ;
    pokemonCard += '<p>Nombre: ' + data.name +'</p>';
    pokemonCard += '<p>Nº: ' + data.id +'</p>';
    pokemonCard += '<p>Peso: ' + data.weight +'</p>';
    var types = data.types;
    if(types.length === 1){
      pokemonCard += '<p>Tipo: ' + types[0].type.name +'</p></div>';
    } else {
      pokemonCard += '<p>Tipo: ' + types[0].type.name + ' / ' + types[1].type.name +'</p></div>';
    }
    container.innerHTML += pokemonCard;
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
}
for (var i = 1; i <= 5; i++) {
  requestInfo(i);
}

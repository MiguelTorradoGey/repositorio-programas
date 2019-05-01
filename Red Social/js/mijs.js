'use strict'

var nom = "admin";
var contr = "1111";
var datoSI = "";
var datoNO = "";
var guardar =[];
var siGusta =[];
var noGusta =[];
var accModificar = "";
var borrar = "";

function comprobacion()
{
  if (nom == nombre.value && contr == contrasena.value)
   {
    window.open("pagina1.html","_self");
   }
   else
   {
    alert("El usuario no existe");
   }
  focusindex();
}

function muestraMensaje(){
  var mostrar="";
  guardar.forEach(function(item,index){
  // mostrar += "<div class='coment'>" + item + "<br><br><p class='opinionComen'>Dime si te gusta</p><p><button id='daleSI' class='btnLike' onclick='siLike(datoSI="+index+")'>SI</button><button class='btnNoLike' onclick=''>NO</button><i class='fa fa-check-circle verde'><label> "+siGusta[i]+" </label></i> Me gusta<i class='fa fa-times-circle rojo'><label> "+noGusta[i]+" </label></i> No me gusta     <span style='font-size:30px;'>&#x1F603 &#x1F614<span>    </p></div><br>";
  if(isNaN(siGusta[index])){
    siGusta[index]=0;
    noGusta[index]=0;
  }
// https://es.stackoverflow.com/questions/68719/boton-cerrar-en-un-div-con-video
  mostrar += "<div class='coment'>";
  if(accModificar == true){
  mostrar += "<div class='eliminaComentario'><button type='button' onclick='eliminaMensaje(borrar="+index+")' data-dismiss='modal'>&times</button></div>";
  } else {
    mostrar += "<div class='eliminaComentario'><button type='button' onclick='eliminaMensaje(borrar="+index+")' disabled='true' data-dismiss='modal'>&times</button></div>";
    }
  mostrar += "<span style='margin-right:15px'>&#x1F464</span>" + item ;
  mostrar += "<p>";
  mostrar += "<button class='btnLike' onclick='siLike(datoSI="+index+")' alt='boton me gusta'><i class='fas fa-thumbs-up'></i> Si me gusta </button>";
  mostrar += "<button class='btnNoLike' onclick='noLike(datoNO="+index+")' alt='boton no me gusta'><i class='fas fa-thumbs-down'></i> No me gusta </button>";
  if(siGusta[index]==0 && noGusta[index]==0){
    mostrar += "<span style='font-size:25px;' title='Pulsa me gusta o no me gusta'>&#x1F914<label style='font-size:15px;'> dime si te gusta</label></span>";
  }
  if(siGusta[index] > 0){
    mostrar += "<span style='font-size:20px;' alt='tiene"+siGusta[index]+"me gusta'>&#x1F603 "+siGusta[index]+"</span>";
  }
  if(noGusta[index] > 0){
    mostrar += "<span style='font-size:20px;'alt='tiene"+noGusta[index]+"me no gusta'>&#x1F614 "+noGusta[index]+"</span>";
  }
  mostrar += "</p></div>";
  });
  document.getElementById("comentario").innerHTML = mostrar;
  focuspagina1();
}

function agregar()
{
  var texto = document.getElementById("tarea").value;
  if (texto == "")
  {
    alert("Introduce un comentario");
    focuspagina1();
  }
  else
  {
    texto = texto.replace(/\n/g, "<br>");
    guardar.push(texto);
    muestraMensaje();
  }
}

function eliminaMensaje(borrar){
  if(accModificar == true){
  guardar[borrar] = "El mensaje ha sido eliminado";
  siGusta[borrar] = "";
  noGusta[borrar] = "";
  muestraMensaje();
} else {
  alert("Debe ser administardor para modificar comentarois");
}
}
function siLike(datoSI){
   siGusta[datoSI]++;
   muestraMensaje();
}
function noLike(){
  noGusta[datoNO]++;
  muestraMensaje();
}

function focusindex()
{
  $("#nombre").val("");
  $("#contrasena").val("");
  document.getElementById("nombre").focus();
}

function focuspagina1()
{
  $("#tarea").val("");
  document.getElementById("tarea").focus();
}
function modificacionComentarios(){
  var contrasenaModificar = prompt("Debe introducir su contraseña para modificar comentarios:", "");
  if (contrasenaModificar == null) {
      alert("Has cancelado la operación");
      }
  if(contr == contrasenaModificar && contrasenaModificar != null){
    accModificar = true;
    muestraMensaje();
  } else {
    if(contr != contrasenaModificar && contrasenaModificar != null){
    alert("tu clave no es válida");
    modificacionComentarios();
    }
  }
}

$(document).ready(function(){
  $(".modificarComentario").click(function(){
    modificacionComentarios();
  });
  $(".salirAdministrador").click(function(){
    accModificar = false;
    muestraMensaje();
    alert("Ya no esta como administrador");
  });
});

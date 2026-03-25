console.log("aqui estoy, si que estoy")

const boton = document.getElementById("btnCalcular");

const nombre = document.getElementById("nombreUsuario").value;

const htmlMarcado = document.getElementById("html").checked;

document.getElementById("resultado").style.display="block"

boton.addEventListener("click",function(){
    console.log("clic en el boton");
})

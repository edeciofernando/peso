// Cria referência aos elementos da página
var video = document.getElementById('video')
var canvas = document.getElementById('canvas')
var btHabilitar = document.getElementById('btHabilitar')
var btCapturar = document.getElementById('btCapturar')
var btConverter = document.getElementById('btConverter')
var imFoto = document.getElementById('imagem')

var context = canvas.getContext('2d')

function habilitarCamera() {

    // Obtém acesso à câmera...
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // se usuário autorizar acesso à câmera...
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.style.visibility = "visible"   // para quando estiver oculta
            video.srcObject = stream
            video.play()            
        })
    }
}
btHabilitar.addEventListener('click', habilitarCamera)

function converterFoto() {
    //var image = new Image();
	//image.src = canvas.toDataURL("image/png");

    imFoto.value = canvas.toDataURL("image/png")
}
btConverter.addEventListener('click', converterFoto)

function capturarFoto() {
   context.drawImage(video, 0, 0, 320, 240)
   // pausa e esconde a câmera 
   video.pause()
   video.style.visibility = "hidden"   
}
btCapturar.addEventListener('click', capturarFoto)


/*
// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});
*/
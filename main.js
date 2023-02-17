var SpeechRecognition = window.webkitSpeechRecognition;
  
var escuta = new SpeechRecognition();

var caixaTexto = document.getElementById("caixaTexto"); 

function start(){
    caixaTexto.innerHTML = ""; 
    console.log(escuta)
    escuta.start();
} 
 
escuta.onresult = (e)=>{
    var conteudo = e.results[0][0].transcript;
    caixaTexto.innerHTML = conteudo;
    if(conteudo =="tire minha selfie" ||conteudo =="tira minha selfie"  ){
        console.log("tirando selfie... ");
        falar();
    }
}


function falar(){

    var texto = "Tirando sua selfie em 5 segundos";
    var pronuncia = new SpeechSynthesisUtterance(texto);    

    var sintese = window.speechSynthesis;
    sintese.speak(pronuncia);

    Webcam.attach(camera);
    
    setTimeout(()=>{ 
        tirarFoto(); 
        salvar(); 
    }, 5000);

}
 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function tirarFoto(){
    Webcam.snap((uri)=>{
        imagem = '<img id="selfie_image" src="'+uri+'"/>'
        document.getElementById("result").innerHTML = imagem;
    });
}

function salvar(){
  image = document.getElementById("selfie_image").src;
  document.getElementById("link").href = image;
  link.click();
}
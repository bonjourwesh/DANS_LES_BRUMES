window.onload=function(){
      fonctionFondCooleur();
      fonctionTexteIntegral();
    }




var left = document.getElementById('rectangle_gauche');

var right = document.getElementById('rectangle_droit');
var bar = document.getElementById('dragbar');



const drag = (e) => {
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
  left.style.width = (e.pageX - bar.offsetWidth / 2) + 'px';

}

bar.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', drag);

});

bar.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', drag);
});



   ///////////////////////COULEUR CHARGEMENT//////////////////////////////////
    let cooleurFond = sessionStorage.getItem("cooleur");

function fonctionFondCooleur(){
  if (cooleurFond == "blanc"){
   document.querySelector('head > link').href = "./../ressource/style_fond_blanc.css"; 
  }else if (cooleurFond == "noir"){
    document.querySelector('head > link').href = "./../ressource/style_fond_noir.css"; 
  }else if (cooleurFond == null){
        document.querySelector('head > link').href = "./../ressource/style.css"; 
  }else{
       document.querySelector('head > link').href = "./../ressource/style.css"; 

  }
}



   ///////////////////////JOUR/NUIT//////////////////////////////////


function fonctionJour(style){
document.querySelector('head > link').href = "./../ressource/style_fond_blanc.css";
sessionStorage.setItem('cooleur', 'blanc');
}
function fonctionNuit(style){
document.querySelector('head > link').href = "./../ressource/style_fond_noir.css";
sessionStorage.setItem('cooleur', 'noir');}

function fonctionCouleur(style){
document.querySelector('head > link').href = "./../ressource/style.css";
sessionStorage.setItem('cooleur', 'couleur');}




   //////////////////////PRINT//////////////////////////////////



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("bouton_print");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

printPdf = function (pdfUrl) {
  if (!this.printedIframe) {
    this.printedIframe = document.createElement('iframe');
    document.body.appendChild(this.printedIframe);
    this.printedIframe.style.display = 'none';
    this.printedIframe.onload = function() {
      setTimeout(function() {
        this.printedIframe.focus();
        this.printedIframe.contentWindow.print();
      }, 100);
    };
  }
  this.printedIframe.src = pdfUrl;
}



function fonctionFull(){

    if ((document.querySelector(".pix_obj").style.maxWidth != "100%") || (document.querySelector(".pix_obj").style.maxHeight != "100%")){
     document.querySelector(".pix_obj").style.maxWidth = "100%";
     document.querySelector(".pix_obj").style.maxHeight = "100%";
     document.querySelector(".description_obj").style.display="none";

    }else{
     document.querySelector(".pix_obj").style.maxWidth = "20px";
     document.querySelector(".pix_obj").style.maxHeight = "50px";
    document.querySelector(".description_obj").style.display="block";    
    }
}



function togglePlayBistanclaque (e) {
  e = e || window.event;
  var btn = e.target;
  if (!audioBistanclaque.paused) {
    btn.classList.remove('active');
    document.getElementById('lettre_play').innerHTML = "Play";
    audioBistanclaque.pause();
    isPlaying = false;
  } else {
    btn.classList.add('active');
        document.getElementById('lettre_play').innerHTML = "Pause";
    audioBistanclaque.play();
    isPlaying = true;
  }
}



   ///////////////////////POSITION Petit texte//////////////////////////////////

function fonctionB1() {  // on met l'accent sur la cible de mouseover
document.getElementById("b1").style.display = "block";
}

function fonctionB1Leave() {  // on met l'accent sur la cible de mouseover
document.getElementById("b1").style.display = "none";
}

function fonctionB2() {  // on met l'accent sur la cible de mouseover
document.getElementById("b2").style.display = "block";
}

function fonctionB2Leave() {  // on met l'accent sur la cible de mouseover
document.getElementById("b2").style.display = "none";


}function fonctionB3() {  // on met l'accent sur la cible de mouseover
document.getElementById("b3").style.display = "block";
}

function fonctionB3Leave() {  // on met l'accent sur la cible de mouseover
document.getElementById("b3").style.display = "none";
}

$(function() {
 
  $('.bouton').mousemove(function(e) {
    var x = e.pageX;
    var y = e.pageY;
    var mid = $(window).height()/2;
    // var docHeight = $(document).height();

    var rMid = y - $(window).scrollTop();


    if(rMid<mid) {
      $('.texte_b').css('top', y+'px');
      $('.texte_b').css('bottom', 'auto');
    } else {
      $('.texte_b').css('top', 'auto');
      $('.texte_b').css('bottom', ($(window).height()-y+30)+'px');
    }

    $('.texte_b').css('left', x+'px');
  })

});




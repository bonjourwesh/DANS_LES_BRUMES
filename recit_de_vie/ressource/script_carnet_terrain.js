window.onload=function(){
      fonctionFondCooleur();
    }




var left = document.getElementById('rectangle_gauche');

var right = document.getElementById('rectangle_droit');
var bar = document.getElementById('dragbar');



const drag = (e) => {
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
  left.style.width = (e.pageX - bar.offsetWidth / 2) + 'px';
  right.style.width = (window.innerWidth - left.style.width) + 'px';
if (left.offsetWidth >800 && left.offsetWidth < 900){
    document.querySelector('.textwesh').style.fontSize = "1.3em";
    document.querySelector('.textwesh').style.lineHeight = "normal";

}else if(left.offsetWidth >900 && left.offsetWidth < 1000){
    document.querySelector('.textwesh').style.fontSize = "1.5em";
    document.querySelector('.textwesh').style.lineHeight = "normal";


}else if(left.offsetWidth >1000){
  document.querySelector('.textwesh').style.fontSize = "2em";
    document.querySelector('.textwesh').style.lineHeight = "normal";

}else{
  document.querySelector('.textwesh').style.fontSize = "1.1em";
    document.querySelector('.textwesh').style.lineHeight = "26px";
}


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


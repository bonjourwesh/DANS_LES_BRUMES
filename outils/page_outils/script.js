var left = document.getElementById('rectangle_gauche');
var right = document.getElementById('rectangle_droit');
var bar = document.getElementById('dragbar');
let cooleurFond = sessionStorage.getItem("cooleur");



const drag = (e) => {
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
  left.style.width = (e.pageX - bar.offsetWidth / 2) + 'px';
  right.style.width = (window.innerWidth - left.style.width) + 'px';
if (right.offsetWidth >800 && right.offsetWidth < 900){
    document.querySelector('#description').style.fontSize = "1.3em";
    document.querySelector('#description').style.lineHeight = "normal";
    document.querySelector('#text').style.fontSize = "2.7em";

}else if(right.offsetWidth >900 && right.offsetWidth < 1000){
    document.querySelector('#description').style.fontSize = "1.5em";
    document.querySelector('#description').style.lineHeight = "normal";
    document.querySelector('#text').style.fontSize = "2.4em";


}else if(right.offsetWidth >1000){
  document.querySelector('#description').style.fontSize = "2em";
    document.querySelector('#description').style.lineHeight = "normal";
    document.querySelector('#text').style.fontSize = "2em";

}else{
  document.querySelector('#description').style.fontSize = "1.1em";
    document.querySelector('#description').style.lineHeight = "26px";
        document.querySelector('#text').style.fontSize = "3em";

}



}

bar.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', drag);

});

bar.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', drag);
});



   ///////////////////////COULEUR CHARGEMENT//////////////////////////////////

function fonctionFondCooleur(){
  if (cooleurFond == "blanc"){
   document.querySelector('head > link').href = "style_fond_blanc.css"; 
  
  }else if (cooleurFond == "noir"){
    document.querySelector('head > link').href = "style_fond_noir.css"; 
  
  }else if (cooleurFond == null){
        document.querySelector('head > link').href = "style_page_outils.css"; 
  }else{
       document.querySelector('head > link').href = "style_page_outils.css"; 

  }
}


   ///////////////////////JOUR/NUIT//////////////////////////////////


function fonctionJour(style){
document.querySelector('head > link').href = "style_fond_blanc.css";
sessionStorage.setItem('cooleur', 'blanc');
}
function fonctionNuit(style){
document.querySelector('head > link').href = "style_fond_noir.css";
sessionStorage.setItem('cooleur', 'noir');}

function fonctionCouleur(style){
document.querySelector('head > link').href = "style_page_outils.css";
sessionStorage.setItem('cooleur', 'couleur');}





   //////////////////////PRINT//////////////////////////////////

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


   ///////////////////////APPARITION DISPARITION BOULE//////////////////////////////////


function fonctionApparitionBoule(){
  document.querySelector('#boule_noire').style.display="block";

}

function fonctionDisparitionBoule(){
  document.querySelector('#boule_noire').style.display="none";
}
let cooleurFond = sessionStorage.getItem("cooleur");




   ///////////////////////COULEUR CHARGEMENT//////////////////////////////////


function fonctionFondCooleur(){
  if (cooleurFond == "blanc"){
   document.querySelector('head > link').href = "style_fond_blanc.css"; 
  
  }else if (cooleurFond == "noir"){
    document.querySelector('head > link').href = "style_fond_noir.css"; 
  
  }else if (cooleurFond == null){
        document.querySelector('head > link').href = "style_recit_menu.css"; 
  }else{
       document.querySelector('head > link').href = "style_recit_menu.css"; 

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
document.querySelector('head > link').href = "style_recit_menu.css";
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

   //////////////////////DRAGBAR//////////////////////////////////


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



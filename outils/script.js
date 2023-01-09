let cooleurFond = sessionStorage.getItem("cooleur");




   ///////////////////////COULEUR CHARGEMENT//////////////////////////////////


function fonctionFondCooleur(){
  if (cooleurFond == "blanc"){
   document.querySelector('head > link').href = "style_fond_blanc.css"; 
  
  }else if (cooleurFond == "noir"){
    document.querySelector('head > link').href = "style_fond_noir.css"; 
  
  }else if (cooleurFond == null){
        document.querySelector('head > link').href = "outils_style.css"; 
  }else{
       document.querySelector('head > link').href = "outils_style.css"; 

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
document.querySelector('head > link').href = "outils_style.css";
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


   ///////////////////////POSITION PHOTO//////////////////////////////////

$(function() {
 
  $('.category').mousemove(function(e) {
    var x = e.pageX;
    var y = e.pageY;
    var mid = $(window).height()/2;
    // var docHeight = $(document).height();

    var rMid = y - $(window).scrollTop();


    if(rMid<mid) {
      $('.objlienh img').css('top', y+'px');
      $('.objlienh img').css('bottom', 'auto');
    } else {
      $('.objlienh img').css('top', 'auto');
      $('.objlienh img').css('bottom', ($(window).height()-y+30)+'px');
    }

    $('.objlienh img').css('left', x+'px');
  })

    $('.category').mousemove(function(e) {
    var x = e.pageX;
    var y = e.pageY;
    var mid = $(window).height()/2;
    // var docHeight = $(document).height();

    var rMid = y - $(window).scrollTop();


    if(rMid<mid) {
      $('.objlienv img').css('top', y+'px');
      $('.objlienv img').css('bottom', 'auto');
    } else {
      $('.objlienv img').css('top', 'auto');
      $('.objlienv img').css('bottom', ($(window).height()-y+30)+'px');
    }

    $('.objlienv img').css('left', x+'px');
  })
});

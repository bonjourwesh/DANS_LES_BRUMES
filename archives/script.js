let cooleurFond = sessionStorage.getItem("cooleur");




   ///////////////////////COULEUR CHARGEMENT//////////////////////////////////


function fonctionFondCooleur(){
  if (cooleurFond == "blanc"){
   document.querySelector('head > link').href = "style_fond_blanc.css"; 
  
  }else if (cooleurFond == "noir"){
    document.querySelector('head > link').href = "style_fond_noir.css"; 
  
  }else if (cooleurFond == null){
        document.querySelector('head > link').href = "style.css"; 
  }else{
       document.querySelector('head > link').href = "style.css"; 

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
document.querySelector('head > link').href = "style.css";
sessionStorage.setItem('cooleur', 'couleur');}


   ///////////////////////IMAGE POSITION RANDOM//////////////////////////////////

$(document).ready(function() {
  var bodyWidth = document.body.clientWidth-(300);
  var bodyHeight = document.body.clientHeight+(350);

  $('.random').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosY);
    $(img).css('left', randPosX);
    $(img).css('top', randPosY);

  });
});




  //////////////////////DRAG//////////////////////////////////

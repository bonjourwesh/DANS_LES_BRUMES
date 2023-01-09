window.onload=function(){
      fonctionFondCooleur();
      fonctionPasVisible();
    }


    ///////////////////////RESIZE///////////////////////////////////


function makeResizableDiv(div) {
  const element = document.querySelector('#gauche_haut');
  const droite_haut = document.querySelector('#droite_haut');
  const gauche_bas = document.querySelector('#gauche_bas');
  const droite_bas = document.querySelector('#droite_bas');
    const resizers = document.querySelectorAll(div + ' .resizer');
    let top_entete = document.querySelector('#entete').offsetHeight;
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  var largeur = window.innerWidth;
  var hauteur = window.innerHeight - top_entete;
  document.getElementById('droite_haut').style.top = top_entete + 'px';
  document.getElementById('droite_haut').style.height = (hauteur/2) + 'px';
  element.style.height = (hauteur/2) + 'px';
  element.style.top = top_entete + 'px';
  document.getElementById('droite_bas').style.height = (hauteur/2) + 'px';
  document.getElementById('gauche_bas').style.height = (hauteur/2) + 'px';
  document.getElementById('boite_credit').style.top = (((hauteur/4)*3)+ (top_entete/2)) + 'px';


  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));

      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;

      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    fonctionApparitionTxt()
})
    
    function resize(e) {
      if (currentResizer.classList.contains('bottom-right')) {
        const width = original_width + (e.pageX - original_mouse_x);
        const height = original_height + (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = (width) + 'px';
          droite_haut.style.width= (largeur - width) + 'px';
          gauche_bas.style.width = (width ) + 'px';
          droite_bas.style.width= (largeur - width) + 'px';

        fonctionApparitionTxt()

}
        if (height > minimum_size) {
          element.style.height = (height) + 'px';
          droite_haut.style.height = (height) + 'px';
          droite_bas.style.height = (hauteur - height) + 'px';
          gauche_bas.style.height = (hauteur - height) + 'px';
        fonctionApparitionTxt()

}
      }


    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }

fonctionApparitionTxt()
}

makeResizableDiv('.resizable')



////////////////////////////////////PAS LISIBLE SUR TEL/////////////////////////////
function fonctionPasVisible(){
  var largeur_ecran = window.innerWidth;

  if(largeur_ecran < 600){
    document.getElementById("corps").style.display ="none";
    document.getElementById("entete").style.display ="none";
    document.getElementById("invisible").style.display="block"
  }
  else{
    document.getElementById("corps").style.display ="block";
    document.getElementById("entete").style.display ="block";   
    document.getElementById("invisible").style.display="none"

  }
}


////////////////////////////////////APPARITION BOITE/////////////////////////////

function fonctionApparitionTxt() {
      let top_entete = document.querySelector('#entete').offsetHeight;
  var largeur = window.innerWidth;
  var hauteur = window.innerHeight - top_entete;
console.log(document.getElementById("gauche_bas").offsetHeight);
if(document.getElementById("gauche_bas").offsetHeight > ((hauteur/2)+50) && document.getElementById("gauche_bas").offsetWidth > ((largeur/2)+100)){
document.getElementById("txt_recit").style.display = "block";
document.getElementById("txt_lieu").style.display = "none";
document.getElementById("txt_savoir").style.display = "none";
document.getElementById("txt_outil").style.display = "none";
}
else if(document.getElementById("droite_haut").offsetHeight > ((hauteur/2)+50) && document.getElementById("droite_haut").offsetWidth > ((largeur/2)+100)){
document.getElementById("txt_recit").style.display = "none";
document.getElementById("txt_lieu").style.display = "none";
document.getElementById("txt_savoir").style.display = "block";
document.getElementById("txt_outil").style.display = "none";
}
else if(document.getElementById("droite_bas").offsetHeight > ((hauteur/2)+50) && document.getElementById("droite_bas").offsetWidth > ((largeur/2)+100)){
document.getElementById("txt_recit").style.display = "none";
document.getElementById("txt_lieu").style.display = "none";
document.getElementById("txt_savoir").style.display = "none";
document.getElementById("txt_outil").style.display = "block";
}
else if(document.getElementById("gauche_haut").offsetHeight > ((hauteur/2)+50) && document.getElementById("gauche_haut").offsetWidth > ((largeur/2)+100)){
document.getElementById("txt_recit").style.display = "none";
document.getElementById("txt_lieu").style.display = "block";
document.getElementById("txt_savoir").style.display = "none";
document.getElementById("txt_outil").style.display = "none";
}else{
document.getElementById("txt_recit").style.display = "none";
document.getElementById("txt_lieu").style.display = "none";
document.getElementById("txt_savoir").style.display = "none";
document.getElementById("txt_outil").style.display = "none";
}
}




  //////////////////////LA BOITE A LIEN//////////////////////////////////
function fermerLien(){
  document.getElementById("boite_lien").style.display = "none";
}

dragElement(document.getElementById("boite_lien"));
    

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header1")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header1").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





   ///////////////////////COULEUR CHARGEMENT//////////////////////////////////
let cooleurFond = sessionStorage.getItem("cooleur");


function fonctionFondCooleur(){
  if (cooleurFond == "blanc"){
   document.querySelector('head > link').href = "./style_fond_blanc.css"; 
  }else if (cooleurFond == "noir"){
    document.querySelector('head > link').href = "./style_fond_noir.css"; 
  }else if (cooleurFond == null){
        document.querySelector('head > link').href = "./style.css"; 
  }else{
       document.querySelector('head > link').href = "./style.css"; 

  }
}



   ///////////////////////JOUR/NUIT//////////////////////////////////


function fonctionJour(style){
document.querySelector('head > link').href = "./style_fond_blanc.css";
sessionStorage.setItem('cooleur', 'blanc');
}
function fonctionNuit(style){
document.querySelector('head > link').href = "./style_fond_noir.css";
sessionStorage.setItem('cooleur', 'noir');}

function fonctionCouleur(style){
document.querySelector('head > link').href = "./style.css";
sessionStorage.setItem('cooleur', 'couleur');}

   ///////////////////////BOITE POP UP/////////////////////////////////


function fonctionCharteContribution(){
  document.getElementById("charte_contribution").style.display = "block";
}

function fonctionFermerCharteContribution(){
  document.getElementById("charte_contribution").style.display = "none";
}

function fonctionHistoireVillage(){
  document.getElementById("histoire_village").style.display = "block";
}

function fonctionFermerHistoireVillage(){
  document.getElementById("histoire_village").style.display = "none";
}

function fonctionCredit(){
  document.getElementById("credit").style.display = "block";
}

function fonctionFermerCredit(){
  document.getElementById("credit").style.display = "none";
}
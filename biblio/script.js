var left = document.getElementById('rectangle_gauche');
var right = document.getElementById('rectangle_droit');
var bar = document.getElementById('dragbar');




const drag = (e) => {
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
  left.style.width = ((e.pageX - bar.offsetWidth / 2)-20) + 'px';
  right.style.width = (window.innerWidth - left.style.width) + 'px';
if (left.offsetWidth < 700){
  document.querySelector('#boite_txt_1').style.display = "none";
    document.querySelector('#boite_txt_2').style.display = "none";
  document.querySelector('#boite_txt_3').style.display = "none";
  document.querySelector('#boite_txt_4').style.display = "none";
  document.querySelector('#boite_txt_5').style.display = "none";
  document.querySelector('#boite_txt_6').style.display = "none";
  document.querySelector('#boite_txt_7').style.display = "none";
  document.querySelector('#boite_txt_8').style.display = "none";
  document.querySelector('#boite_txt_9').style.display = "none";
  document.querySelector('#boite_txt_10').style.display = "none";
  document.querySelector('#boite_txt_11').style.display = "none";
  document.querySelector('#boite_txt_12').style.display = "none";
  document.querySelector('#boite_txt_13').style.display = "none";
  document.querySelector('#boite_txt_14').style.display = "none";
  document.querySelector('#boite_txt_15').style.display = "none";
  document.querySelector('#boite_txt_16').style.display = "none";
  document.querySelector('#boite_txt_17').style.display = "none";
  document.querySelector('#boite_txt_18').style.display = "none";
  document.querySelector('#boite_txt_19').style.display = "none";
 document.querySelector('#boite_txt_20').style.display = "none";
  document.querySelector('#boite_txt_21').style.display = "none";
  document.querySelector('#boite_txt_22').style.display = "none";
  document.querySelector('#boite_txt_23').style.display = "none";
  document.querySelector('#boite_txt_24').style.display = "none";
  document.querySelector('#boite_txt_25').style.display = "none";
  document.querySelector('#boite_txt_26').style.display = "none";
  document.querySelector('#boite_txt_27').style.display = "none";
  document.querySelector('#boite_txt_28').style.display = "none";
  document.querySelector('#boite_txt_29').style.display = "none";
 document.querySelector('#boite_txt_30').style.display = "none";
  document.querySelector('#boite_txt_31').style.display = "none";
  document.querySelector('#boite_txt_32').style.display = "none";
  document.querySelector('#boite_txt_33').style.display = "none";
  document.querySelector('#boite_txt_34').style.display = "none";
  document.querySelector('#boite_txt_35').style.display = "none";
  document.querySelector('#boite_txt_36').style.display = "none";
  document.querySelector('#boite_txt_37').style.display = "none";
  document.querySelector('#boite_txt_38').style.display = "none";
  document.querySelector('#boite_txt_39').style.display = "none";
 document.querySelector('#boite_txt_40').style.display = "none";
  document.querySelector('#boite_txt_41').style.display = "none";
  document.querySelector('#boite_txt_42').style.display = "none";
  document.querySelector('#boite_txt_43').style.display = "none";
  document.querySelector('#boite_txt_44').style.display = "none";
  document.querySelector('#boite_txt_45').style.display = "none";
  document.querySelector('#boite_txt_46').style.display = "none";
  document.querySelector('#boite_txt_47').style.display = "none";
  document.querySelector('#boite_txt_48').style.display = "none";
  document.querySelector('#boite_txt_49').style.display = "none";
  document.querySelector('#boite_txt_50').style.display = "none";
    document.querySelector('#boite_txt_96').style.display = "none";
}
else{
   document.querySelector('#boite_txt_1').style.display = "inline-block";
   document.querySelector('#boite_txt_2').style.display = "inline-block";
   document.querySelector('#boite_txt_3').style.display = "inline-block";
   document.querySelector('#boite_txt_4').style.display = "inline-block";
   document.querySelector('#boite_txt_5').style.display = "inline-block";
   document.querySelector('#boite_txt_6').style.display = "inline-block";
   document.querySelector('#boite_txt_7').style.display = "inline-block";
   document.querySelector('#boite_txt_8').style.display = "inline-block";
   document.querySelector('#boite_txt_9').style.display = "inline-block";
   document.querySelector('#boite_txt_10').style.display = "inline-block";
   document.querySelector('#boite_txt_11').style.display = "inline-block";
   document.querySelector('#boite_txt_12').style.display = "inline-block";
   document.querySelector('#boite_txt_13').style.display = "inline-block";
   document.querySelector('#boite_txt_14').style.display = "inline-block";
   document.querySelector('#boite_txt_15').style.display = "inline-block";
   document.querySelector('#boite_txt_16').style.display = "inline-block";
   document.querySelector('#boite_txt_17').style.display = "inline-block";
   document.querySelector('#boite_txt_18').style.display = "inline-block";
   document.querySelector('#boite_txt_19').style.display = "inline-block";
   document.querySelector('#boite_txt_20').style.display = "inline-block";
   document.querySelector('#boite_txt_21').style.display = "inline-block";
   document.querySelector('#boite_txt_22').style.display = "inline-block";
   document.querySelector('#boite_txt_23').style.display = "inline-block";
   document.querySelector('#boite_txt_24').style.display = "inline-block";
   document.querySelector('#boite_txt_25').style.display = "inline-block";
   document.querySelector('#boite_txt_26').style.display = "inline-block";
   document.querySelector('#boite_txt_27').style.display = "inline-block";
   document.querySelector('#boite_txt_28').style.display = "inline-block";
   document.querySelector('#boite_txt_29').style.display = "inline-block";
   document.querySelector('#boite_txt_30').style.display = "inline-block";
   document.querySelector('#boite_txt_31').style.display = "inline-block";
   document.querySelector('#boite_txt_32').style.display = "inline-block";
   document.querySelector('#boite_txt_33').style.display = "inline-block";
   document.querySelector('#boite_txt_34').style.display = "inline-block";
   document.querySelector('#boite_txt_35').style.display = "inline-block";
   document.querySelector('#boite_txt_36').style.display = "inline-block";
   document.querySelector('#boite_txt_37').style.display = "inline-block";
   document.querySelector('#boite_txt_38').style.display = "inline-block";
   document.querySelector('#boite_txt_39').style.display = "inline-block";
   document.querySelector('#boite_txt_40').style.display = "inline-block";
   document.querySelector('#boite_txt_41').style.display = "inline-block";
   document.querySelector('#boite_txt_42').style.display = "inline-block";
   document.querySelector('#boite_txt_43').style.display = "inline-block";
   document.querySelector('#boite_txt_44').style.display = "inline-block";
   document.querySelector('#boite_txt_45').style.display = "inline-block";
   document.querySelector('#boite_txt_46').style.display = "inline-block";
   document.querySelector('#boite_txt_47').style.display = "inline-block";
   document.querySelector('#boite_txt_48').style.display = "inline-block";
   document.querySelector('#boite_txt_49').style.display = "inline-block";
   document.querySelector('#boite_txt_50').style.display = "inline-block";
      document.querySelector('#boite_txt_96').style.display = "inline-block";


 
}

if (right.offsetWidth < 700){
  document.querySelector('#boite_txt_51').style.display = "none";
  document.querySelector('#boite_txt_52').style.display = "none";
  document.querySelector('#boite_txt_53').style.display = "none";
  document.querySelector('#boite_txt_54').style.display = "none";
  document.querySelector('#boite_txt_55').style.display = "none";
  document.querySelector('#boite_txt_56').style.display = "none";
  document.querySelector('#boite_txt_57').style.display = "none";
  document.querySelector('#boite_txt_58').style.display = "none";
  document.querySelector('#boite_txt_59').style.display = "none";
  document.querySelector('#boite_txt_60').style.display = "none";
  document.querySelector('#boite_txt_61').style.display = "none";
  document.querySelector('#boite_txt_62').style.display = "none";
  document.querySelector('#boite_txt_63').style.display = "none";
  document.querySelector('#boite_txt_64').style.display = "none";
  document.querySelector('#boite_txt_65').style.display = "none";
  document.querySelector('#boite_txt_66').style.display = "none";
  document.querySelector('#boite_txt_67').style.display = "none";
  document.querySelector('#boite_txt_68').style.display = "none";
  document.querySelector('#boite_txt_69').style.display = "none";
  document.querySelector('#boite_txt_70').style.display = "none";
  document.querySelector('#boite_txt_71').style.display = "none";
  document.querySelector('#boite_txt_72').style.display = "none";
  document.querySelector('#boite_txt_73').style.display = "none";
  document.querySelector('#boite_txt_74').style.display = "none";
  document.querySelector('#boite_txt_75').style.display = "none";
  document.querySelector('#boite_txt_76').style.display = "none";
  document.querySelector('#boite_txt_77').style.display = "none";
  document.querySelector('#boite_txt_78').style.display = "none";
  document.querySelector('#boite_txt_79').style.display = "none";
    document.querySelector('#boite_txt_80').style.display = "none";
  document.querySelector('#boite_txt_81').style.display = "none";
  document.querySelector('#boite_txt_82').style.display = "none";
  document.querySelector('#boite_txt_83').style.display = "none";
  document.querySelector('#boite_txt_84').style.display = "none";
  document.querySelector('#boite_txt_85').style.display = "none";
  document.querySelector('#boite_txt_86').style.display = "none";
  document.querySelector('#boite_txt_87').style.display = "none";
  document.querySelector('#boite_txt_88').style.display = "none";
  document.querySelector('#boite_txt_89').style.display = "none";
    document.querySelector('#boite_txt_90').style.display = "none";
  document.querySelector('#boite_txt_91').style.display = "none";
  document.querySelector('#boite_txt_92').style.display = "none";
  document.querySelector('#boite_txt_93').style.display = "none";
  document.querySelector('#boite_txt_94').style.display = "none";
  document.querySelector('#boite_txt_95').style.display = "none";
  document.querySelector('#boite_txt_97').style.display = "none";
  document.querySelector('#boite_txt_98').style.display = "none";

}
else{
  document.querySelector('#boite_txt_51').style.display = "inline-block";
  document.querySelector('#boite_txt_52').style.display = "inline-block";
  document.querySelector('#boite_txt_53').style.display = "inline-block";
  document.querySelector('#boite_txt_54').style.display = "inline-block";
  document.querySelector('#boite_txt_55').style.display = "inline-block";
  document.querySelector('#boite_txt_56').style.display = "inline-block";
  document.querySelector('#boite_txt_57').style.display = "inline-block";
  document.querySelector('#boite_txt_58').style.display = "inline-block";
  document.querySelector('#boite_txt_59').style.display = "inline-block";
  document.querySelector('#boite_txt_60').style.display = "inline-block";
  document.querySelector('#boite_txt_61').style.display = "inline-block";
  document.querySelector('#boite_txt_62').style.display = "inline-block";
  document.querySelector('#boite_txt_63').style.display = "inline-block";
  document.querySelector('#boite_txt_64').style.display = "inline-block";
  document.querySelector('#boite_txt_65').style.display = "inline-block";
  document.querySelector('#boite_txt_66').style.display = "inline-block";
  document.querySelector('#boite_txt_67').style.display = "inline-block";
  document.querySelector('#boite_txt_68').style.display = "inline-block";
  document.querySelector('#boite_txt_69').style.display = "inline-block";
  document.querySelector('#boite_txt_70').style.display = "inline-block";
  document.querySelector('#boite_txt_71').style.display = "inline-block";
  document.querySelector('#boite_txt_72').style.display = "inline-block";
  document.querySelector('#boite_txt_73').style.display = "inline-block";
  document.querySelector('#boite_txt_74').style.display = "inline-block";
  document.querySelector('#boite_txt_75').style.display = "inline-block";
  document.querySelector('#boite_txt_76').style.display = "inline-block";
  document.querySelector('#boite_txt_77').style.display = "inline-block";
  document.querySelector('#boite_txt_78').style.display = "inline-block";
  document.querySelector('#boite_txt_79').style.display = "inline-block";
    document.querySelector('#boite_txt_80').style.display = "inline-block";
  document.querySelector('#boite_txt_81').style.display = "inline-block";
  document.querySelector('#boite_txt_82').style.display = "inline-block";
  document.querySelector('#boite_txt_83').style.display = "inline-block";
  document.querySelector('#boite_txt_84').style.display = "inline-block";
  document.querySelector('#boite_txt_85').style.display = "inline-block";
  document.querySelector('#boite_txt_86').style.display = "inline-block";
  document.querySelector('#boite_txt_87').style.display = "inline-block";
  document.querySelector('#boite_txt_88').style.display = "inline-block";
  document.querySelector('#boite_txt_89').style.display = "inline-block";
    document.querySelector('#boite_txt_90').style.display = "inline-block";
  document.querySelector('#boite_txt_91').style.display = "inline-block";
  document.querySelector('#boite_txt_92').style.display = "inline-block";
  document.querySelector('#boite_txt_93').style.display = "inline-block";
  document.querySelector('#boite_txt_94').style.display = "inline-block";
  document.querySelector('#boite_txt_95').style.display = "inline-block";
    document.querySelector('#boite_txt_97').style.display = "inline-block";
  document.querySelector('#boite_txt_98').style.display = "inline-block";

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








  //////////////////////BOITE BALLADE/////////////////////////////////


dragElement(document.getElementById("lien"));
    

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


function fonctionFermerTxtIntro(){
  document.getElementById("lien").style.display = "none";
}



window.onload=function(){
      fonctionFondCooleur();

      
    var player = document.getElementById("player");
    var button = document.getElementById("mediabutton");
    var audio = document.getElementById("audio");
    var marquee = document.getElementById("mediamarquee");

    var next = document.getElementById("next");
    var back = document.getElementById("back");
    audio.src = lien_audio[currentSong];

    button.addEventListener("click", function(){
      if(audio.paused){
        audio.play();
        button.style.opacity = '1';
        isplaying = true;
        marquee.innerHTML = playlist[currentSong];
        document.getElementById("play").innerHTML = "Pause";

      } else {
        audio.pause();
        button.style.opacity = '1';
       //marquee.innerHTML = 'Windows Media Player';
        isplaying = false;
      document.getElementById("play").innerHTML = "Play";
      }

    });




    next.addEventListener('click', function () {
        currentSong ++;
        if(currentSong >= playlist.length){
            currentSong = 0;
        }
        if(currentSong < playlist.length){
            console.log(currentSong);
            audio.src =lien_audio[currentSong];
            marquee.innerHTML = playlist[currentSong];
            if(isplaying){
                audio.play();
            }
            
        }
    });

    back.addEventListener('click', function () {
        currentSong --;
        if(currentSong < 0){
            currentSong = playlist.length-1;
        }
        if(currentSong < playlist.length){
            console.log(currentSong);
            audio.src =lien_audio[currentSong];
            marquee.innerHTML = playlist[currentSong];
            if(isplaying){
                audio.play();
            }

            
        }
    });

    audio.addEventListener('ended', function () {
        currentSong ++;
        if(currentSong >= playlist.length){
            currentSong = 0;
        }
        if(currentSong < playlist.length){
            console.log(currentSong);
            audio.src =lien_audio[currentSong];
            marquee.innerHTML = playlist[currentSong];
            if(isplaying){
                audio.play();
            }
            
        }
    });



}

let cooleurFond = sessionStorage.getItem("cooleur");




   ///////////////////////COULEUR CHARGEMENT//////////////////////////////////


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
document.querySelector('head > link').href = "./../style_fond_noir.css";
sessionStorage.setItem('cooleur', 'noir');}

function fonctionCouleur(style){
document.querySelector('head > link').href = "./../style.css";
sessionStorage.setItem('cooleur', 'couleur');}




   ///////////////////////AGRANDIR PHOTO//////////////////////////////////


function fonctionAgrandir1(){
      document.getElementById("img1").style.display = "block";
}

function fonctionFermer1(){
      document.getElementById("img1").style.display = "none";
            document.getElementById("video_1").pause();
}

function fonctionAgrandir2(){
      document.getElementById("img2").style.display = "block";
}

function fonctionFermer2(){
      document.getElementById("img2").style.display = "none";
            document.getElementById("video_2").pause();
  }

function fonctionAgrandir3(){
      document.getElementById("img3").style.display = "block";

}

function fonctionFermer3(){
      document.getElementById("img3").style.display = "none";
            document.getElementById("video_3").pause();
}

function fonctionAgrandir4(){
      document.getElementById("img4").style.display = "block";
}

function fonctionFermer4(){
      document.getElementById("img4").style.display = "none";
            document.getElementById("video_4").pause();
}

function fonctionAgrandir5(){
      document.getElementById("img5").style.display = "block";
}

function fonctionFermer5(){
      document.getElementById("img5").style.display = "none";
            document.getElementById("video_5").pause();
}

function fonctionAgrandir6(){
      document.getElementById("img6").style.display = "block";
}

function fonctionFermer6(){
      document.getElementById("img6").style.display = "none";
            document.getElementById("video_6").pause();
}

function fonctionAgrandir7(){
      document.getElementById("img7").style.display = "block";
}

function fonctionFermer7(){
      document.getElementById("img7").style.display = "none";
            document.getElementById("video_7").pause();
}

function fonctionAgrandir8(){
      document.getElementById("img8").style.display = "block";
}

function fonctionFermer8(){
      document.getElementById("img8").style.display = "none";
            document.getElementById("video_8").pause();
}

function fonctionAgrandir9(){
      document.getElementById("img9").style.display = "block";
}

function fonctionFermer9(){
      document.getElementById("img9").style.display = "none";
            document.getElementById("video_9").pause();
}

function fonctionAgrandir10(){
      document.getElementById("img10").style.display = "block";
}

function fonctionFermer10(){
      document.getElementById("img10").style.display = "none";
            document.getElementById("video_10").pause();
}

function fonctionAgrandir11(){
      document.getElementById("img11").style.display = "block";
}

function fonctionFermer11(){
      document.getElementById("img11").style.display = "none";
            document.getElementById("video_11").pause();
}

function fonctionAgrandir12(){
      document.getElementById("img12").style.display = "block";
}

function fonctionFermer12(){
      document.getElementById("img12").style.display = "none";
}

function fonctionAgrandir13(){
      document.getElementById("img13").style.display = "block";
}

function fonctionFermer13(){
      document.getElementById("img13").style.display = "none";
}

function fonctionAgrandir14(){
      document.getElementById("img14").style.display = "block";
}

function fonctionFermer14(){
      document.getElementById("img14").style.display = "none";
}

function fonctionAgrandir15(){
      document.getElementById("img15").style.display = "block";
}

function fonctionFermer15(){
      document.getElementById("img15").style.display = "none";
}

function fonctionAgrandir16(){
      document.getElementById("img16").style.display = "block";
}

function fonctionFermer16(){
      document.getElementById("img16").style.display = "none";
}

function fonctionAgrandir17(){
      document.getElementById("img17").style.display = "block";
}

function fonctionFermer17(){
      document.getElementById("img17").style.display = "none";
}

function fonctionAgrandir18(){
      document.getElementById("img18").style.display = "block";
}

function fonctionFermer18(){
      document.getElementById("img18").style.display = "none";
}

function fonctionAgrandir19(){
      document.getElementById("img19").style.display = "block";
}

function fonctionFermer19(){
      document.getElementById("img19").style.display = "none";
}

function fonctionAgrandir20(){
      document.getElementById("img20").style.display = "block";
}

function fonctionFermer20(){
      document.getElementById("img20").style.display = "none";
}

function fonctionAgrandir21(){
      document.getElementById("img21").style.display = "block";
}

function fonctionFermer21(){
      document.getElementById("img21").style.display = "none";
}

function fonctionAgrandir22(){
      document.getElementById("img22").style.display = "block";
}

function fonctionFermer22(){
      document.getElementById("img22").style.display = "none";
}

function fonctionAgrandir23(){
      document.getElementById("img23").style.display = "block";
}

function fonctionFermer23(){
      document.getElementById("img23").style.display = "none";
}

function fonctionAgrandir24(){
      document.getElementById("img24").style.display = "block";
}

function fonctionFermer24(){
      document.getElementById("img24").style.display = "none";
}

function fonctionAgrandir25(){
      document.getElementById("img25").style.display = "block";
}

function fonctionFermer25(){
      document.getElementById("img25").style.display = "none";
}

function fonctionAgrandir26(){
      document.getElementById("img26").style.display = "block";
}

function fonctionFermer26(){
      document.getElementById("img26").style.display = "none";
}

function fonctionAgrandir27(){
      document.getElementById("img27").style.display = "block";
}

function fonctionFermer27(){
      document.getElementById("img27").style.display = "none";
}

function fonctionAgrandir28(){
      document.getElementById("img28").style.display = "block";
}

function fonctionFermer28(){
      document.getElementById("img28").style.display = "none";
}

function fonctionAgrandir29(){
      document.getElementById("img29").style.display = "block";
}

function fonctionFermer29(){
      document.getElementById("img29").style.display = "none";
}

function fonctionAgrandir30(){
      document.getElementById("img30").style.display = "block";
}

function fonctionFermer30(){
      document.getElementById("img30").style.display = "none";
}

function fonctionAgrandir31(){
      document.getElementById("img31").style.display = "block";
}

function fonctionFermer31(){
      document.getElementById("img31").style.display = "none";
}

function fonctionAgrandir32(){
      document.getElementById("img32").style.display = "block";
}

function fonctionFermer32(){
      document.getElementById("img32").style.display = "none";
}

function fonctionAgrandir33(){
      document.getElementById("img33").style.display = "block";
}

function fonctionFermer33(){
      document.getElementById("img33").style.display = "none";
}

function fonctionAgrandir34(){
      document.getElementById("img34").style.display = "block";
}

function fonctionFermer34(){
      document.getElementById("img34").style.display = "none";
}

function fonctionAgrandir35(){
      document.getElementById("img35").style.display = "block";
}

function fonctionFermer35(){
      document.getElementById("img35").style.display = "none";
}

function fonctionAgrandir36(){
      document.getElementById("img36").style.display = "block";
}

function fonctionFermer36(){
      document.getElementById("img36").style.display = "none";
}

function fonctionAgrandir37(){
      document.getElementById("img37").style.display = "block";
}

function fonctionFermer37(){
      document.getElementById("img37").style.display = "none";
}

function fonctionAgrandir38(){
      document.getElementById("img38").style.display = "block";
}

function fonctionFermer38(){
      document.getElementById("img38").style.display = "none";
}

function fonctionAgrandir39(){
      document.getElementById("img39").style.display = "block";
}

function fonctionFermer39(){
      document.getElementById("img39").style.display = "none";
}

function fonctionAgrandir40(){
      document.getElementById("img40").style.display = "block";
}

function fonctionFermer40(){
      document.getElementById("img40").style.display = "none";
}

function fonctionAgrandir41(){
      document.getElementById("img41").style.display = "block";
}

function fonctionFermer41(){
      document.getElementById("img41").style.display = "none";
}

function fonctionAgrandir42(){
      document.getElementById("img42").style.display = "block";
}

function fonctionFermer42(){
      document.getElementById("img42").style.display = "none";
}

function fonctionAgrandir43(){
      document.getElementById("img43").style.display = "block";
}

function fonctionFermer43(){
      document.getElementById("img43").style.display = "none";
}

function fonctionAgrandir44(){
      document.getElementById("img44").style.display = "block";
}

function fonctionFermer44(){
      document.getElementById("img44").style.display = "none";
}

function fonctionAgrandir45(){
      document.getElementById("img45").style.display = "block";
}

function fonctionFermer45(){
      document.getElementById("img45").style.display = "none";
}

function fonctionAgrandir46(){
      document.getElementById("img46").style.display = "block";
}

function fonctionFermer46(){
      document.getElementById("img46").style.display = "none";
}

function fonctionAgrandir47(){
      document.getElementById("img47").style.display = "block";
}

function fonctionFermer47(){
      document.getElementById("img47").style.display = "none";
}

function fonctionAgrandir48(){
      document.getElementById("img48").style.display = "block";
}

function fonctionFermer48(){
      document.getElementById("img48").style.display = "none";
}

function fonctionAgrandir49(){
      document.getElementById("img49").style.display = "block";
}

function fonctionFermer49(){
      document.getElementById("img49").style.display = "none";
}

function fonctionAgrandir50(){
      document.getElementById("img50").style.display = "block";
}

function fonctionFermer50(){
      document.getElementById("img50").style.display = "none";
}

function fonctionAgrandir51(){
      document.getElementById("img51").style.display = "block";
}

function fonctionFermer51(){
      document.getElementById("img51").style.display = "none";
}

function fonctionAgrandir52(){
      document.getElementById("img52").style.display = "block";
}

function fonctionFermer52(){
      document.getElementById("img52").style.display = "none";
}

function fonctionAgrandir53(){
      document.getElementById("img53").style.display = "block";
}

function fonctionFermer53(){
      document.getElementById("img53").style.display = "none";
}

function fonctionAgrandir54(){
      document.getElementById("img54").style.display = "block";
}

function fonctionFermer54(){
      document.getElementById("img54").style.display = "none";
}

function fonctionAgrandir55(){
      document.getElementById("img55").style.display = "block";
}

function fonctionFermer55(){
      document.getElementById("img55").style.display = "none";
}

function fonctionAgrandir56(){
      document.getElementById("img56").style.display = "block";
}

function fonctionFermer56(){
      document.getElementById("img56").style.display = "none";
}

function fonctionAgrandir57(){
      document.getElementById("img57").style.display = "block";
}

function fonctionFermer57(){
      document.getElementById("img57").style.display = "none";
}

function fonctionAgrandir58(){
      document.getElementById("img58").style.display = "block";
}

function fonctionFermer58(){
      document.getElementById("img58").style.display = "none";
}

function fonctionAgrandir59(){
      document.getElementById("img59").style.display = "block";
}

function fonctionFermer59(){
      document.getElementById("img59").style.display = "none";
}

function fonctionAgrandir60(){
      document.getElementById("img60").style.display = "block";
}

function fonctionFermer60(){
      document.getElementById("img60").style.display = "none";
}

function fonctionAgrandir61(){
      document.getElementById("img61").style.display = "block";
}

function fonctionFermer61(){
      document.getElementById("img61").style.display = "none";
}

function fonctionAgrandir62(){
      document.getElementById("img62").style.display = "block";
}

function fonctionFermer62(){
      document.getElementById("img62").style.display = "none";
}

function fonctionAgrandir63(){
      document.getElementById("img63").style.display = "block";
}

function fonctionFermer63(){
      document.getElementById("img63").style.display = "none";
}

function fonctionAgrandir64(){
      document.getElementById("img64").style.display = "block";
}

function fonctionFermer64(){
      document.getElementById("img64").style.display = "none";
}

function fonctionAgrandir65(){
      document.getElementById("img65").style.display = "block";
}

function fonctionFermer65(){
      document.getElementById("img65").style.display = "none";
}

function fonctionAgrandir66(){
      document.getElementById("img66").style.display = "block";
}

function fonctionFermer66(){
      document.getElementById("img66").style.display = "none";
}

function fonctionAgrandir67(){
      document.getElementById("img67").style.display = "block";
}

function fonctionFermer67(){
      document.getElementById("img67").style.display = "none";
}

function fonctionAgrandir68(){
      document.getElementById("img68").style.display = "block";
}

function fonctionFermer68(){
      document.getElementById("img68").style.display = "none";
}

function fonctionAgrandir69(){
      document.getElementById("img69").style.display = "block";
}

function fonctionFermer69(){
      document.getElementById("img69").style.display = "none";
}

   ///////////////////////BON GROS ONS//////////////////////////////////



var playlist = new Array("soie disant - into",
    "soie disant - travailler aux usines, gareurs, ouvrières tisseuses et main d'oeuvre",
    "soie disant - témoignage des conditions de travail",
    "soie disant - la mentalité ouvrière",
    "soie disant - période de guerre",
    "soie disant - fermeture des usines",
    "soie disant - tentative de projet communal",
    "soie disant - atelier d'artistes",
    "soie disant - l'association musicale l'oreille hardie");
var currentSong = 0;
var lien_audio = new Array(
      "../ressource/img/reportage/0.mp3",
      "../ressource/img/reportage/1.mp3",
      "../ressource/img/reportage/2.mp3",
      "../ressource/img/reportage/3.mp3",
      "../ressource/img/reportage/4.mp3",
      "../ressource/img/reportage/5.mp3",
      "../ressource/img/reportage/6.mp3",
      "../ressource/img/reportage/7.mp3",
      "../ressource/img/reportage/8.mp3");
var isplaying = false;





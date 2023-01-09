



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array('<span id="souligne_txt">impression sur étoffe</span><br>La sérigraphie - du latin sericum: la soie et du grec graphein: l’écriture - est une technique d’imprimerie qui utilise des pochoirs - à l’origine, des écrans de soie - interposés entre l’encre et <a id= "lien_obj" href="../../outils/page_outils/coupe.html">un tissu</a>.',

'La technique d’impression dite au cadre plat est inventée à Lyon vers 1850, d’où son appellation de «cadres à la lyonnaise». Les décors sont imprimés sur l’étoffe à l’aide d’<a id= "lien_obj" href="../../outils/page_outils/cadre.html">un cadre</a>, aussi nommé écran - sur lequel est tendue une fine gaze.<br>L’impression au cadre est un procédé impliquant diverses étapes: choix du dessin, des coloris, préparation des tables d’impression, fixation en tension du tissu de soie, réalisation de la pâte d’impression, impression, séchage…',

'Le motif sérigraphié peut être composé de nombreuses couleurs. Chaque couleur constitue une couche, un passage et nécessite de graver <a id= "lien_obj" href="../../outils/page_outils/cadre.html">un cadre</a>. Le motif à imprimer était reporté sur l’écran du cadre à l’aide de vernis opaques ; les parties qui ne devaient pas être imprimées étant bouchées par le vernis. Les parties perméables, correspondant au motif, laissent passer la couleur, que l’on applique avec une racle.',

'L’impression sur soie était pratiquée dans certaines usines de Saint-Julien-Molin-Molette telles que <a id= "lien_obj" href="../../lieux/usine_blanc/lieu_usine_blanc.html">Chez Blanc</a>, <a id= "lien_obj" href="../../lieux/usine_cadet/lieu_cadet.html">Chez Cadet</a>, ainsi qu’à <a id= "lien_obj" href="../../lieux/taillis_vert/lieu_taillis_vert.html">la Fabrique de Taillis-Vert</a>,<br>Toutefois, le procédé nécessitant beaucoup de logistique et d’eau, l’activité ne s’est pas développée autant que <a id= "lien_obj" href="../tissage/savoir_tissage.html">le tissage</a> et <a id= "lien_obj" href="../moulinage/savoir_moulinage.html">le moulinage</a>.<br>Selon les fabriques, <a id= "lien_obj" href="../../outils/page_outils/coupe.html">les coupes de soie</a> sont livrées à <a id= "lien_obj" href="../teinture/savoir_teinture.html">des teinturiers</a> ou imprimeurs extérieurs au village, voire directement <a id= "lien_obj" href="../donneur_ordre/savoir_donneur_ordre.html">au donneur d’ordre</a>. Certains <a id= "lien_obj" href="../patron/savoir_patron.html">patrons</a> reçoivent parfois des échantillons de leur production transformée pour l’habillement et le luxe, tels que des foulards imprimés. <a id= "lien_obj" href="../../outils/page_outils/crepe.html">Ces foulards</a> imprimés sont vendus aux ouvriers et ouvrières.'
);

var currentSong = 0;



    next.addEventListener('click', function () {
        currentSong ++;
        if(currentSong >= playlist.length){
            currentSong = 0;
        }
        if(currentSong < playlist.length){
            document.getElementById("txt_descriptif").innerHTML = playlist[currentSong];
            }
         
    });

        prev.addEventListener('click', function () {
        currentSong --;
        if(currentSong < 0){
            currentSong = playlist.length-1;
        }
        if(currentSong < playlist.length){
            document.getElementById("txt_descriptif").innerHTML = playlist[currentSong];
            }

       
    });




function fonctionTexteDepart(){
document.getElementById("txt_descriptif").innerHTML= playlist[currentSong];
}

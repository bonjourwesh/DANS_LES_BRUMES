



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array('<span id="souligne_txt">L’enroulage</span> consiste à attacher les fils de chaîne sur le rouleau avant - ensouple porte-étoffe - du métier à tisser.',

'<span id="souligne_txt">L’enroulage</span> consiste à attacher les fils de chaîne sur le rouleau avant - ensouple porte-étoffe - du métier à tisser.',

'Le raccord entre la chaîne et <a id= "lien_obj" href="../../outils/page_outils/ensouple.html">l’ensouple</a> peut être réalisé à l’aide d’un tissu à anses -<a id= "lien_obj" href="../../outils/page_outils/egancette.html">l’égancette</a>- sur lesquelles les fils de <a id= "lien_obj" href="../../outils/page_outils/chaine.html">la chaîne</a> sont rassemblés en mises puis noués aux anses.',

'L’égancette, d’une longueur de cinquante centimètres,  est raccordée à au rouleau porte étoffe, et évite de perdre de la longueur de chaîne.',

'Grâce au <a id= "lien_obj" href="../../outils/page_outils/regulateur.html">volant</a> actionnant <a id= "lien_obj" href="../../outils/page_outils/ensouple.html">le rouleau régulateur</a>, le tissu, fixé à <a id= "lien_obj" href="../../outils/page_outils/ensouple.html">l’ensouple avant</a>, est enroulé afin de mettre en tension la chaîne.',

'Les nœuds de la nouvelle chaîne passent alors les dents du peigne.',

'La partie du métier dans laquelle se déplace <a id= "lien_obj" href="../../outils/page_outils/battant.html">le battant</a>, entre <a id= "lien_obj" href="../../outils/page_outils/remisse.html">le remisse</a> et <a id= "lien_obj" href="../../outils/page_outils/poitriniere.html">la poitrinnière</a> est nommée <a id= "lien_obj" href="../../outils/page_outils/medee.html">Médée</a>. Les chutes ou attaches, sont les parties de la chaîne qui ne pourront pas être tissées en début et fin de tissage.<br><br>On retrouve des témoignages d’ancien·nes ouvrier·es dans <a id= "lien_obj" href="../../archives/menu_archives.html">les archives</a>, notamment lors de reportages TV et films documentaires autour du patrimoine textile.');

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

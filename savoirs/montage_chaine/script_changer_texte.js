



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array('<a id= "lien_obj" href="../../outils/page_outils/ensouple.html">L’ensouple</a>, dite porte-fils, est apportée de <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">l’ourdissage</a> garnie d’une chaine, l’ensouple est installée sur à l’arrière du métier à tisser sur <a id= "lien_obj" href="../../outils/page_outils/porte_ensouple.html">le porte ensouple</a> par <a id= "lien_obj" href="../main_oeuvre/savoir_main_oeuvre.html">un ouvrier main-d’œuvre</a>.',
'<a id= "lien_obj" href="../../outils/page_outils/ensouple.html">L’ensouple</a>, dite porte-fils, est apportée de <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">l’ourdissage</a> garnie d’une chaine, l’ensouple est installée sur à l’arrière du métier à tisser sur <a id= "lien_obj" href="../../outils/page_outils/porte_ensouple.html">le porte ensouple</a> par <a id= "lien_obj" href="../main_oeuvre/savoir_main_oeuvre.html">un ouvrier main-d’œuvre</a>.',
'<a id= "lien_obj" href="../../outils/page_outils/cadre.html">Les cadres</a> - provenant du <a id= "lien_obj" href="../remettage/savoir_remettage.html">remettage</a> ou du <a id= "lien_obj" href="../lissage/savoir_lissage.html">lissage</a>, et <a id= "lien_obj" href="../../outils/page_outils/peigne.html">le peigne</a> - provenant du <a id= "lien_obj" href="../fabrication_peigne/savoir_fabrication_peigne.html">peignier</a>, sont installés par la même occasion sur <a id= "lien_obj" href="../../outils/page_outils/remisse.html">le remisse</a>.',
'<a id= "lien_obj" href="../../outils/page_outils/cadre.html">Les cadres</a> - provenant du <a id= "lien_obj" href="../remettage/savoir_remettage.html">remettage</a> ou du <a id= "lien_obj" href="../lissage/savoir_lissage.html">lissage</a>, et <a id= "lien_obj" href="../../outils/page_outils/peigne.html">le peigne</a> - provenant du <a id= "lien_obj" href="../fabrication_peigne/savoir_fabrication_peigne.html">peignier</a>, sont installés par la même occasion sur <a id= "lien_obj" href="../../outils/page_outils/remisse.html">le remisse</a>.',
'L’ensouple est positionnée sur <a id= "lien_obj" href="../../outils/page_outils/rouleau.html">les supports</a> à l’arrière du métier et le peigne à l’intérieur du <a id= "lien_obj" href="../../outils/page_outils/battant.html">battant</a>. <a id= "lien_obj" href="../../outils/page_outils/cadre.html">Les cadres</a> du remisse sont suspendus sur le métier. À l’avant du peigne, la chaîne est fixée sur <a id= "lien_obj" href="../../outils/page_outils/baguette_attache.html">des baguettes d’attaches</a>.',
'L’ensouple est positionnée sur <a id= "lien_obj" href="../../outils/page_outils/rouleau.html">les supports</a> à l’arrière du métier et le peigne à l’intérieur du <a id= "lien_obj" href="../../outils/page_outils/battant.html">battant</a>. <a id= "lien_obj" href="../../outils/page_outils/cadre.html">Les cadres</a> du remisse sont suspendus sur le métier. À l’avant du peigne, la chaîne est fixée sur <a id= "lien_obj" href="../../outils/page_outils/baguette_attache.html">des baguettes d’attaches</a>.',
'L’ensouple est positionnée sur <a id= "lien_obj" href="../../outils/page_outils/rouleau.html">les supports</a> à l’arrière du métier et le peigne à l’intérieur du <a id= "lien_obj" href="../../outils/page_outils/battant.html">battant</a>. <a id= "lien_obj" href="../../outils/page_outils/cadre.html">Les cadres</a> du remisse sont suspendus sur le métier. À l’avant du peigne, la chaîne est fixée sur <a id= "lien_obj" href="../../outils/page_outils/baguette_attache.html">des baguettes d’attaches</a>.',
'<a id= "lien_obj" href="../../outils/page_outils/frein.html">Les freins</a> des ensouples sont chargés de <a id= "lien_obj" href="../../outils/page_outils/poids.html">poids</a>.',
'À l’aide d’<a id= "lien_obj" href="../../outils/page_outils/volant.html">un volant</a>, le gareur fait tourner <a id= "lien_obj" href="../../outils/page_outils/rouleau_regulateur.html">le rouleau régulateur</a> - situé au-dessus de l’ensouple porte-étoffe - jusqu’à ce que les baguettes d’attache aient dépassé <a id= "lien_obj" href="../../outils/page_outils/poitriniere.html">la poitrinière</a>. <br>Le gareur s’assure de la tension de la chaîne puis règle le métier à tisser, <a id= "lien_obj" href="../../outils/page_outils/templet.html">les templets</a>, <a id= "lien_obj" href="../../outils/page_outils/lisiere.html">lisières</a>, <a id= "lien_obj" href="../../outils/page_outils/casse_trame.html">casse-trame</a>…',

'<a id= "lien_obj" href="../../outils/page_outils/ensouple.html">Les ensouples</a> étaient réalisées par <a id= "lien_obj" href="../tourneur_bois/savoir_tourneur_bois.html">un tourneur sur bois</a> ou menuisier au sein des fabriques ou dans un atelier travaillant à façon.<br>On retrouve des témoignages d’ancien·nes ouvrier·es dans <a id= "lien_obj" href="../../archives/menu_archive.html">les archives</a>, notamment lors d’entretiens dans l’émission radio Soie Disant, de reportages TV et films documentaires autour du patrimoine textile.');

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

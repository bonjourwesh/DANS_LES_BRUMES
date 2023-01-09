



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array('Pratiqué dès le XVIIème siècle, le travail de la soie à domicile était courant. À l’arrivée de la soie à Saint-Julien-Molin-Molette, <a id= "lien_obj" href="../../lieux/commerce/lieu_commerce.html">les villageois paysans</a> travaillaient alors à façon - selon la demande des fabriques et des donneurs d’ordres, en complément de leurs revenus issus du travail des champs, femmes et enfants préparent la soie et les hommes la tissent.',

'Par la suite, <a id= "lien_obj" href="../../outils/page_outils/metier_tisser.html">des métiers à tisser</a> sont installés dans <span id="souligne_txt">des ateliers indépendants</span> en rez-de-chaussée des habitations et <a id= "lien_obj" href="../../lieux/cooperative_soie/lieu_cooperative_soie.html">logements ouvriers</a>. Après la seconde guerre mondiale, on dénombre plus d’<span id="souligne_txt">une vingtaine d’unités</span> et de foyers équipés de quatre à dix métiers - soit plus de cent métiers répartis sur le village.',

'Par la suite, <a id= "lien_obj" href="../../outils/page_outils/metier_tisser.html">des métiers à tisser</a> sont installés dans <span id="souligne_txt">des ateliers indépendants</span> en rez-de-chaussée des habitations et <a id= "lien_obj" href="../../lieux/cooperative_soie/lieu_cooperative_soie.html">logements ouvriers</a>. Après la seconde guerre mondiale, on dénombre plus d’<span id="souligne_txt">une vingtaine d’unités</span> et de foyers équipés de quatre à dix métiers - soit plus de cent métiers répartis sur le village.',

'Par la suite, <a id= "lien_obj" href="../../outils/page_outils/metier_tisser.html">des métiers à tisser</a> sont installés dans <span id="souligne_txt">des ateliers indépendants</span> en rez-de-chaussée des habitations et <a id= "lien_obj" href="../../lieux/cooperative_soie/lieu_cooperative_soie.html">logements ouvriers</a>. Après la seconde guerre mondiale, on dénombre plus d’<span id="souligne_txt">une vingtaine d’unités</span> et de foyers équipés de quatre à dix métiers - soit plus de cent métiers répartis sur le village.',

'Par la suite, <a id= "lien_obj" href="../../outils/page_outils/metier_tisser.html">des métiers à tisser</a> sont installés dans <span id="souligne_txt">des ateliers indépendants</span> en rez-de-chaussée des habitations et <a id= "lien_obj" href="../../lieux/cooperative_soie/lieu_cooperative_soie.html">logements ouvriers</a>. Après la seconde guerre mondiale, on dénombre plus d’<span id="souligne_txt">une vingtaine d’unités</span> et de foyers équipés de quatre à dix métiers - soit plus de cent métiers répartis sur le village.',

'Par la suite, <a id= "lien_obj" href="../../outils/page_outils/metier_tisser.html">des métiers à tisser</a> sont installés dans <span id="souligne_txt">des ateliers indépendants</span> en rez-de-chaussée des habitations et <a id= "lien_obj" href="../../lieux/cooperative_soie/lieu_cooperative_soie.html">logements ouvriers</a>. Après la seconde guerre mondiale, on dénombre plus d’<span id="souligne_txt">une vingtaine d’unités</span> et de foyers équipés de quatre à dix métiers - soit plus de cent métiers répartis sur le village.',

'Les travailleur·ses à façon œuvrent pour les industriels - en soutien à la production <span id="souligne_txt">des fabriques</span>, selon <span id="souligne_txt">les commandes</span>, <a id= "lien_obj" href="../contremaitresse/savoir_contremaitresse.html">les contremaîtres</a> des usines délèguent une partie de la production, la demande est alors très fluctuante, de nombreux tisseur·ses ont une seconde activité - ou pour <a id= "lien_obj" href="../../lieux/cooperative_soie/lieu_cooperative_soie.html">la coopérative de la soie</a> - <a id= "lien_obj" href="../../lieux/commerce/lieu_commerce.html">rue Peyronnet</a>. <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">L’ourdissage</a> de la chaîne était réalisé sur <a id= "lien_obj" href="../../outils/page_outils/ourdissoir.html">l’ourdissoir</a> de la coopérative de la soie, par une entreprise extérieure au village, ou reçue de la fabrique dont l’atelier à façon recevait les ordres. <a id= "lien_obj" href="../rapondage/savoir_rapondage.html">Des ouvrières tordeuses</a> venaient en complément de leur travail à l’usine raccordées les chaînes <a id= "lien_obj" href="../../outils/page_outils/remettage.html">des nouveaux remettages</a> sur les métiers à tisser des petits ateliers.'
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

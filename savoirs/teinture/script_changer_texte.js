



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array('La teinture consiste à fixer à la surface du fil une ou des matières colorantes. Certains effets sont obtenus à la suite du <a id= "lien_obj" href="../tissage/savoir_tissage.html">tissage</a>, par impression directe. La teinture, elle, peut être de différentes nature: minérale, végétale, animale… En teinture, la couleur doit être durable et résistante au lavage. La soie est particulièrement facile à teindre.',
'La teinture consiste à fixer à la surface du fil une ou des matières colorantes. Certains effets sont obtenus à la suite du <a id= "lien_obj" href="../tissage/savoir_tissage.html">tissage</a>, par impression directe. La teinture, elle, peut être de différentes nature: minérale, végétale, animale… En teinture, la couleur doit être durable et résistante au lavage. La soie est particulièrement facile à teindre. ',
'La teinture consiste à fixer à la surface du fil une ou des matières colorantes. Certains effets sont obtenus à la suite du <a id= "lien_obj" href="../tissage/savoir_tissage.html">tissage</a>, par impression directe. La teinture, elle, peut être de différentes nature: minérale, végétale, animale… En teinture, la couleur doit être durable et résistante au lavage. La soie est particulièrement facile à teindre. ',
'Les brins, enroulés sur <a id= "lien_obj" href="../../outils/page_outils/bobine.html">une bobine perforée</a>, sont plongés dans un bain de teinture. ',
'Les brins, enroulés sur <a id= "lien_obj" href="../../outils/page_outils/bobine.html">une bobine perforée</a>, sont plongés dans un bain de teinture. ',
'Les brins, enroulés sur <a id= "lien_obj" href="../../outils/page_outils/bobine.html">une bobine perforée</a>, sont plongés dans un bain de teinture. ',
'Les brins, enroulés sur <a id= "lien_obj" href="../../outils/page_outils/bobine.html">une bobine perforée</a>, sont plongés dans un bain de teinture. ',
'Les brins, enroulés sur <a id= "lien_obj" href="../../outils/page_outils/bobine.html">une bobine perforée</a>, sont plongés dans un bain de teinture. ',
'Le vaporisage, réalisé dans <span id="souligne-txt">une étuve</span>, permet de fixer la teinture et <span id="souligne-txt">le lavage</span> permettent d’ôter l’épaississant et le colorant non fixé. La teinture peut donner des chinés, flammés…',
'Une seconde technique de teinture consiste à teindre le fil déjà <a id= "lien_obj" href="../../outils/page_outils/bobine.html">bobiné</a> - avant <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">l’ourdissage</a>. Les bobines sont enfilées sur <a id= "lien_obj" href="../../outils/page_outils/bobine.html">des tubes percés</a> de trous positionnés au centre d’une bâche de forme circulaire. Sous une forte pression, la teinture est envoyée dans les tubes et se répand à l’intérieur des bobines qu’elle imprègne complètement. L’opération est répétée dans le sens inverse, par aspiration. Cette technique permet d’éviter les manutentions relatives à la teinture <a id= "lien_obj" href="../../outils/page_outils/flotte.html">sur écheveaux</a>.',
'Une seconde technique de teinture consiste à teindre le fil déjà <a id= "lien_obj" href="../../outils/page_outils/bobine.html">bobiné</a> - avant <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">l’ourdissage</a>. Les bobines sont enfilées sur <a id= "lien_obj" href="../../outils/page_outils/bobine.html">des tubes percés</a> de trous positionnés au centre d’une bâche de forme circulaire. Sous une forte pression, la teinture est envoyée dans les tubes et se répand à l’intérieur des bobines qu’elle imprègne complètement. L’opération est répétée dans le sens inverse, par aspiration. Cette technique permet d’éviter les manutentions relatives à la teinture <a id= "lien_obj" href="../../outils/page_outils/flotte.html">sur écheveaux</a>.',
'Une seconde technique de teinture consiste à teindre le fil déjà <a id= "lien_obj" href="../../outils/page_outils/bobine.html">bobiné</a> - avant <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">l’ourdissage</a>. Les bobines sont enfilées sur <a id= "lien_obj" href="../../outils/page_outils/bobine.html">des tubes percés</a> de trous positionnés au centre d’une bâche de forme circulaire. Sous une forte pression, la teinture est envoyée dans les tubes et se répand à l’intérieur des bobines qu’elle imprègne complètement. L’opération est répétée dans le sens inverse, par aspiration. Cette technique permet d’éviter les manutentions relatives à la teinture <a id= "lien_obj" href="../../outils/page_outils/flotte.html">sur écheveaux</a>.',
'Le fil provenant <a id= "lien_obj" href="../filage/savoir_filage.html">des filatures</a>, peut aussi être teint à la suite de son moulinage. Cette teinture temporaire, la fugace - bleu ou rose, permet de distinguer la torsion du fil mouliné. ');

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

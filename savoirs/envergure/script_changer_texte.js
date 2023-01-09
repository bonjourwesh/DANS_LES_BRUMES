



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array('L’envergure consiste à diviser la nappe – <a id= "lien_obj" href="../../outils/page_outils/chaine.html">fils de chaine</a> – au moyen de <a id= "lien_obj" href="../../outils/page_outils/baguette_enverger.html">baguettes</a> en un certain nombre de parties similaires destinées à faciliter la vérification du travail.',

'L’envergure, fil à fil, sert à retrouver et remettre chaque fil à sa place lors de <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">l’ourdissage</a>, <a id= "lien_obj" href="../ourdissage/savoir_remettage.html">du remettage</a>, du rentrage et <a id= "lien_obj" href="../ourdissage/savoir_tissage.html">du tissage</a>. Ainsi, dans la longueur de la chaine, tous les fils sont envergés, c’est à dire encroisés sur deux <a id= "lien_obj" href="../../outils/page_outils/baguette_enverger.html">baguettes de bois</a> appelées verges, baguette d’encroix ou cannes afin de conserver aux fils la place qui leur a été donnée à l’ourdissage et de permettre à l’ouvrier de retrouver facilement la place d’un fil cassé pendant le tissage.',

'L’envergure, fil à fil, sert à retrouver et remettre chaque fil à sa place lors de <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">l’ourdissage</a>, <a id= "lien_obj" href="../ourdissage/savoir_remettage.html">du remettage</a>, du rentrage et <a id= "lien_obj" href="../ourdissage/savoir_tissage.html">du tissage</a>. Ainsi, dans la longueur de la chaine, tous les fils sont envergés, c’est à dire encroisés sur deux <a id= "lien_obj" href="../../outils/page_outils/baguette_enverger.html">baguettes de bois</a> appelées verges, baguette d’encroix ou cannes afin de conserver aux fils la place qui leur a été donnée à l’ourdissage et de permettre à l’ouvrier de retrouver facilement la place d’un fil cassé pendant le tissage.',

'L’envergure, fil à fil, sert à retrouver et remettre chaque fil à sa place lors de <a id= "lien_obj" href="../ourdissage/savoir_ourdissage.html">l’ourdissage</a>, <a id= "lien_obj" href="../ourdissage/savoir_remettage.html">du remettage</a>, du rentrage et <a id= "lien_obj" href="../ourdissage/savoir_tissage.html">du tissage</a>. Ainsi, dans la longueur de la chaine, tous les fils sont envergés, c’est à dire encroisés sur deux <a id= "lien_obj" href="../../outils/page_outils/baguette_enverger.html">baguettes de bois</a> appelées verges, baguette d’encroix ou cannes afin de conserver aux fils la place qui leur a été donnée à l’ourdissage et de permettre à l’ouvrier de retrouver facilement la place d’un fil cassé pendant le tissage.',

'Cette encroisure ou envergeage se fait de la manière suivante : les fils impairs sont passés au-dessous de la première verge et au-dessus la seconde verge et les fils pairs sont disposés au-dessus de la première verge et en-dessous de la seconde, la première verge étant celle en arrière du métier, la plus rapprochée du <a id= "lien_obj" href="../../outils/page_outils/ensouple.html">rouleau de chaîne</a>.'
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

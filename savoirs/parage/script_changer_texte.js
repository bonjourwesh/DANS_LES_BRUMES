



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array('Pour qu’<a id= "lien_obj" href="../../outils/page_outils/flotte.html">un fil</a> se tisse bien, il faut qu’il soit souple, sans dureté ni raideur, et très lisse.<br>Le parage consiste à enduire les fils d’un mélange d’eau conditionnée d’amidon et de cire pour les rendre plus résistants. Le mélange peut se composer de farine, suif, cire, savon, amidon ou fécule de pomme de terre. À cette base est ajoutée de la glycérine ou de la graisse et du sulfate de cuivre. Le sulfate de zinc rend le fil encollé plus hygrométrique. Le kaolin, la craie, la terre de pipe sont quelquefois employés pour donner du poids au fil. Le mélange est cuit dans <span id="souligne_txt">une cuve</span> à mélange par vapeur.',
'Le parage a pour but d’enduire et de pénétrer les fils de chaine d’une substance collante – le parement ou <span id="souligne_txt">apprêt</span>- rendant la surface du fil lisse et polie afin de lui permettre de supporter le frottement du <a id= "lien_obj" href="../../outils/page_outils/peigne.html">peigne</a> pendant le travail du tissage. <br>Anciennement, l’enduit était déposé à l’aide de deux brosses douces que l’ouvrière glissait, l’une en dessus, l’autre en dessous, le long de <a id= "lien_obj" href="../../outils/page_outils/chaine.html">la chaine</a> jusqu’à ce que la chaine aille un aspect lisse, sans frisure de surface. Avec <a id= "lien_obj" href="../../outils/page_outils/metier_tisser.html">les métiers</a> mécaniques et industriels, la chaine est parée en amont de son placement sur le métier à tisser – grâce à une machine à parer. <a id= "lien_obj" href="../../outils/page_outils/chaine.html">Les fils de chaine</a> sont alors positionnés sur des cylindres – cylindres à pâte et cylindres presseurs - puis brossés afin d’être enduits de colle, avant d’être enroulés sur <a id= "lien_obj" href="../../outils/page_outils/ensouple.html">l’ensouple</a>.',
'Lors du <span id="souligne_txt">parage</span>, à l’inverse de <span id="souligne_txt">l’encollage</span>, l’apprêt est déposé en surface et ne pénètre pas le fil. Le parage rend le fil plus doux et plus net - tissus fins et délicats - quand l’encollage rend le fil plus dur et résistant. Lors de l’encollage, les fils traversent la colle qui est constamment en ébullition. Les fils de chaîne, réunis en une seule nappe, sont positionnés sur un rouleau de tension et un rouleau de guide, puis, grâce à un rouleau mobile, la chaine est plongée dans un bain de colle en ébullition. L’excès de colle est retiré par lors du passage de la nappe de fils entre deux rouleaux. La chaîne est ensuite enroulée sur différents tambours, séchée et enroulée sur l’ensouple.<br>L’apprêt disparaîtra <span id="souligne_txt">au lavage</span>.');

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

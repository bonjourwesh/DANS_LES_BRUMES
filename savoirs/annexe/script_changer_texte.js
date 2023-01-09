



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array(

'C’NGI - Tupin et Semons - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'Effet Passementeries - Saint-Paul-en-Jarez - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'Fabrication de peigne - Le musée d’Art et d’Industrie de la ville de Saint-Etienne. ',
'Goutarel SA - Chavanay - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'JSD Etiquettes - Jonzieux - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'La Maison de la Passementerie - Jonzieux - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'Moulinage Barou - Lupé - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'Passementerie Sahuc - Jouzieux - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'Tissages Robert Blanc - Bourg Argental - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'Tissage Coupat - Saint-Appolinard - Savoir faire textiles du Parc Naturel Régional du Pilat. ',
'Tissage Oriol - PélussinSavoir faire textiles du Parc Naturel Régional du Pilat. ',

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

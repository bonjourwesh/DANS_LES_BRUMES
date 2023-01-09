 ///////////////////////FERMER PAGE//////////////////////////////////


function fonctionFermer(){
    document.getElementById("rectangle_droit").style.display = "none";
}



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%OBJ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%OBJ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%OBJ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


  ///////////////////////PAGE PAILLAGE//////////////////////////////////
fiche_technique = document.getElementsByClassName("fiche_technique");

let rectangle_droite = document.getElementById('rectangle_droit');


 function fonctionPaillage(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_paillage").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

function fonctionFullPaillage(){
    if ( document.getElementById("photo_paillage").style.maxWidth != "100%"){
     document.getElementById("photo_paillage").className = "pix_obj_full";
     document.getElementById("description_paillage").style.display="none";
    }else{
     document.getElementById("photo_paillage").className = "pix_obj";
    document.getElementById("description_paillage").style.display="block";     
    }
}
 ///////////////////////PAGE SAC DE JUTE//////////////////////////////////

 function fonctionSacDeJute(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_sac_de_jute").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

function fonctionFullSacDeJute(){
    if ( document.getElementById("photo_sac_de_jute").style.maxWidth != "100%"){
     document.getElementById("photo_sac_de_jute").className = "pix_obj_full";
     document.getElementById("description_sac_de_jute").style.display="none";
    }else{
     document.getElementById("photo_sac_de_jute").className = "pix_obj";
    document.getElementById("description_sac_de_jute").style.display="block";     
    }
}

 ///////////////////////PAGE FLOTTE//////////////////////////////////

 function fonctionFlotte(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_flotte").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

function fonctionFullFlotte(){
    if ( document.getElementById("photo_flotte").style.maxWidth != "100%"){
     document.getElementById("photo_flotte").className = "pix_obj_full";
     document.getElementById("description_flotte").style.display="none";
    }else{
     document.getElementById("photo_flotte").className = "pix_obj";
    document.getElementById("description_flotte").style.display="block";       
    }
}

 ///////////////////////PAGE CANETTE//////////////////////////////////


 function fonctionCanette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_canette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

function fonctionFullCanette(){
    if ( document.getElementById("photo_canette").style.maxWidth != "100%"){
     document.getElementById("photo_canette").className = "pix_obj_full";
     document.getElementById("description_canette").style.display="none";
    }else{
     document.getElementById("photo_canette").className = "pix_obj";
    document.getElementById("description_canette").style.display="block";       
    }
}

 ///////////////////////PAGE BOBINE//////////////////////////////////


 function fonctionBobine(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_bobine").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

function fonctionFullBobine(){
    if ( document.getElementById("photo_bobine").style.maxWidth != "100%"){
     document.getElementById("photo_bobine").className = "pix_obj_full";
     document.getElementById("description_bobine").style.display="none";
    }else{
     document.getElementById("photo_bobine").className = "pix_obj";
    document.getElementById("description_bobine").style.display="block";       
    }
}

 ///////////////////////PAGE NAVETTE//////////////////////////////////


 function fonctionNavette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_navette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

function fonctionFullNavette(){
    if ( document.getElementById("photo_navette").style.maxWidth != "100%"){
     document.getElementById("photo_navette").className = "pix_obj_full";
     document.getElementById("description_navette").style.display="none";
    }else{
     document.getElementById("photo_navette").className = "pix_obj";
    document.getElementById("description_navette").style.display="block";       
    }
}

 ///////////////////////PAGE QUEUE DE COCHON//////////////////////////////////


 function fonctionQueueCochon(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_queue_cochon").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

function fonctionFullQueueCochon(){
    if ( document.getElementById("photo_queue_cochon").style.maxWidth != "100%"){
     document.getElementById("photo_queue_cochon").className = "pix_obj_full";
     document.getElementById("description_queue_cochon").style.display="none";
    }else{
     document.getElementById("photo_queue_cochon").className = "pix_obj";
    document.getElementById("description_queue_cochon").style.display="block";       
    }
}



 ///////////////////////PAGE CANETIERE/////////////////////////////////


 function fonctionCanetiere(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_canetiere").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////METIER A TISSER////////////////////////////////


 function fonctionMetierTisser(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_metier_tisser").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////SOIE/////////////////////////////////


 function fonctionSoie(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_soie").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////PAYE/////////////////////////////////


 function fonctionPaye(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_paye").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////BISTANCLAQUE////////////////////////////////


 function fonctionBistanclaque(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_bistanclaque").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////BATTANT/////////////////////////////////


 function fonctionBattant(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_battant").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////TAVELLE/////////////////////////////////


 function fonctionTavelle(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tavelle").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////MOULIN/////////////////////////////////


 function fonctionMoulin(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_moulin").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ROULEAU DE CHAINE/////////////////////////////////


 function fonctionRouleauChaine(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_rouleau_chaine").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////PEIGNE A ENVERGER/////////////////////////////////


 function fonctionPeigne(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_peigne").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////VERGE/////////////////////////////////


 function fonctionVerge(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_verge").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////TISSUS/////////////////////////////////


 function fonctionTissu(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tissus").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ROUE A AUBE/////////////////////////////////


 function fonctionRoueAube(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_roue_aube").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////COURROIE/////////////////////////////////


 function fonctionCourroie(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_courroie").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////POULIE/////////////////////////////////


 function fonctionPoulie(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_poulie").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ENGRENAGE/////////////////////////////////


 function fonctionEngrenage(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_engrenage").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ARBRE/////////////////////////////////


 function fonctionArbre(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_arbre").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////MOTEUR/////////////////////////////////


 function fonctionMoteur(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_moteur").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////MEULE/////////////////////////////////


 function fonctionMeule(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_meule").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////BENNE/////////////////////////////////


 function fonctionBenne(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_benne").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////MOUSSELINE/////////////////////////////////


 function fonctionMousseline(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_mousseline").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////CREPE/////////////////////////////////


 function fonctionCrepe(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_crepe").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ORGANZA/////////////////////////////////


 function fonctionOrganza(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_organza").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ORDRE/////////////////////////////////


 function fonctionOrdre(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_ordre").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////COUPE/////////////////////////////////


 function fonctionCoupe(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_coupe").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////BALANCE/////////////////////////////////


 function fonctionBalance(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_balance").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////FOULARD/////////////////////////////////


 function fonctionFoulard(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_foulard").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////LAVABO/////////////////////////////////


 function fonctionLavabo(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lavabo").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////AFFICHETTE/////////////////////////////////


 function fonctionAffichette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_affichette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////GRAISSE/////////////////////////////////


 function fonctionGraisse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_graisse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////REMISSE/////////////////////////////////


 function fonctionRemisse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_remisse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////CADRE/////////////////////////////////


 function fonctionCadre(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_cadre").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////TRAME/////////////////////////////////


 function fonctionTrame(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_trame").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Pare NAVETTE/////////////////////////////////


 function fonctionPareNavette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_pare_navette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ENSOUPLE/////////////////////////////////


 function fonctionEnsouple(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_ensouple").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////POIDS/////////////////////////////////


 function fonctionPoid(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_poid").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ROULEAU_AVANT/////////////////////////////////


 function fonctionRouleauAvant(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_rouleau_avant").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////MONTE CHARGE/////////////////////////////////


 function fonctionMonteCharge(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_monte_charge").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ROQUET/////////////////////////////////


 function fonctionRoquet(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_roquet").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////PLANCHE A CLOU/////////////////////////////////


 function fonctionPlancheClou(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_planche_clou").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////COMPTE FIL/////////////////////////////////


 function fonctionCompteFil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_compte_fil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////FORCE/////////////////////////////////


 function fonctionForce(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_force").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////BURETTE/////////////////////////////////


 function fonctionBurette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_burette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ETUVE/////////////////////////////////


 function fonctionEtuve(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_etuve").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////TRAFUSOIR/////////////////////////////////


 function fonctionTrafusoir(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_trafusoir").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ETABLI/////////////////////////////////


 function fonctionEtabli(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_etabli").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////TUBE/////////////////////////////////


 function fonctionTube(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tube").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////CANTRE/////////////////////////////////


 function fonctionCantre(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_cantre").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////COMPTEUR/////////////////////////////////


 function fonctionCompteur(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_compteur").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////LISSE/////////////////////////////////


 function fonctionLisse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lisse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////OEILLET/////////////////////////////////


 function fonctionOeillet(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_oeillet").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////LIEN DE SOIE/////////////////////////////////


 function fonctionLienSoie(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lien_soie").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////CARTON/////////////////////////////////


 function fonctionCarton(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_carton").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////Carte/////////////////////////////////


 function fonctionCarte(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_carte").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Chaine/////////////////////////////////


 function fonctionChaine(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_chaine").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////NOEUSE/////////////////////////////////


 function fonctionNoueuse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_noueuse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////NOEUD/////////////////////////////////


 function fonctionNoeud(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_noeud").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////CASIER/////////////////////////////////


 function fonctionCasier(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_casier").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 //////////////////////DENT////////////////////////////////


 function fonctionDent(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_dent").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////CHAISE/////////////////////////////////


 function fonctionChaise(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_chaise").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////TABOURET/////////////////////////////////


 function fonctionTabouret(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tabouret").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////PROTECTION/////////////////////////////////


 function fonctionProtection(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_protection").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////BATI-METIER/////////////////////////////////


 function fonctionBatiMetier(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_bati_metier").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////CAVALIEr/////////////////////////////////


 function fonctionCavalier(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_cavalier").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////VOLANT/////////////////////////////////


 function fonctionVolant(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_volant").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////CASSE-CHAINE/////////////////////////////////


 function fonctionCasseChaine(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_casse_chaine").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 //////////////////////POT GRAISSE////////////////////////////////


 function fonctionPotGraisse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_pot_graisse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////DAME JEANNE/////////////////////////////////


 function fonctionDameJeanne(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_dame_jeanne").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ENVERGURE/////////////////////////////////


 function fonctionEnvergure(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_envergure").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////FOURNEAU/////////////////////////////////


 function fonctionFourneau(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_fourneau").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////lavoir METIER/////////////////////////////////


 function fonctionLavoirMetier(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lavoir_metier").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////LAMPE USINE/////////////////////////////////


 function fonctionLampeUsine(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lampe_usine").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////POINTEUSE/////////////////////////////////


 function fonctionPointeuse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_pointeuse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////HORLOGE/////////////////////////////////


 function fonctionHorloge(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_horloge").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////DEVIDOIR////////////////////////////////


 function fonctionDevidoir(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_devidoir").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////FUSEAU/////////////////////////////////


 function fonctionFuseau(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_fuseau").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////RANG MOULIN/////////////////////////////////


 function fonctionRangMoulin(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_rang_moulin").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////MECANISME MOULIN/////////////////////////////////


 function fonctionMecanismeMoulin(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_mecanisme_moulin").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////POULIE FOLLE/////////////////////////////////


 function fonctionPoulieFolle(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_poulie_folle").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////PAPIER SOIE/////////////////////////////////


 function fonctionPapierSoie(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_papier_soie").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 //////////////////////CLE MOLETTE/////////////////////////////////


 function fonctionCleMolette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_cle_molette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 //////////////////////LIME////////////////////////////////


 function fonctionLime(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lime").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////TAROT/////////////////////////////////


 function fonctionTarot(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tarot").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////MACHINE A VISITER/////////////////////////////////


 function fonctionMachineVisiter(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_machine_visiter").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////CARCAGNOLE/////////////////////////////////


 function fonctionCarcagnole(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_carcagnole").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ETIQUETTE/////////////////////////////////


 function fonctionEtiquette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_etiquette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ETAGERE CADRE/////////////////////////////////


 function fonctionEtagereCadre(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_etagere_cadre").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////TOUR_BOIS/////////////////////////////////


 function fonctionTourBois(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tour_bois").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////PERCEUSE/////////////////////////////////


 function fonctionPerceuse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_perceuse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////TUBE PORCELAINE/////////////////////////////////


 function fonctionTubePorcelaine(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tube_porcelaine").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////TOUR_BOIS/////////////////////////////////


 function fonctionCaisseAlu(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_caisse_alu").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Carton Pointeuse/////////////////////////////////


 function fonctionCartonPointeuse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_carton_pointeuse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ETAGERE STOCKAGE/////////////////////////////////


 function fonctionEtagereStockage(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_etagere_stockage").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ROUE AUGET/////////////////////////////////


 function fonctionRoueAuget(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_roue_auget").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////TROUSSE A OUTIL/////////////////////////////////


 function fonctionTrousseOutil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_trousse_outil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////METIER DEMONTE/////////////////////////////////


 function fonctionMetierDemonte(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_metier_demonte").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////RouleauFil/////////////////////////////////


 function fonctionRouleauFil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_rouleau_fil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Remettage/////////////////////////////////


 function fonctionRemettage(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_remettage").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////BobineFil/////////////////////////////////


 function fonctionBobineFil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_bobine_fil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////OutilBois/////////////////////////////////


 function fonctionOutilBois(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_outil_bois").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////DessinRemettage/////////////////////////////////


 function fonctionDessinRemettage(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_dessin_remettage").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////Mousse/////////////////////////////////


 function fonctionMousse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_mousse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////FermerCadre/////////////////////////////////


 function fonctionFermerCadre(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_fermer_cadre").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////Crochet/////////////////////////////////


 function fonctionCrochet(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_crochet").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////PorteCadre/////////////////////////////////


 function fonctionPorteCadre(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_porte_cadre").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////Maille/////////////////////////////////


 function fonctionMaille(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_maille").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////BaguetteEnvergure/////////////////////////////////


 function fonctionBaguetteEnvergure(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_baguette_envergure").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}
 ///////////////////////MachinePiquer/////////////////////////////////


 function fonctionMachinePiquer(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_machine_piquer").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////TissuJacquard/////////////////////////////////


 function fonctionTissuJacquard(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tissu_jacquard").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////PeigneRoseau/////////////////////////////////


 function fonctionPeigneRoseau(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_peigne_roseau").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////BaguetteAlu/////////////////////////////////


 function fonctionBaguetteAlu(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_baguette_alu").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////Lamelle/////////////////////////////////


 function fonctionLamelle(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lamelle").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////PetitPeigne/////////////////////////////////


 function fonctionPetitPeigne(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_petit_peigne").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Ordinateur/////////////////////////////////


 function fonctionOrdinateur(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_ordinateur").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////FilChaine/////////////////////////////////


 function fonctionFilChaine(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_fil_chaine").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////CadreBois/////////////////////////////////


 function fonctionCadreBois(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_cadre_bois").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////PeigneJetAir/////////////////////////////////


 function fonctionPeigneJetAir(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_peigne_jet_air").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////Envergure/////////////////////////////////


 function fonctionEnvergure(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_envergure").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////Tresse/////////////////////////////////


 function fonctionTresse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tresse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////Lacet/////////////////////////////////


 function fonctionLacet(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lacet").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////MetierTresse/////////////////////////////////


 function fonctionMetierTresse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_metier_tresse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////GalonHauteNouveaute/////////////////////////////////


 function fonctionGalonHauteNouveaute(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_galon_haute_nouveaute").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////EmboutLacet/////////////////////////////////


 function fonctionEmboutLacet(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_embout_lacet").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Baratte/////////////////////////////////


 function fonctionBaratte(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_baratte").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}
 ///////////////////////Frein/////////////////////////////////


 function fonctionFrein(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_frein").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Broche/////////////////////////////////


 function fonctionBroche(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_broche").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////GuideFil/////////////////////////////////


 function fonctionGuideFil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_guide_fil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}



 ///////////////////////NappeFil/////////////////////////////////


 function fonctionNappeFil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_nappe_fil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}

 ///////////////////////LunetteKProcess/////////////////////////////////


 function fonctionLunetteKProcess(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lunette_k_process").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}


 //////////////////////SupportBobine////////////////////////////////


 function fonctionSupportBobine(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_support_bobine").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}


 //////////////////////Poupee////////////////////////////////


 function fonctionPoupee(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_poupee").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}

 //////////////////////Lyre////////////////////////////////


 function fonctionLyre(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lyre").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}

 //////////////////////MoulinBarou////////////////////////////////


 function fonctionMoulinBarou(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_moulin_barou").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}

 //////////////////////AgrapheTriangulaire////////////////////////////////


 function fonctionAgrafeTriangulaire(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_agraphe_triangulaire").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}


 //////////////////////RecepteurCanetiere////////////////////////////////


 function fonctionRecepteurCanetiere(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_recepteur_canetiere").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}


 //////////////////////MachineVapeur////////////////////////////////


 function fonctionMachineVapeur(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_machine_vapeur").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}


 //////////////////////RemettageElectrique////////////////////////////////


 function fonctionRemettageElectrique(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_remettage_electrique").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}


 //////////////////////Ourdissoir///////////////////////////////


 function fonctionOurdissoir(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_ourdissoir").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}


 ///////////////////////Forge//////////////////////////////////


 function fonctionForge(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_forge").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////BombyxMori//////////////////////////////////


 function fonctionBombyxMori(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_bombyx_mori").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Poitriniere//////////////////////////////////


 function fonctionPoitriniere(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_poitriniere").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////EtabliOutil//////////////////////////////////


 function fonctionEtabliOutil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_etabli_outil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Duite//////////////////////////////////


 function fonctionDuite(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_duite").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ChasseNavette//////////////////////////////////


 function fonctionChasseNavette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_chasse_navette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////FilSynthetique//////////////////////////////////


 function fonctionFilSynthetique(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_fil_synthetique").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////CasseFil//////////////////////////////////


 function fonctionCasseFil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_casse_fil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}





 ///////////////////////Axe//////////////////////////////////


 function fonctionAxe(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_axe").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Gaziniere//////////////////////////////////


 function fonctionGaziniere(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_gaziniere").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////Tambour//////////////////////////////////


 function fonctionTambour(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tambour").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Stock//////////////////////////////////


 function fonctionStock(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_stock").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////BobineEtoile/////////////////////////////////


 function fonctionBobineEtoile(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_bobine_etoile").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";


}

 ///////////////////////RattrapeHuile//////////////////////////////////


 function fonctionRattrapeHuile(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_rattrape_huile").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////ReservoirHuile//////////////////////////////////


 function fonctionReservoirHuile(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_reservoir_huile").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}





 ///////////////////////PorteNavette//////////////////////////////////


 function fonctionPorteNavette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_porte_navette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}



 ///////////////////////PorteOutil//////////////////////////////////


 function fonctionPorteOutil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_porte_outil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}



 ///////////////////////Levier//////////////////////////////////


 function fonctionLevier(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_levier").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}



 ///////////////////////ChaineOurdie//////////////////////////////////


 function fonctionChaineOurdie(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_chaine_ourdie").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}




 ///////////////////////MachineNoueuse//////////////////////////////////


 function fonctionMachineNoueuse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_machine_noueuse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}




 ///////////////////////Rail//////////////////////////////////


 function fonctionRail(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_rail").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}


 ///////////////////////Chasse//////////////////////////////////


 function fonctionChasse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_chasse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}



 ///////////////////////Armure//////////////////////////////////


 function fonctionArmure(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_armure").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}



 ///////////////////////Lunette//////////////////////////////////


 function fonctionLunette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lunette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";

}



 ///////////////////////Ratiere//////////////////////////////////


 function fonctionRatiere(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_ratiere").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Pedale//////////////////////////////////


 function fonctionPedale(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_pedale").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Came//////////////////////////////////


 function fonctionCame(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_came").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////Toit//////////////////////////////////


 function fonctionToit(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_toit").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Presse//////////////////////////////////


 function fonctionPresse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_presse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Vanne//////////////////////////////////


 function fonctionVanne(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_vanne").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////TissuTechnique//////////////////////////////////


 function fonctionTissuTechnique(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tissu_technique").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////RouleauBrosse//////////////////////////////////


 function fonctionRouleauBrosse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_rouleau_brosse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////Laveuse//////////////////////////////////


 function fonctionLaveuse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_laveuse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////Ventilateur//////////////////////////////////


 function fonctionVentilateur(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_ventilateur").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////PeauChat//////////////////////////////////


 function fonctionPeauChat(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_peau_chat").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Compresseur//////////////////////////////////


 function fonctionCompresseur(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_compresseur").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////Etais//////////////////////////////////


 function fonctionEtais(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_etais").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////MachineFroid//////////////////////////////////


 function fonctionMachineFroid(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_machine_froid").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



 ///////////////////////Ecluse//////////////////////////////////


 function fonctionEcluse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_ecluse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}




 ///////////////////////BaquetGraisse//////////////////////////////////


 function fonctionBaquetGraisse(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_baquet_graisse").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////Capelette//////////////////////////////////


 function fonctionCapelette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_capelette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Tendeur//////////////////////////////////


 function fonctionTendeur(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_tendeur").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////ConePlastiqu//////////////////////////////////


 function fonctionConePlastique(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_cone_plastique").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////PortePeigne/////////////////////////////////


 function fonctionPortePeigne(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_porte_peigne").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

 ///////////////////////Egancette//////////////////////////////////


 function fonctionEgancette(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_egancette").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 ///////////////////////MetrageOutil//////////////////////////////////


 function fonctionMetrageOutil(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_metrage_outil").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}


 //////////////////////NavetteDemonstration//////////////////////////////////


 function fonctionNavetteDemonstration(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_navette_demonstration").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}



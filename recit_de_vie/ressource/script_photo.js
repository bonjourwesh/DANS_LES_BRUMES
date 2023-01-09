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


 ///////////////////////PAGE TRAME//////////////////////////////////


 function fonctionTrame(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_trame").style.display = "block";
document.getElementById("rectangle_droit").className= "fondOutils";
}

function fonctionFullTrame(){
    if ( document.getElementById("photo_trame").style.maxWidth != "100%"){
     document.getElementById("photo_trame").className = "pix_obj_full";
     document.getElementById("description_trame").style.display="none";
    }else{
     document.getElementById("photo_trame").className = "pix_obj";
    document.getElementById("description_trame").style.display="block";       
    }
}




//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%OBJ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%OBJ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%OBJ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 ///////////////////////PAGE RETRAITE//////////////////////////////////


 function fonctionMaisonRetraite(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_retraite").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 ///////////////////////HOSPICE//////////////////////////////////


 function fonctionHospice(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_hospice").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}



 ///////////////////////MATERNITE//////////////////////////////////


 function fonctionMaternite(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_maternite").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}



 ///////////////////////FACE POSTE/////////////////////////////////


 function fonctionFacePoste(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_face_poste").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////RUE MAUDURE/////////////////////////////////


 function fonctionRueMaudure(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_maudure").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 ///////////////////////RUE MAUDURE/////////////////////////////////


 function fonctionDevanture(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_devanture").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 ///////////////////////USINE DUSSUC/////////////////////////////////


 function fonctionUsineDussuc(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_dussuc").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////USINE PERRIER/////////////////////////////////


 function fonctionUsinePerrier(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_usine_perrier").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 ///////////////////////USINE SAINTE JULIE/////////////////////////////////


 function fonctionUsineSainteJulie(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_usine_sainte_julie").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 ///////////////////////FONDERIE BANCEL/////////////////////////////////


 function fonctionFonderieBancel(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_fonderie_bancel").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////ANCIENNE ECOLE/////////////////////////////////


 function fonctionAncienneEcole(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_ancienne_ecole").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 ///////////////////////SAINTE MARTHE////////////////////////////////


 function fonctionUsineSainteMarthe(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_usine_sainte_marthe").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////USINE GILLIER////////////////////////////////


 function fonctionUsineGillier(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_usine_gillier").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////USINE BLANC////////////////////////////////


 function fonctionUsineBlanc(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_usine_blanc").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////Avenue Colombier////////////////////////////////


 function fonctionAvenueColombier(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_avenue_colombier").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 ///////////////////////BASSIN DE RETENUE////////////////////////////////


 function fonctionBassin(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_bassin_retenue").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////CAFE////////////////////////////////


 function fonctionCafe(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_cafe").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////CANAL//////////////////////////////


 function fonctionCanal(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_canal").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////LAVOIR////////////////////////////////


 function fonctionLavoir(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_lavoir").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 ///////////////////////PARKING////////////////////////////////


 function fonctionParking(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_parking").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 ///////////////////////PATISSERIE////////////////////////////////


 function fonctionPatisserie(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_patisserie").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 //////////////////////PRE BATTOIR////////////////////////////////


 function fonctionCheminPreBattoir(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_pre_battoir").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 //////////////////////RIVIERE TERNAY////////////////////////////////


 function fonctionRiviereTernay(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_riviere_ternay").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

 //////////////////////RUE PERRONET////////////////////////////////


 function fonctionPerronet(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_perronet").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 //////////////////////TAILLIS VERT////////////////////////////////


 function fonctionTaillisVert(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_taillis_vert").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 //////////////////////USINE CATHEDRALE////////////////////////////////


 function fonctionUsineCathedrale(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_usine_cathedrale").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}


 //////////////////////MOULIN DU MAS////////////////////////////////


 function fonctionMoulinMas(){
    for (let i = 0; i < fiche_technique.length; i++) {
fiche_technique[i].style.display = "none";
}
document.getElementById("rectangle_droit").style.display = "block";
document.getElementById("fiche_moulin_mas").style.display = "block";
document.getElementById("rectangle_droit").className= "fondLieux";
}

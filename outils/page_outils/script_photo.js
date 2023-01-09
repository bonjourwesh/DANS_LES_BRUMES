 ///////////////////////PAGE CANETTE//////////////////////////////////


function fonctionFullPix(){
        let rectangle_droit = document.querySelector('#rectangle_droit').offsetWidth;
      let pix_marge = (rectangle_droit*30) / 100;
      let blop = (rectangle_droit-70) + "px";
    if ((document.querySelector(".pix_obj").style.maxWidth != blop) || (document.querySelector(".pix_obj").style.maxHeight != "80vh")){
     document.querySelector(".pix_obj").style.maxWidth = blop;
     document.querySelector(".pix_obj").style.maxHeight = "80vh";
     document.querySelector("#description").style.display="none";
          document.querySelector(".prev").style.display="none";
    document.querySelector(".next").style.display="none";
     document.querySelector(".row").style.display="none";
    }else{
     document.querySelector(".pix_obj").style.maxWidth = "40vw";
     document.querySelector(".pix_obj").style.maxHeight = "50vh";
    document.querySelector("#description").style.display="block";       
    document.querySelector(".prev").style.display="block";
    document.querySelector(".next").style.display="block";
     document.querySelector(".row").style.display="block";  
    }
}

function fonctionFullPix1(){
      let rectangle_droit = document.querySelector('#rectangle_droit').offsetWidth;
      let taille_pix = document.querySelector('#pix_obj_1').offsetWidth;
      let pix_marge = (rectangle_droit*30) / 100;
      let blop = (rectangle_droit-70) + "px";
    if ((document.querySelector("#pix_obj_1").style.maxWidth != blop) || (document.querySelector("#pix_obj_1").style.maxHeight != "80vh")){
     document.querySelector("#pix_obj_1").style.maxWidth = blop;
     document.querySelector("#pix_obj_1").style.maxHeight = "80vh";
     document.querySelector("#description").style.display="none";
          document.querySelector(".prev").style.display="none";
    document.querySelector(".next").style.display="none";
     document.querySelector(".row").style.display="none";
    }else{
     document.querySelector("#pix_obj_1").style.maxWidth = "40vw";
     document.querySelector("#pix_obj_1").style.maxHeight = "50vh";
    document.querySelector("#description").style.display="block";  
         document.querySelector(".prev").style.display="block";
    document.querySelector(".next").style.display="block";
     document.querySelector(".row").style.display="block";     
    }
}


function fonctionFullPix2(){
        let rectangle_droit = document.querySelector('#rectangle_droit').offsetWidth;
      let pix_marge = (rectangle_droit*30) / 100;
      let blop = (rectangle_droit-70) + "px";
    if ((document.querySelector("#pix_obj_2").style.maxWidth != blop) || (document.querySelector("#pix_obj_2").style.maxHeight != "80vh")){
     document.querySelector("#pix_obj_2").style.maxWidth = blop;
     document.querySelector("#pix_obj_2").style.maxHeight = "80vh";
     document.querySelector("#description").style.display="none";
          document.querySelector(".prev").style.display="none";
    document.querySelector(".next").style.display="none";
     document.querySelector(".row").style.display="none";
    }else{
     document.querySelector("#pix_obj_2").style.maxWidth = "40vw";
     document.querySelector("#pix_obj_2").style.maxHeight = "50vh";
    document.querySelector("#description").style.display="block";       
             document.querySelector(".prev").style.display="block";
    document.querySelector(".next").style.display="block";
     document.querySelector(".row").style.display="block";  
    }
}

function fonctionFullPix3(){
      let rectangle_droit = document.querySelector('#rectangle_droit').offsetWidth;
      let pix_marge = (rectangle_droit*30) / 100;
      let blop = (rectangle_droit-70) + "px";
    if ((document.querySelector("#pix_obj_3").style.maxWidth != blop) || (document.querySelector("#pix_obj_3").style.maxHeight != "80vh")){
     document.querySelector("#pix_obj_3").style.maxWidth = blop;
     document.querySelector("#pix_obj_3").style.maxHeight = "80vh";
     document.querySelector("#description").style.display="none";
          document.querySelector(".prev").style.display="none";
    document.querySelector(".next").style.display="none";
     document.querySelector(".row").style.display="none";
    }else{
     document.querySelector("#pix_obj_3").style.maxWidth = "40vw";
     document.querySelector("#pix_obj_3").style.maxHeight = "50vh";
    document.querySelector("#description").style.display="block";  
         document.querySelector(".prev").style.display="block";
    document.querySelector(".next").style.display="block";
     document.querySelector(".row").style.display="block";     
    }
}


function fonctionFullPix4(){
      let rectangle_droit = document.querySelector('#rectangle_droit').offsetWidth;
      let pix_marge = (rectangle_droit*30) / 100;
      let blop = (rectangle_droit-70) + "px";
    if ((document.querySelector("#pix_obj_4").style.maxWidth != blop) || (document.querySelector("#pix_obj_4").style.maxHeight != "80vh")){
     document.querySelector("#pix_obj_4").style.maxWidth = blop;
     document.querySelector("#pix_obj_4").style.maxHeight = "80vh";
     document.querySelector("#description").style.display="none";
          document.querySelector(".prev").style.display="none";
    document.querySelector(".next").style.display="none";
     document.querySelector(".row").style.display="none";
    }else{
     document.querySelector("#pix_obj_4").style.maxWidth = "40vw";
     document.querySelector("#pix_obj_4").style.maxHeight = "50vh";
    document.querySelector("#description").style.display="block";  
         document.querySelector(".prev").style.display="block";
    document.querySelector(".next").style.display="block";
     document.querySelector(".row").style.display="block";     
    }
}


///////////////////////SLIDER//////////////////////////////////

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
window.onload=function(){
      fonctionFondCooleur();
      fonctionTexteDepart();
    }

    let cooleurFond = sessionStorage.getItem("cooleur");




   ///////////////////////COULEUR CHARGEMENT//////////////////////////////////


function fonctionFondCooleur(){
  if (cooleurFond == "blanc"){
   document.querySelector('head > link').href = "./../ressource/style_fond_blanc.css"; 
  
  }else if (cooleurFond == "noir"){
    document.querySelector('head > link').href = "./../ressource/style_fond_noir.css"; 
  
  }else if (cooleurFond == null){
        document.querySelector('head > link').href = "./../ressource/style.css"; 
  }else{
       document.querySelector('head > link').href = "./../ressource/style.css"; 

  }
}


   ///////////////////////JOUR/NUIT//////////////////////////////////


function fonctionJour(style){
document.querySelector('head > link').href = "./../ressource/style_fond_blanc.css";
sessionStorage.setItem('cooleur', 'blanc');
}
function fonctionNuit(style){
document.querySelector('head > link').href = "./../style_fond_noir.css";
sessionStorage.setItem('cooleur', 'noir');}

function fonctionCouleur(style){
document.querySelector('head > link').href = "./../style.css";
sessionStorage.setItem('cooleur', 'couleur');}






/*Make resizable div by Hung Nguyen*/
function makeResizableDiv(div) {
  const element = document.querySelector(div);
  const resizers = document.querySelectorAll(div + ' .resizer')
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;
  for (let i = 0;i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_y = element.getBoundingClientRect().top;
      original_mouse_y = e.pageY;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
if (currentResizer.classList.contains('top-right')) {
        const height = original_height - (e.pageY - original_mouse_y)
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
      else {
        const width = original_width - (e.pageX - original_mouse_x)
        const height = original_height - (e.pageY - original_mouse_y)
        if (width > minimum_size) {
          element.style.width = width + 'px'
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
        if (height > minimum_size) {
          element.style.height = height + 'px'
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
        }
      }
    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
}

makeResizableDiv('.resizable')

 

   //////////////////////PRINT//////////////////////////////////

printPdf = function (pdfUrl) {
  if (!this.printedIframe) {
    this.printedIframe = document.createElement('iframe');
    document.body.appendChild(this.printedIframe);
    this.printedIframe.style.display = 'none';
    this.printedIframe.onload = function() {
      setTimeout(function() {
        this.printedIframe.focus();
        this.printedIframe.contentWindow.print();
      }, 100);
    };
  }
  this.printedIframe.src = pdfUrl;
}

  //////////////////////CAROUSSEL//////////////////////////////////

   var carousel = $('#carousel'),
    threshold = 150,
    slideWidth = 700,
    dragStart, 
    dragEnd;

$('#next').click(function(){ shiftSlide(-1) })
$('#prev').click(function(){ shiftSlide(1) })

carousel.on('mousedown', function(){
  if (carousel.hasClass('transition')) return;
  dragStart = event.pageX;
  $(this).on('mousemove', function(){
    dragEnd = event.pageX;
    $(this).css('transform','translateX('+ dragPos() +'px)')
  })
  $(document).on('mouseup', function(){
    if (dragPos() > threshold) { return shiftSlide(1) }
    if (dragPos() < -threshold) { return shiftSlide(-1) }
    shiftSlide(0);
  })
});

function dragPos() {
  return dragEnd - dragStart;
}

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
  setTimeout(function(){
    if (direction === 1) {
      $('.slide:first').before($('.slide:last'));

    } else if (direction === -1) {
      $('.slide:last').after($('.slide:first'));
    }
    carousel.removeClass('transition')
    carousel.css('transform','translateX(0px)'); 
  },700);
}

  //////////////////////LES SONS//////////////////////////////////


function togglePlayBistanclaque (e) {
  e = e || window.event;
  var btn = e.target;
  if (!audioBistanclaque.paused) {
    btn.classList.remove('active');
    document.getElementById('lettre_play').innerHTML = "Play";
    audioBistanclaque.pause();
    isPlaying = false;
  } else {
    btn.classList.add('active');
        document.getElementById('lettre_play').innerHTML = "Pause";
    audioBistanclaque.play();
    isPlaying = true;
  }
}



  //////////////////////LA BOITE A LIEN//////////////////////////////////


dragElement(document.getElementById("lien"));
    

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header1")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header1").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



  //////////////////////LA BOITE A LIEN//////////////////////////////////
function fermerLien(){
  document.getElementById("lien").style.display = "none";
}

    
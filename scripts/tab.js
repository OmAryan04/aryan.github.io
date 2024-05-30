var tabButtons=document.querySelectorAll(".tab_container .button_container button");
var tabContents=document.querySelectorAll(".tab_container .tab_content");

function showContent(index,colorcode){
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[index].style.backgroundColor=colorcode;
    tabButtons[index].style.color="white";
    tabContents.forEach(function(node){
        node.style.display="none";
        
    });
    tabContents[index].style.display="flex";
    tabContents[index].style.backgroundColor="colorcode";

}
showContent(0,"#b4111a");



function showPopup(id) {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex';

    for (var i = 1; i <= 15; i++) {
        var content = document.getElementById('popup_content' + i);
        
        if (i === id) {
            content.style.display = 'flex';
        } else {
            content.style.display = 'none';
        }
    }
}


function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}


let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
  const slides = document.getElementsByClassName("review_content");
  if (index >= slides.length) { slideIndex = 0 }
  if (index < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}

document.querySelector(".prevBtn").addEventListener("click", () => {
  showSlides(--slideIndex);
});

document.querySelector(".nextBtn").addEventListener("click", () => {
  showSlides(++slideIndex);
});



let mentorSlideIndex = 0;
mentorShowSlides(mentorSlideIndex);

function mentorShowSlides(mentorIndex) {
  const mentorSlides = document.getElementsByClassName("mentorreview_content");
  if (mentorIndex >= mentorSlides.length) { mentorSlideIndex = 0 }
  if (mentorIndex < 0) { mentorSlideIndex = mentorSlides.length - 1 }
  for (let i = 0; i < mentorSlides.length; i++) {
    mentorSlides[i].style.display = "none";
  }
  mentorSlides[mentorSlideIndex].style.display = "flex";
}

document.querySelector(".mentor_prevBtn").addEventListener("click", () => {
  mentorShowSlides(--mentorSlideIndex);
});

document.querySelector(".mentor_nextBtn").addEventListener("click", () => {
  mentorShowSlides(++mentorSlideIndex);
});



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.mentor_nextBtn',
            prevEl: '.mentor_prevBtn',
        },
        breakpoints: {
            // Breakpoints for responsiveness
            768: {
                slidesPerView: 1, // Show only 1 slide on smaller screens
            },
        },
    });
});




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var imgId = this.getAttribute("data-img-id"); // Get the data-img-id attribute value
    var outerimg = document.getElementById(imgId); // Get the outerimg element using the data attribute value
    if (panel.style.display === "flex") {
      panel.style.display = "none";
      panel.style.maxHeight = null; // Close panel
      outerimg.style.backgroundColor = ""; // Set background color to default when panel is hidden
      outerimg.style.borderRadius = ""; // Reset border radius when panel is hidden
    } else {
      panel.style.display = "flex";
      panel.style.maxHeight = panel.scrollHeight + "px"; // Open panel
      outerimg.style.backgroundColor = "#f5cdd0"; // Change background color when panel is shown
      outerimg.style.borderRadius = "100%"; // Reset border radius when panel is hidden
    }
  });
}

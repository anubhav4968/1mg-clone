var slideIndex = 1;

var myTimer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 3000);
});

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 3000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 3000);
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 3000);
  showSlides((slideIndex = n));
}



pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex);
  }, 3000);
};

// var otp = 880291;
document.getElementById("login_span").addEventListener("click", function () {
  let a = document.getElementById("account_1");
  let b = document.getElementById("account_2");
 
  a.style.display = "none";
  b.style.display = "block";

});
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.getElementById("signup_span").addEventListener("click", function () {
  let a = document.getElementById("account_2");
  let b = document.getElementById("account_1");
  
  a.style.display = "none";
  b.style.display = "block";

});




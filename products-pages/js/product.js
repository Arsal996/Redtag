// delivey and return js 

function myDescription() {
    let mdp = document.getElementById("desc-content");
    if (mdp.style.display === "block") {
      mdp.style.display = "none";
    } else {
      mdp.style.display = "block";
    }
    }

function myDelivery() {
    let md = document.getElementById("delv-content");
    if (md.style.display === "block") {
      md.style.display = "none";
    } else {
      md.style.display = "block";
    }
    }

// mobile screen slider 

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

// for slider change images
  
 var bigImg1 = document.getElementById('big-img');
 var smallImg1 = document.getElementsByClassName('small-img');

 smallImg1[0].onclick = function(){
    bigImg1.src = smallImg1[0].src;
    smallImg1.style.display = "none";
 }
 smallImg1[1].onclick = function(){
    bigImg1.src = smallImg1[1].src;
 }
 smallImg1[2].onclick = function(){
    bigImg1.src = smallImg1[2].src;
 }
 smallImg1[3].onclick = function(){
    bigImg1.src = smallImg1[3].src;
 }

//  delivery policy section js 

function closeFunction() {
  let delv = document.getElementById("delivery-policy");
  let sc = document.getElementById("size-chart");
  if (delv.style.display = "block") {
    delv.style.display = "none";
  }
  if (sc.style.display = "block") {
    sc.style.display = "none";
  }
}

function deliveryPolicy() {
  let sf = document.getElementById("delivery-policy");
  if (sf.style.display === "block") {
    sf.style.display = "none";
  } else {
    sf.style.display = "block";
  }
}

function sizeChart() {
  let sizeChart = document.getElementById("size-chart");
  if (sizeChart.style.display === "block") {
    sizeChart.style.display = "none";
  } else {
    sizeChart.style.display = "block";
  }
}


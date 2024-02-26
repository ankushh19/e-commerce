let main = window.location.search;
function changeWindow() {
  var mainImg = document.getElementById("mainimg");
  var smallImg = document.getElementsByClassName("small-img");

  smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
  };

  smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
  };

  smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
  };

  smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
  };
  if (main === "?shirt=7") {
    mainImg.src = "img/products/n1.jpg";
    smallImg[0].src = "img/products/n1.jpg";
    smallImg[1].src = "img/products/n2.jpg";
    smallImg[2].src = "img/products/n3.jpg";
    smallImg[3].src = "img/products/n4.jpg";
  } else if (main === "?shirt=8") {
    mainImg.src = "img/products/n2.jpg";
    smallImg[0].src = "img/products/n2.jpg";
    smallImg[1].src = "img/products/n1.jpg";
    smallImg[2].src = "img/products/n3.jpg";
    smallImg[3].src = "img/products/n4.jpg";
  } else if (main === "?shirt=9") {
    mainImg.src = "img/products/n3.jpg";
    smallImg[0].src = "img/products/n3.jpg";
    smallImg[1].src = "img/products/n1.jpg";
    smallImg[2].src = "img/products/n2.jpg";
    smallImg[3].src = "img/products/n4.jpg";
  } else if (main === "?shirt=10") {
    mainImg.src = "img/products/n4.jpg";
    smallImg[0].src = "img/products/n4.jpg";
    smallImg[1].src = "img/products/n1.jpg";
    smallImg[2].src = "img/products/n2.jpg";
    smallImg[3].src = "img/products/n3.jpg";
  } else if (main === "?shirt=2") {
    mainImg.src = "img/products/f2.jpg";
    smallImg[0].src = "img/products/f2.jpg";
    smallImg[1].src = "img/products/f1.jpg";
  } else if (main === "?shirt=3") {
    mainImg.src = "img/products/f3.jpg";
    smallImg[0].src = "img/products/f3.jpg";
    smallImg[2].src = "img/products/f1.jpg";
  } else if (main === "?shirt=4") {
    mainImg.src = "img/products/f4.jpg";
    smallImg[0].src = "img/products/f4.jpg";
    smallImg[3].src = "img/products/f1.jpg";
  } else if (main === "?shirt=5") {
    mainImg.src = "img/products/f5.jpg";
    smallImg[0].src = "img/products/f5.jpg";
    smallImg[1].src = "img/products/f6.jpg";
    smallImg[2].src = "img/products/f7.jpg";
    smallImg[3].src = "img/products/f8.jpg";
  } else if (main === "?shirt=6") {
    mainImg.src = "img/products/f6.jpg";
    smallImg[0].src = "img/products/f6.jpg";
    smallImg[1].src = "img/products/f5.jpg";
  } else if (main === "?bottom=1") {
    mainImg.src = "img/products/f7.jpg";
    smallImg[0].src = "img/products/f7.jpg";
    smallImg[1].src = "img/products/n2.jpg";
    smallImg[2].src = "img/products/n3.jpg";
    smallImg[3].src = "img/products/n4.jpg";
  } else if (main === "?top=1") {
    mainImg.src = "img/products/f8.jpg";
    smallImg[0].src = "img/products/f8.jpg";
    smallImg[1].src = "img/products/n2.jpg";
    smallImg[2].src = "img/products/n3.jpg";
    smallImg[3].src = "img/products/n4.jpg";
  } else if (main === "?shirt=11") {
    mainImg.src = "img/products/n5.jpg";
    smallImg[0].src = "img/products/n5.jpg";
    smallImg[1].src = "img/products/n6.jpg";
    smallImg[2].src = "img/products/n7.jpg";
    smallImg[3].src = "img/products/n8.jpg";
  } else if (main === "?bottom=2") {
    mainImg.src = "img/products/n6.jpg";
    smallImg[0].src = "img/products/n6.jpg";
    smallImg[1].src = "img/products/n5.jpg";
    smallImg[2].src = "img/products/n7.jpg";
    smallImg[3].src = "img/products/n8.jpg";
  } else if (main === "?shirt=12") {
    mainImg.src = "img/products/n7.jpg";
    smallImg[0].src = "img/products/n7.jpg";
    smallImg[1].src = "img/products/n5.jpg";
    smallImg[2].src = "img/products/n6.jpg";
    smallImg[3].src = "img/products/n8.jpg";
  } else if (main === "?shirt=13") {
    mainImg.src = "img/products/n8.jpg";
    smallImg[0].src = "img/products/n8.jpg";
    smallImg[1].src = "img/products/n5.jpg";
    smallImg[2].src = "img/products/n6.jpg";
    smallImg[3].src = "img/products/n7.jpg";
  }
}
changeWindow();

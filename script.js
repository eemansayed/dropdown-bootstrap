const featureBox = document.querySelector(".features-box");
const icon = document.querySelector(".features-box .icon svg");
const productInfoHeading = document.querySelector(".product-info h1");
const productInfoParagraph = document.querySelector(".product-info p");

featureBox.addEventListener("mouseover", () => {
  icon.style.color = "#0d6efd";
  productInfoHeading.style.color = "#0d6efd";
  productInfoParagraph.style.color = "#0d6efd";
});

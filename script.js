const dropdownFeatures = document.querySelector(".dropdown-section.features");
const featureBox = document.querySelector(".features-box");
const icon = document.querySelector(".features-box .icon svg");
const productInfoHeading = document.querySelector(".product-info h1");
const productInfoParagraph = document.querySelector(".product-info p");
const featureBoxSupport = document.querySelector(".features-box.support");
const iconSupport = document.querySelector(".features-box.support .icon svg");
const productInfoHeadingSupport = document.querySelector(
  ".features-box.support .product-info h1"
);
const productInfoParagraphSupport = document.querySelector(
  ".features-box.support .product-info p"
);

featureBox.addEventListener("mouseover", (event) => {
  icon.style.color = "#0d6efd";
  productInfoHeading.style.color = "#0d6efd";
  productInfoParagraph.style.color = "#0d6efd";

  event.stopPropagation();
});

dropdownFeatures.addEventListener("mouseover", () => {
  icon.style.color = "#212529";
  productInfoHeading.style.color = "#212529";
  productInfoParagraph.style.color = "#212529";
});

featureBoxSupport.addEventListener("mouseover", (event) => {
  iconSupport.style.color = "#0d6efd";
  productInfoHeadingSupport.style.color = "#0d6efd";
  productInfoParagraphSupport.style.color = "#0d6efd";

  event.stopPropagation();
});

dropdownFeatures.addEventListener("mouseover", () => {
  iconSupport.style.color = "#212529";
  productInfoHeadingSupport.style.color = "#212529";
  productInfoParagraphSupport.style.color = "#212529";
});

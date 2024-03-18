const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navlist");
const addToCart = document.getElementById("addCart");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("navlist-active");
});

addToCart.addEventListener("click", () => {
  alert("Addind things to cart feature is yet not to created!");
});

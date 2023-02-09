const menuEmail = document.querySelector(".navbar-email");
const destokMenu = document.querySelector(".desktop-menu");
const hamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector(".cards-container");

//Eliminar clase

menuEmail.addEventListener("click", toggleDestokMenu);
hamMenu.addEventListener("click", toggleMobilMenu);

function toggleDestokMenu() {
  destokMenu.classList.toggle("inactive");
}

function toggleMobilMenu() {
  mobileMenu.classList.toggle("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 300,
  image:
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
  name: "Mause",
  price: 80,
  image:
    "https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg?auto=compress&cs=tinysrgb&w=600",
});


function renderProducts ( list){
  for (product of list) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const img = document.createElement("img");
    img.setAttribute("src", product.image);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    productInfoDiv.append(productName,productPrice);
  
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.append(productInfoDiv,productInfoFigure);
  
    productCard.append(img,productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
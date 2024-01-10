    let iconCart = document.querySelector(".icon-cart");
    const cartTab = document.querySelector("body");
    let closeCart = document.querySelector(".close");
   let listProductHTML = document.querySelector('.listProduct');

listProducts = [];

    iconCart.addEventListener("click", () => {
    cartTab.classList.toggle("showCart");
        console.log("hello");
        //cartTab.classList.toggle("showCart");
    })

    closeCart.addEventListener("click", () => {
        cartTab.classList.toggle('showCart')
    })

  const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
    listProducts = data;
    console.log(listProducts);
})
}
initApp();
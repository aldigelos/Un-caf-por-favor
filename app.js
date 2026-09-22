alert("app.js está funcionando");
let cart = [];

const buttons = document.querySelectorAll(".product button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const product = button.parentElement;

        const name = product.querySelector("h3").textContent;
        const priceText = product.querySelector("span").textContent;

        const price = Number(
            priceText.replace("$", "").replace(".", "")
        );

        cart.push({
            name: name,
            price: price
        });
        
        document.getElementById("cart-count").textContent = cart.length;
        alert(`${name} fue agregado al carrito ☕`);

        console.log("Carrito:", cart);
    });
});

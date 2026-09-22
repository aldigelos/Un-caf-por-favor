let cart = [];
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {
        const itemElement = document.createElement("div");

        itemElement.classList.add("cart-item");

        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toLocaleString("es-AR")}</span>
        `;

        cartItems.appendChild(itemElement);

        total += item.price;
    });

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Tu carrito está vacío.</p>";
    }

    cartTotal.textContent = total.toLocaleString("es-AR");
    cartCount.textContent = cart.length;
}
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
        
        updateCart();
        alert(`${name} fue agregado al carrito ☕`);

        console.log("Carrito:", cart);
    });
});

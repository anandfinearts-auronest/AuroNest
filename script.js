let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    document.querySelector('[data-cart-count]').textContent = cart.length;
}

function showCart() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    let items = cart.map(item => `${item.name} - $${item.price}`).join('\n');
    let total = cart.reduce((sum, item) => sum + item.price, 0);

    alert(`Items:\n${items}\n\nTotal: $${total}`);
}
``
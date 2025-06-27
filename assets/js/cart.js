document.addEventListener('DOMContentLoaded', function () {
    const cartKey = 'cart_items';

    function getCart() {
        return JSON.parse(localStorage.getItem(cartKey)) || [];
    }

    function saveCart(cart) {
        localStorage.setItem(cartKey, JSON.stringify(cart));
    }

    function addToCart(productId) {
        const cart = getCart();
        const existing = cart.find(item => item.id === productId);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id: productId, qty: 1 });
        }

        saveCart(cart);
        alert('Товар добавлен в корзину!');
    }

    // Delegated click listener
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();

            const productId = parseInt(e.target.dataset.productId);
            if (!isNaN(productId)) {
                addToCart(productId);
            }
        }
    });
});

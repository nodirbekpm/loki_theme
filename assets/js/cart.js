document.addEventListener('DOMContentLoaded', function () {
    const cartKey = 'cart_items';

    function getCart() {
        return JSON.parse(localStorage.getItem(cartKey)) || [];
    }

    function saveCart(cart) {
        localStorage.setItem(cartKey, JSON.stringify(cart));
    }

    function productCountShow(){
        const cartItems = JSON.parse(localStorage.getItem('cart_items')) || [];
        const totalCount = cartItems.reduce((sum, item) => sum + (parseInt(item.qty) || 0), 0);

        counterSpans = document.querySelectorAll(".basket_counter span");

        counterSpans.forEach(span => {
            span.textContent = totalCount;
        });
    }
    productCountShow();


    function addToCart(productId) {
        const cart = getCart();
        const existing = cart.find(item => item.id === productId);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id: productId, qty: 1 });
        }

        saveCart(cart);
        productCountShow();
        alert('Товар добавлен в корзину!');
    }

    // Delegated click listener
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart-btn') || e.target.classList.contains('btn-add-card')) {
            e.preventDefault();
			console.log('Clicked');

            const productId = parseInt(e.target.dataset.productId);
            if (!isNaN(productId)) {
                addToCart(productId);
            }
        }
		
    });

});

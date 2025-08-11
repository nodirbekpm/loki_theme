document.addEventListener('DOMContentLoaded', function () {
    const cartKey = 'cart_items';
    const likeKey = 'liked_items';

    // ============= SAVAT FUNKSIYALARI =================
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
            if (totalCount > 0) {
                span.style.display = 'inline-block'; // yoki block
                span.textContent = totalCount;
            } else {
                span.style.display = 'none';
            }
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


    // ======== LIKE FUNKSIYALARI ========
    function getLikes() {
        return JSON.parse(localStorage.getItem(likeKey)) || [];
    }

    function saveLikes(likes) {
        localStorage.setItem(likeKey, JSON.stringify(likes));
    }

    function likeCountShow(){
        const likes = getLikes();
        const totalLikes = likes.length;

        const likeCounterSpans = document.querySelectorAll(".like_counter span");
        likeCounterSpans.forEach(span => {
            if (totalLikes > 0) {
                span.style.display = 'inline-block'; // yoki block
                span.textContent = totalLikes;
            } else {
                span.style.display = 'none';
            }
        });
    }
    likeCountShow();

    function toggleLike(productId, button) {
        let likes = getLikes();
        const index = likes.indexOf(productId);

        if (index === -1) {
            likes.push(productId);
            button.classList.add('active');
        } else {
            likes.splice(index, 1);
            button.classList.remove('active');
        }

        saveLikes(likes);
        likeCountShow();
    }

    // LIKE CLICK LISTENER
    document.addEventListener('click', function (e) {
        const likeBtn = e.target.closest('.like_button');
        if (likeBtn) {
            console.log("Salom")
            e.preventDefault();
            const productId = parseInt(likeBtn.dataset.productId);
            if (!isNaN(productId)) {
                toggleLike(productId, likeBtn);
            }
        }
    });

    // Sahifa yuklanganda like bosilganlarini active qilish
    const currentLikes = getLikes();
    document.querySelectorAll('.like_button').forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        if (currentLikes.includes(productId)) {
            btn.classList.add('active');
        }
    });

});

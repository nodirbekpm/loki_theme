<?php
/*
 * Template Name: Корзинка
 */

get_header();
?>

<div class="cart">
    <div class="container special">
        <div class="header-cart">
            <div class="header-container">
                <div class="header-left">
                    <a href="#"><i class="fas fa-arrow-left"></i> Вернуться к покупкам</a>
                </div>
                <div class="header-center"><img src="img/logo.svg" alt=""><span>Интернет-магазин каминов и печей</span>
                </div>
                <div class="header-right">+7 495 125-30-27</div>
            </div>
        </div>

        <div class="cart-wrap">
            <div class="cart-title">Моя корзина</div>

            <div class="cheaper-banner">
                <img class="image_desktop" src="img/warn.svg" alt="">
                <img class="image_mobile" src="img/tag_cart.svg" alt="">
                <span>ВИДЕЛИ ТОВАРЫ КОРЗИНЫ ГДЕ-ТО ДЕШЕВЛЕ?</span>
                <span>Просто укажите вашу цену здесь:</span>
                <!-- <div class="cheaper-banner-btn">
                    <a href="">ваша цена</a>
                </div> -->
                <form class="footer__subscribe">
                    <input type="number" placeholder="ВАША ЦЕНА" class="footer__input">
                    <button class="footer__submit" type="submit" class=""><img src="img/arrow2.svg" alt=""></button>
                </form>
            </div>
            <div class="products-list-wrap">

                <div id="products-list" class="products-list">


                    <button class="clear-cart"><img src="img/trash_icon.svg" alt=""> Очистить корзину</button>
                </div>

                <div class="cart-summary">
                    <div class="summary-title">Корзина</div>
                    <div class="summary-row">
                        <span>3 товара</span>
                        <span>66560 ₽</span>
                    </div>
                    <div class="summary-row">
                        <span>Итого к оплате</span>
                        <span>35 480 ₽</span>
                    </div>
                    <div class="summary-row total-row">
                        <span>Ввести код купона</span>
                    </div>
                    <div class="cart-summary-btn-wrap">


                        <button class="checkout-btn" onclick="window.location.href='/корзина-шаг-2/'">Оформить заказ</button>
                        <button class="one-click-btn" onclick="window.location.href='/корзина-шаг-2/'">Купить в 1 клик</button>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<script>

    function initQuantityControls() {
        const quantityControls = document.querySelectorAll(".quantity-control");

        quantityControls.forEach(control => {
            const minusBtn = control.querySelector(".minus");
            const plusBtn = control.querySelector(".plus");
            const input = control.querySelector(".quantity-input");

            if (!minusBtn || !plusBtn || !input) return;

            minusBtn.addEventListener("click", () => {
                let value = parseInt(input.value) || 1;
                if (value > 1) {
                    input.value = value - 1;
                    updateProductTotal(control);
                }
            });

            plusBtn.addEventListener("click", () => {
                let value = parseInt(input.value) || 1;
                input.value = value + 1;
                updateProductTotal(control);
            });

            input.addEventListener("input", () => {
                let value = parseInt(input.value);
                if (isNaN(value) || value < 1) {
                    input.value = 1;
                }
                updateProductTotal(control);
            });
        });

        updateCartSummary(); // sahifa yuklanganda hisoblab chiqadi
    }

    function updateProductTotal(control) {
        const input = control.querySelector(".quantity-input");
        const qty = parseInt(input.value) || 1;

        const container = control.closest(".product-item");
        const priceEl = container.querySelector(".current-price");
        const price = parseInt(priceEl.textContent.replace(/\s/g, '')) || 0;

        const sumEl = container.querySelector(".prices-summ");
        const newSum = qty * price;

        sumEl.textContent = formatPrice(newSum) + " ₽";

        updateLocalStorageQty(input.dataset.productId, qty);
        updateCartSummary();
    }

    function updateCartSummary() {
        const productItems = document.querySelectorAll(".product-item");
        let totalQty = 0;
        let totalPrice = 0;

        productItems.forEach(item => {
            const qty = parseInt(item.querySelector(".quantity-input").value) || 1;
            const price = parseInt(item.querySelector(".current-price").textContent.replace(/\s/g, '')) || 0;

            totalQty += qty;
            totalPrice += qty * price;
        });

        const totalQtyEl = document.querySelector(".summary-row span");
        const totalPriceEl = document.querySelector(".summary-row span:nth-child(2)");
        const finalTotalEl = document.querySelector(".summary-row + .summary-row span:nth-child(2)");

        if (totalQtyEl) totalQtyEl.textContent = `${totalQty} товара`;
        if (totalPriceEl) totalPriceEl.textContent = formatPrice(totalPrice) + " ₽";
        if (finalTotalEl) finalTotalEl.textContent = formatPrice(totalPrice) + " ₽";
    }

    function updateLocalStorageQty(productId, qty) {
        const cart = JSON.parse(localStorage.getItem('cart_items')) || [];
        const item = cart.find(p => parseInt(p.id) === parseInt(productId));
        if (item) item.qty = qty;
        localStorage.setItem('cart_items', JSON.stringify(cart));
    }

    function formatPrice(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    document.addEventListener('DOMContentLoaded', function () {
        const cart = JSON.parse(localStorage.getItem('cart_items')) || [];

        if (cart.length === 0) {
            document.getElementById('products-list').innerHTML = '';
            return;
        }

        fetch(ajaxurl, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
                action: 'get_cart_products',
                cart: JSON.stringify(cart)
            })
        })
            .then(res => res.text())
            .then(html => {
                document.getElementById('products-list').innerHTML = html;
                initQuantityControls();
            });


        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('clear-cart')) {
                e.preventDefault();

                if (!confirm('Вы уверены, что хотите очистить корзину?')) return;

                localStorage.removeItem('cart_items');

                const productList = document.getElementById('products-list');
                if (productList) {
                    productList.innerHTML = '';
                }
            }
        });

    });

</script>

<?php get_footer(); ?>


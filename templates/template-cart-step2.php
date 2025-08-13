<?php
/*
 * Template Name: Корзина шаг 2
 */

get_header();
?>

<div class="checkout">
    <div class="container">
        <div class="checkout-title">Оформление заказа</div>

        <div class="products-list-wrap">

            <div class="product-form">
                <div class="product-form-title">Укажите Ваши данные</div>

                <?php echo do_shortcode('[contact-form-7 id="400a9f4" title="Корзина шаг 2"]'); ?>
                <!-- Formani Contact Form 7 orqali chiqaramiz -->
            </div>

            <div class="checkout-summary" id="checkout-summary">
                <div class="summary-title">Ваш заказ</div>
                <div id="products-list"></div>
<!--                <div class="summary-row total-row">-->
<!--                    <span>Итого к оплате:</span>-->
<!--                    <span id="total-price">0 ₽</span>-->
<!--                </div>-->

                <div class="checkout-summary-btn-wrap">
                    <button class="checkout-btn">Оформить заказ</button>
                    <div class="checkout-summary-politics">
                        Завершая оформление заказа, я
                        соглашаюсь с условиями политики
                        конфиденциальности.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const cart = JSON.parse(localStorage.getItem('cart_items')) || [];
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

        if (cart.length === 0) {
            document.getElementById('products-list').innerHTML = '<p>Корзинка пуста.</p>';
            return;
        }

        fetch(ajaxurl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                action: 'get_cart2_products',
                cart: JSON.stringify(cart)
            })
        })
            .then(res => res.text())
            .then(html => {
                document.getElementById('products-list').innerHTML = html;

                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                const items = tempDiv.querySelectorAll('.summary-row');
                let total = 0;

                const form = document.querySelector('form.wpcf7-form');

                items.forEach(item => {
                    const title = item.querySelector('span:nth-child(1)')?.innerText || '';
                    const priceText = item.querySelector('span:nth-child(2)')?.innerText || '';
                    const match = priceText.match(/(\d+)\s*\D*\s*([\d\s]+)\s*₽/);

                    if (match) {
                        const qty = parseInt(match[1]);
                        const price = parseInt(match[2].replace(/\s/g, ''));
                        total += qty * price;

                        if (form) {
                            const input = document.createElement('input');
                            input.type = 'hidden';
                            input.name = 'order_info[]';
                            input.value = `${title} | ${qty}шт. x ${price}₽`;
                            form.appendChild(input);
                        }
                    }
                });

                // document.getElementById('total-price').innerText = total.toLocaleString('ru-RU') + ' ₽';
            });
    });
</script>

<?php get_footer(); ?>

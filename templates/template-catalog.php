<?php
/*
 * Template Name: Katalog
 */
get_header(); ?>
    <div class="catalog">
        <div class="container">
            <div class="catalog_info">
                <a href="#" class="text">Каталог</a>
                <div class="text">Современные камины</div>
            </div>

            <div class="catalog_title">
                Современные камины
            </div>

            <div class="catalog-top-controls">
                <div class="popular-categories">
                    <div class="category-buttons">
                        <a href="#" class="category-btn">Подвесные</a>
                        <a href="#" class="category-btn">Пристенные</a>
                        <a href="#" class="category-btn">Угловые</a>
                        <a href="#" class="category-btn">Островные</a>
                    </div>
                </div>
                <div class="sorting">
                    <span class="sorting-label">Сортировать по:</span>
                    <div class="filter_mobile" onclick="toggleCatalogFilters()">Фильтры</div>
                    <select class="sorting-select">
                        <option value="popular">Популярности</option>
                        <option value="price-asc">Цене (по возрастанию)</option>
                        <option value="price-desc">Цене (по убыванию)</option>
                        <option value="newest">Новинкам</option>
                        <option value="rating">Рейтингу</option>
                    </select>
                </div>


            </div>


            <div class="catalog-container">

                <aside class="catalog-filters" id="catalog-filters">
                    <div class="filter_container">
                        <div class="filter_close_button" onclick="window.hideCatalogFilters()"><img src="img/close.svg" alt=""></div>
                        <div class="filter-section">
                            <h3 class="filter-title">Категории</h3>
                            <div class="filter-section-categorys">
                                <div class="filter-section-category filter-section-category_active">Комплекты мебели для ванной</div>
                                <div class="filter-section-category">Тумбы с раковиной</div>
                                <div class="filter-section-category">Базы</div>
                                <div class="filter-section-category">Зеркала в ванную</div>
                                <div class="filter-section-category">Шкафчики с зеркалом в ванную</div>
                                <div class="filter-section-category">Шкафы-пеналы для ванной</div>

                            </div>
                        </div>
                        <div class="filter-section">
                            <h3 class="filter-title">Цена, ₽</h3>
                            <div class="price-range-slider">

                                <div class="price-inputs">
                                    <input type="number" class="price-input min-input" value="0">
                                    <span class="price-separator">-</span>
                                    <input type="number" class="price-input max-input" value="2390000">
                                </div>
                                <div class="range-slider">
                                    <input type="range" class="min-price" min="0" max="2390000" value="0">
                                    <input type="range" class="max-price" min="0" max="2390000" value="2390000">
                                </div>
                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title">Бренд</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Loki </span>
                                    <span class="filter-count">(61)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Ergofocus </span>
                                    <span class="filter-count">(1)</span>
                                </label>

                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title filter-title_close">Форма</h3>
                            <div class="filter-checkboxes filter-content_close">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Прямоугольная </span>
                                    <span class="filter-count">(19)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Круглая </span>
                                    <span class="filter-count">(8)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Квадратная </span>
                                    <span class="filter-count">(1)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Закругленная </span>
                                    <span class="filter-count">(12)</span>
                                </label>

                            </div>
                        </div>
                        <div class="filter-section">
                            <h3 class="filter-title">Цвет</h3>
                            <div class="filter-checkboxes ">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Белый</span>
                                    <span class="filter-count">(12)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Белый глянец</span>
                                    <span class="filter-count">(93)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Белый матовый</span>
                                    <span class="filter-count">(14)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Черный</span>
                                    <span class="filter-count">(10)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Графит</span>
                                    <span class="filter-count">(19)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Светлый дуб</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Табачный дуб</span>
                                    <span class="filter-count">(8)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Орех</span>
                                    <span class="filter-count">(17)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Мятный</span>
                                    <span class="filter-count">(6)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Серый</span>
                                    <span class="filter-count">(4)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Серый шелк</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Светло-голубой</span>
                                    <span class="filter-count">(2)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Венге</span>
                                    <span class="filter-count">(1)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Темное дерево</span>
                                    <span class="filter-count">(14)</span>
                                </label>

                            </div>
                        </div>
                        <div class="filter-section">
                            <h3 class="filter-title">Размер</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">30 см</span>
                                    <span class="filter-count">(18)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">35 см</span>
                                    <span class="filter-count">(9)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">40 см</span>
                                    <span class="filter-count">(23)</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">45 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">55 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">60 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">65 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">75 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">80 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">100 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">110 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">115 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="filter-name">120 см</span>
                                    <span class="filter-count">(5)</span>
                                </label>

                            </div>
                        </div>
                        <div class="filter-section">
                            <h3 class="filter-title">Установка</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Подвесная</span>
                                    <span class="filter-count">(113)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Напольная </span>
                                    <span class="filter-count">(48)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Для стиральной машины </span>
                                    <span class="filter-count">(4)</span>
                                </label>

                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title">Функция антизапотевания</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(6)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(36)</span>
                                </label>

                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title">Встроенные часы</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(6)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(34)</span>
                                </label>
                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title">Косметическое зеркало</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(8)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(32)</span>
                                </label>
                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title">Коллекция</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Sensation</span>
                                    <span class="filter-count">(113)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Inspire 2.0 </span>
                                    <span class="filter-count">(48)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Spirit 2.0 </span>
                                    <span class="filter-count">(4)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Spirit 2.1 </span>
                                    <span class="filter-count">(113)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Func</span>
                                    <span class="filter-count">(48)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Like </span>
                                    <span class="filter-count">(4)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Gem  </span>
                                    <span class="filter-count">(113)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Gem S </span>
                                    <span class="filter-count">(48)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">X-Joy</span>
                                    <span class="filter-count">(4)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Awe</span>
                                    <span class="filter-count">(1)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Spirit</span>
                                    <span class="filter-count">(2)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Sense </span>
                                    <span class="filter-count">(2)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Pulse </span>
                                    <span class="filter-count">(4)</span>
                                </label>

                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title">Товар со скидкой</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Да</span>
                                    <span class="filter-count">(136)</span>
                                </label>

                                <label class="filter-checkbox">
                                    <input type="checkbox" >
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Нет</span>
                                    <span class="filter-count">(32)</span>
                                </label>
                            </div>
                        </div>

                        <div class="filter-section">
                            <h3 class="filter-title">Показать</h3>
                            <div class="filter-checkboxes">
                                <label class="filter-checkbox">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-name">Только в наличии</span>
                                    <span class="filter-count">(136)</span>
                                </label>

                            </div>
                        </div>

                        <div class="action_buttons">

                            <div class="btn_clear action_button">
                                <a href="">Сбросить</a>
                            </div>

                            <div class="btn_show action_button">
                                <a href="">Показать</a>
                            </div>

                        </div>


                    </div>
                </aside>


                <div class="catalog-products-wrap">
                    <main class="catalog-products">
                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>



                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- product_card -->
                        <div class="product-card">
                            <div class="product-image">
                                <img src="img/item.png" alt="Название товара" class="product-img">
                            </div>
                            <div class="product-card__top">
                                <img src="img/checking.svg" alt="">
                                <img src="img/addlikes.svg" alt="">

                            </div>
                            <div class="product-details">
                                <div class="product-details__cont">
                                    <div class="product-title">LOKI</div>
                                    <div class="product-article">
                                        Код: 1234
                                    </div>
                                </div>

                                <div class="product-description">
                                    Чугунная печь Norway Green - идеальное решение для создания уютной и комфортной атмосферы в вашем доме.
                                </div>
                                <div class="product-wrap">
                                    <div class="product-prices">
                                        <div class="product-prices-wrap">
                                            <span class="current-price">32 780 ₽ </span>    <span class="product-badge">-27%</span>
                                        </div>
                                        <span class="old-price">23 980 ₽</span>
                                    </div>



                                    <button class="add-to-cart-btn">

                                        В корзину
                                    </button>
                                </div>
                                <div class="product-yandex">
                                    <img src="img/plus.svg" alt="">
                                    1 199 баллов Плюса кэшбэк в
                                    <img src="img/ya-pay.svg" alt="">
                                </div>
                                <div class="product-split">
                                    <img src="img/cask.svg" alt="">
                                    х4  платежа в
                                    <img src="img/ya-split.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </main>


                    <div class="catalog-bottom-controls">
                        <button class="load-more">Показать еще</button>
                        <div class="catalog-bottom-controls-wrap">
                            <div class="pagination-count">
                                Показаны 28 из 240
                            </div>

                            <div class="pagination-bottom">
                                <a href="#" class="pagination-link active">1</a>
                                <a href="#" class="pagination-link">2</a>
                                <a href="#" class="pagination-link">3</a>
                                <a href="#" class="pagination-link">4</a>
                                <a href="#" class="pagination-link">5</a>

                                <a href="#" class="pagination-link next">></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="simple">
        <div class="container">
            <div class="simple-big-text">
                Добро пожаловать в Loki.ru — ваш идеальный источник тепла и уюта! <br>
                Наш интернет-магазин предлагает эксклюзивные печи и камины премиального качества, которые вы можете заказать с доставкой в Москву, Санкт-Петербург и другие города России. В каталоге Loki.ru представлены десятки моделей, сочетающих современный дизайн и передовые технологии. Здесь каждый найдет вариант, который не только станет сердцем интерьера, но и подарит тепло на долгие годы. <br>
                Что мы предлагаем? <br>
                Разновидности печей и каминов:
                <ul>
                    <li>Дровяные камины. Классическое решение для ценителей живого огня. Модели с чугунными топками, стеклянными дверцами и системой длительного горения идеально подходят для загородных домов.</li>
                    <li>Газовые камины. Современные решения с мгновенным розжигом и регулируемой мощностью. Безопасны, экономичны и не требуют дров — идеальный выбор для городских интерьеров.</li>
                    <li>Электрические печи. Стильная альтернатива для квартир и офисов. Реалистичное 3D-пламя, бесшумная работа и возможность установки без дымохода.</li>
                    <li>Печи-камины длительного горения. Универсальные модели для обогрева больших помещений. Высокий КПД, эко-дизайн и возможность интеграции в систему водяного отопления.</li>
                </ul>


                Коллекции Loki.ru<br>
                Вдохновляйтесь нашими линиями, где скандинавский минимализм встречается с инновациями:

                <ul>
                    <li>Nordic Flame</li>
                    <li>Ember Stone</li>
                    <li>Steel Horizon</li>
                    <li>Viking Core</li>
                    <li>Sky Hearth</li>
                    <li>Eternalis</li>
                    <li>Loki Pro</li>
                    <li>Frost & Fire</li>
                </ul>

                Как выбрать идеальную модель?<br>
                Ориентируйтесь на ключевые параметры:<br>
                <ul>
                    <li>Тип топлива. Дрова, газ, электричество или пеллеты — подберите вариант под ваши условия.</li>
                    <li>Материал. Чугун, сталь или керамика. Чугун долго сохраняет тепло, сталь легче, а керамика устойчива к перепадам температур.</li>
                    <li>Мощность. Рассчитайте необходимую производительность исходя из площади помещения.</li>
                    <li>Дизайн. Выберите стиль: хай-тек с хромированными элементами, классику с коваными деталями или кантри с каменной облицовкой.</li>
                    <li>Дополнительные функции. Автоматический розжиг, терморегулятор, защитное стекло, встроенный теплообменник или система самоочистки.</li>
                </ul>

                В Loki.ru вы найдете печи и камины на любой бюджет — от компактных электрокаминов до роскошных авторских моделей. Позвоните нам, чтобы получить консультацию или оформить заказ. Создайте атмосферу тепла и комфорта вместе с Loki.ru!<br>
                Loki.ru — там, где технологии встречают пламя.
            </div>
        </div>
    </div>

    <div class="request-form">
        <div class="container">
            <div class="form-title form-title-block">Поможем с выбором</div>
            <div class="form-subtitle form-title-block">Наши эксперты дадут исчерпывающие консультации по выбору продукции и помогут подобрать оптимальный вариант</div>

            <div class="form-content">
                <div class="form-title form-title-none">Поможем с выбором</div>
                <div class="form-subtitle form-title-none">Наши эксперты дадут исчерпывающие консультации по выбору продукции и помогут подобрать оптимальный вариант</div>

                <form class="contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name" class="form-label"> имя</label>
                            <input type="text" id="name" class="form-input" >
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-label">телефон</label>
                            <input type="tel" id="phone" class="form-input">
                        </div>

                        <button type="submit" class="submit-btn">Отправить заявку</button>
                    </div>
                </form>
            </div>
            <div class="form-image">
                <img src="img/formimg2.png" alt="Форма обратной связи" class="form-img">
            </div>
        </div>
    </div>
<?php get_footer(); ?>
jQuery(document).ready(function ($) {
    const $catalog = $('#product-catalog');
    const catalogId = $catalog.data('catalog-id');

    function collectFilters() {
        // Category (faqat bitta)
        let category_id = $('.filter-section-category.filter-section-category_active').data('cat-id') || null;

        // Brand (checkbox)
        let brand_ids = [];
        $('.brand-filter:checked').each(function () {
            brand_ids.push($(this).val());
        });

        // Shape
        let shape_ids = [];
        $('.shape-filter:checked').each(function () {
            shape_ids.push($(this).data('term-id'));
        });

        // Color
        let color_ids = [];
        $('.color-filter:checked').each(function () {
            color_ids.push($(this).data('term-id'));
        });

        // Price
        let min_price = parseInt($('.min-input').val()) || 0;
        let max_price = parseInt($('.max-input').val()) || 99999999;

        // size
        let selectedSizes = [];
        $('.size-filter:checked').each(function () {
            selectedSizes.push($(this).val());
        });

        // installation
        let installation_ids = [];
        $('.installation-filter:checked').each(function () {
            installation_ids.push($(this).data('term-id'));
        });

        // Anti-fog filter
        let anti_fog = [];
        $('.anti-fog-filter:checked').each(function () {
            anti_fog.push($(this).val());
        });

        // Built Clock filter
        let built_clock = [];
        $('.built-clock-filter:checked').each(function () {
            built_clock.push($(this).val());
        });

        // Cosmetic mirror
        let cosmetic_mirror = [];
        $('.cosmetic-mirror-filter:checked').each(function () {
            cosmetic_mirror.push($(this).val());
        });

        // Collection
        let collection_ids = [];
        $('.collection-filter:checked').each(function () {
            collection_ids.push($(this).data('term-id'));
        });

        // Discount filter
        let discount_filter = [];
        $('.discount-filter:checked').each(function () {
            discount_filter.push($(this).val());
        });

        // In-stock filter
        let in_stock = null;
        let $inStockCheckbox = $('.in-stock-filter');
        if ($inStockCheckbox.length && $inStockCheckbox.is(':checked')) {
            in_stock = '1';
        } else {
            in_stock = '0';
        }

        // Sorting
        let sorting = $('.sorting-select').val();




        return {
            action: 'filter_products',
            catalog_id: catalogId,
            category_id: category_id,
            brand_ids: brand_ids,
            shape_ids: shape_ids,
            color_ids: color_ids,
            min_price: min_price,
            max_price: max_price,
            size_sm_values: selectedSizes,
            installation_ids: installation_ids,
            anti_fog: anti_fog,
            built_clock: built_clock,
            cosmetic_mirror: cosmetic_mirror,
            collection_ids: collection_ids,
            discount_filter: discount_filter,
            in_stock: in_stock,
            sorting: sorting,
        };
    }

    function applyFilters(page = 1) {
        console.log("Ishladi")
        const data = collectFilters();
        data.page = page;
        console.log('Clicked')
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: {
                action: 'filter_products',
                ...data
            },
            success: function (response) {

                const res = JSON.parse(response);
                console.log(res); // ← bu joyni tekshir

                $('.catalog-products').html(res.html);

                const from = ((res.page - 1) * res.per_page) + 1;
                const to = Math.min(res.page * res.per_page, res.total);
                const rangeText = res.total === 0 ? 'Показаны 0 из 0' : `Показаны ${from}–${to} из ${res.total}`;
                $('.pagination-count').text(rangeText);

                const $pagination = $('.pagination-bottom');
                $pagination.empty();

                if (res.pages > 1) {
                    for (let i = 1; i <= res.pages; i++) {
                        $pagination.append(`
                <a href="#" class="pagination-link${i === res.page ? ' active' : ''}" data-page="${i}">${i}</a>
            `);
                    }

                    if (res.page < res.pages) {
                        $pagination.append(`
                <a href="#" class="pagination-link next" data-page="${res.page + 1}">></a>
            `);
                    }
                }
            }
        });
    }

    // Event listeners
    const mobileBtn = $('.btn_show');

    if (mobileBtn.css('display') !== 'none'){
        mobileBtn.on('click', function (e){
            e.preventDefault();
            applyFilters();
            document.getElementById('catalog-filters').classList.remove('show');
        })
    }
    else{
        $('.filter-section-category').on('click', function () {
            $('.filter-section-category').removeClass('filter-section-category_active');
            $(this).addClass('filter-section-category_active');
            applyFilters();
        });

        $('.brand-filter, .shape-filter, .color-filter, .size-filter, .installation-filter,  .anti-fog-filter, .built-clock-filter, .cosmetic-mirror-filter, .collection-filter,  .discount-filter, .in-stock-filter').on('change', applyFilters);

        $('.min-input, .max-input').on('change', applyFilters);

        $('.min-price, .max-price').on('input', function () {
            $('.min-input').val($('.min-price').val());
            $('.max-input').val($('.max-price').val());
        });

        $('.min-price, .max-price').on('change', applyFilters);


        // Sahifa linkiga bosilganda
        $(document).on('click', '.pagination-link', function (e) {
            e.preventDefault();
            const page = parseInt($(this).data('page'));
            if (!isNaN(page)) {
                applyFilters(page);
            }
        });

        // Filterlarda o‘zgarish bo‘lsa 1-sahifadan boshlaymiz
        $('.filter-checkbox input').on('change', function () {
            applyFilters(1);
        });

        $('.sorting-select').on('change', function () {
            applyFilters(1);
        });
    }



    applyFilters();

});

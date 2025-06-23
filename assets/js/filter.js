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

        return {
            action: 'filter_products',
            catalog_id: catalogId,
            category_id: category_id,
            brand_ids: brand_ids,
            shape_ids: shape_ids,
            color_ids: color_ids,
            min_price: min_price,
            max_price: max_price,
            size_sm_values: selectedSizes
        };
    }

    function applyFilters() {
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: collectFilters(),
            success: function (response) {
                $('.catalog-products').html(response);
            }
        });
    }

    // Event listeners
    $('.filter-section-category').on('click', function () {
        $('.filter-section-category').removeClass('filter-section-category_active');
        $(this).addClass('filter-section-category_active');
        applyFilters();
    });

    $('.brand-filter, .shape-filter, .color-filter').on('change', applyFilters);

    $('.min-input, .max-input').on('change', applyFilters);

    $('.min-price, .max-price').on('input', function () {
        $('.min-input').val($('.min-price').val());
        $('.max-input').val($('.max-price').val());
    });

    $('.min-price, .max-price').on('change', applyFilters);
});

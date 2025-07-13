jQuery(document).ready(function ($) {

    // 1. Category filter click (custom view)
    $('.filter-section-category').on('click', function () {
        const id = $(this).data('cat-id');
        const url = new URL(window.location.href);
        url.searchParams.set('category[]', id);
        url.searchParams.set('paged', 1);
        window.location.href = url.toString();
    });

    // 2. Auto-submit all filters on change
$('.filter_container').on('change', 'input, select', function () {
    const $form = $(this).closest('form');
    const $btnShow = $form.find('.btn_show');

    if ($btnShow.length && $btnShow.css('display') !== 'none') {
        return;
    }

    // Aks holda (btn_show yo'q yoki display: none bo‘lsa) formani darhol yuboramiz
    $form.submit();
});


    function showSpinner() {
        $('#spinner-loader').css('display', 'flex');
    }
    function hideSpinner() {
        $('#spinner-loader').css('display', 'none');
    }

    // 3. Load more: redirect to next paged version
    $('.load-more').on('click', function(e) {
        e.preventDefault();
        console.log('CLIOcdkcvdmvkmbkfkvmfmbfmfmbkmfbmbk')
        var $button = $(this);
        var currentPage = parseInt($button.data('current-page')); // Joriy sahifa
        var nextPage = currentPage + 1; // Keyingi sahifa
        var catalogId = $('.catalog-bottom-controls').data('catalog-id'); // Catalog ID

        // Joriy GET parametrlarni olish
        var params = new URLSearchParams(window.location.search);
        params.set('paged', nextPage);

        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST',
            beforeSend: function() {
                showSpinner(); // Spinner’ni ko‘rsatish
                $button.prop('disabled', true).text('Загрузка...');
            },
            data: {
                action: 'load_catalog_products',
                paged: nextPage,
                catalog_id: catalogId,
                query_params: params.toString() // Barcha filter parametrlarini uzatish
            },
            beforeSend: function() {
                $button.prop('disabled', true).text('Загрузка...'); // Tugma vaqtincha o‘chiriladi
            },
            success: function(response) {
                // Mahsulotlarni append qilish
                $('.catalog-products').append(response.products);

                // Pagination count’ni yangilash
                $('.pagination-count').html(response.pagination_count);

                // Pagination linklarini yangilash
                $('.pagination-bottom').html(response.pagination_links);

                // Load More tugmasini yangilash
                if (response.has_next_page) {
                    $button.data('current-page', nextPage).text('Показать еще');
                } else {
                    $button.remove(); // Agar boshqa sahifa qolmasa, tugma olib tashlanadi
                }

                // Active sinfini yangilash
                $('.pagination-link').removeClass('active');
                $('.pagination-link').filter(function() {
                    return $(this).text() == nextPage;
                }).addClass('active');

                hideSpinner(); // Spinner’ni yashirish
                $button.prop('disabled', false);
            },
            error: function() {
                hideSpinner();
                $button.prop('disabled', false).text('Ошибка загрузки');
            }
        });
    });

    // Pagination linklariga bosilganda
    $(document).on('click', '.pagination-link:not(.prev, .next)', function(e) {
        e.preventDefault();
        console.log('CLIOcdkcvdmvkmbkfkvmfmbfmfmbkmfbmbk')

        var page = $(this).text(); // Bosilgan sahifa raqami
        var catalogId = $('.catalog-bottom-controls').data('catalog-id');

        // Joriy GET parametrlarni olish
        var params = new URLSearchParams(window.location.search);
        params.set('paged', page);

        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST',
            data: {
                action: 'load_catalog_products',
                paged: page,
                catalog_id: catalogId,
                query_params: params.toString()
            },
            beforeSend: function() {
                showSpinner();
                $('.catalog-products').html('<p>Загрузка...</p>'); // Mahsulotlar o‘rniga loader
            },
            success: function(response) {
                // Mahsulotlarni yangilash
                $('.catalog-products').html(response.products);

                // Pagination count’ni yangilash
                $('.pagination-count').html(response.pagination_count);

                // Pagination linklarini yangilash
                $('.pagination-bottom').html(response.pagination_links);

                // Load More tugmasini yangilash
                if (response.has_next_page) {
                    $('.load-more').data('current-page', page).text('Показать еще');
                } else {
                    $('.load-more').remove();
                }

                // Active sinfini yangilash
                $('.pagination-link').removeClass('active');
                $('.pagination-link').filter(function() {
                    return $(this).text() == page;
                }).addClass('active');

                hideSpinner();
            },
            error: function() {
                hideSpinner();
                $('.catalog-products').html('<p>Ошибка загрузки</p>');
            }
        });
    });



    // 3. Load more: redirect to next paged version
    $('.brand_load-more').on('click', function(e) {
        e.preventDefault();
        console.log('CLIOcdkcvdmvkmbkfkvmfmbfmfmbkmfbmbk')
        var $button = $(this);
        var currentPage = parseInt($button.data('current-page')); // Joriy sahifa
        var nextPage = currentPage + 1; // Keyingi sahifa
        var catalogId = $('.catalog-bottom-controls').data('catalog-id'); // Catalog ID

        // Joriy GET parametrlarni olish
        var params = new URLSearchParams(window.location.search);
        params.set('paged', nextPage);

        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST',
            beforeSend: function() {
                showSpinner(); // Spinner’ni ko‘rsatish
                $button.prop('disabled', true).text('Загрузка...');
            },
            data: {
                action: 'load_brand_products',
                paged: nextPage,
                catalog_id: catalogId,
                query_params: params.toString() // Barcha filter parametrlarini uzatish
            },
            beforeSend: function() {
                $button.prop('disabled', true).text('Загрузка...'); // Tugma vaqtincha o‘chiriladi
            },
            success: function(response) {
                // Mahsulotlarni append qilish
                $('.catalog-products').append(response.products);

                // Pagination count’ni yangilash
                $('.pagination-count').html(response.pagination_count);

                // Pagination linklarini yangilash
                $('.pagination-bottom').html(response.pagination_links);

                // Load More tugmasini yangilash
                if (response.has_next_page) {
                    $button.data('current-page', nextPage).text('Показать еще');
                } else {
                    $button.remove(); // Agar boshqa sahifa qolmasa, tugma olib tashlanadi
                }

                // Active sinfini yangilash
                $('.brand_pagination-link').removeClass('active');
                $('.brand_pagination-link').filter(function() {
                    return $(this).text() == nextPage;
                }).addClass('active');

                hideSpinner(); // Spinner’ni yashirish
                $button.prop('disabled', false);
            },
            error: function() {
                hideSpinner();
                $button.prop('disabled', false).text('Ошибка загрузки');
            }
        });
    });

    // Pagination linklariga bosilganda
    $(document).on('click', '.brand_pagination-link:not(.prev, .next)', function(e) {
        e.preventDefault();
        console.log('CLIOcdkcvdmvkmbkfkvmfmbfmfmbkmfbmbk')

        var page = $(this).text(); // Bosilgan sahifa raqami
        var catalogId = $('.catalog-bottom-controls').data('catalog-id');

        // Joriy GET parametrlarni olish
        var params = new URLSearchParams(window.location.search);
        params.set('paged', page);

        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST',
            data: {
                action: 'load_brand_products',
                paged: page,
                catalog_id: catalogId,
                query_params: params.toString()
            },
            beforeSend: function() {
                showSpinner();
                $('.catalog-products').html('<p>Загрузка...</p>'); // Mahsulotlar o‘rniga loader
            },
            success: function(response) {
                // Mahsulotlarni yangilash
                $('.catalog-products').html(response.products);

                // Pagination count’ni yangilash
                $('.pagination-count').html(response.pagination_count);

                // Pagination linklarini yangilash
                $('.pagination-bottom').html(response.pagination_links);

                // Load More tugmasini yangilash
                if (response.has_next_page) {
                    $('.load-more').data('current-page', page).text('Показать еще');
                } else {
                    $('.load-more').remove();
                }

                // Active sinfini yangilash
                $('.brand_pagination-link').removeClass('active');
                $('.brand_pagination-link').filter(function() {
                    return $(this).text() == page;
                }).addClass('active');

                hideSpinner();
            },
            error: function() {
                hideSpinner();
                $('.catalog-products').html('<p>Ошибка загрузки</p>');
            }
        });
    });



    // Filter va sort formalariga submit bo‘lganda
    $('form.catalog-filters, form.catalog-sort').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        var catalogId = $('.catalog-bottom-controls').data('catalog-id');
        var params = new URLSearchParams($form.serialize()); // Formadan parametrlarni olish
        params.set('paged', 1); // Filter yoki sort bo‘lganda 1-sahifadan boshlash

        $.ajax({
            url: ajax_object.ajax_url,
            type: 'POST',
            data: {
                action: 'load_catalog_products',
                paged: 1,
                catalog_id: catalogId,
                query_params: params.toString()
            },
            beforeSend: function() {
                showSpinner();
                $('.catalog-products').html('<p>Загрузка...</p>');
            },
            success: function(response) {
                $('.catalog-products').html(response.products);
                $('.pagination-count').html(response.pagination_count);
                $('.pagination-bottom').html(response.pagination_links);
                if (response.has_next_page) {
                    $('.catalog-bottom-controls').prepend('<button class="load-more" data-current-page="1">Показать еще</button>');
                }
                $('.pagination-link').removeClass('active');
                $('.pagination-link').filter(function() {
                    return $(this).text() == 1;
                }).addClass('active');
                hideSpinner();

                // URL’ni yangilash (foydalanuvchi tajribasi uchun)
                window.history.pushState({}, '', '?' + params.toString());
            },
            error: function() {
                hideSpinner();
                $('.catalog-products').html('<p>Ошибка загрузки</p>');
            }
        });
    });

    // Event listeners
    // const mobileBtn = $('.btn_show');
    //
    // if (mobileBtn.css('display') !== 'none'){
    //     mobileBtn.on('click', function (e){
    //         e.preventDefault();
    //         document.getElementById('catalog-filters').classList.remove('show');
    //     })
    // }

});

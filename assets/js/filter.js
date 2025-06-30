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
        $(this).closest('form').submit();
    });

    // 3. Load more: redirect to next paged version
    $('.load-more').on('click', function (e) {
        e.preventDefault();
        const nextUrl = $(this).data('next-page-url');
        window.location.href = nextUrl;
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

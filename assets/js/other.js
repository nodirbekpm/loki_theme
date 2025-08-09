document.addEventListener("DOMContentLoaded", function () {
    // tab function
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const tabId = this.dataset.tab;

            // Remove 'active' class from all tab buttons
            document.querySelectorAll(".tab-btn").forEach(function (el) {
                el.classList.remove("active");
            });

            // Add 'active' class to the clicked button
            this.classList.add("active");

            // Remove 'active' from all tab content
            document.querySelectorAll(".tab-content").forEach(function (el) {
                el.classList.remove("active");
            });

            // Add 'active' to the selected tab content
            const target = document.getElementById(tabId);
            if (target) {
                target.classList.add("active");
            }
        });
    });

    // inputmask
    const input = document.getElementById('phone');
    if (input) {
        Inputmask({mask: "+7 (999) 999-99-99"}).mask(input);
    }

    // catalog filter open
    window.toggleCatalogFilters = function () {
        document.getElementById('catalog-filters').classList.toggle('show');
    }

    // catalog filter close
    window.hideCatalogFilters = function () {
        document.getElementById('catalog-filters').classList.remove('show');
    };

    // // Navbar burger button show/off
    // window.toggleNav = function () {
    //   const menu = document.getElementById('navbar');
    //   const burger = document.querySelector('.burger');

    //   // Toggle "active" on both burger and menu
    //   burger.classList.toggle('active');
    //   menu.classList.toggle('active');
    // };

    // Navbar burger button show/off
    window.toggleNav = function () {
        const menu = document.getElementById('navbar');
        const burger = document.querySelector('.burger');

        // Toggle "active" on both burger and menu
        burger.classList.toggle('active');
        menu.classList.toggle('active');

        // Toggle scroll lock on body
        if (menu.classList.contains('active')) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };


    // input value changer
    const quantityControls = document.querySelectorAll(".quantity-control");

    if (quantityControls) {
        quantityControls.forEach(control => {
            const minusBtn = control.querySelector(".minus");
            const plusBtn = control.querySelector(".plus");
            const input = control.querySelector(".quantity-input");

            minusBtn.addEventListener("click", () => {
                let value = parseInt(input.value) || 1;
                if (value > 1) {
                    input.value = value - 1;
                }
            });

            plusBtn.addEventListener("click", () => {
                let value = parseInt(input.value) || 1;
                input.value = value + 1;
            });

            input.addEventListener("input", () => {
                let value = parseInt(input.value);
                if (isNaN(value) || value < 1) {
                    input.value = 1;
                }
            });
        });
    }


    const thumbnailSwiperEl = document.querySelector(".thumbnail-swiper");
    const mainSwiperEl = document.querySelector(".main-swiper");

    if (thumbnailSwiperEl && mainSwiperEl) {
        // Initialize thumbnail swiper
        const thumbnailSwiper = new Swiper(".thumbnail-swiper", {
            direction: "vertical",
            spaceBetween: 10,
            slidesPerView: 6,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                768: {
                    direction: "horizontal",
                },
            },
        });

        // Initialize main swiper
        const mainSwiper = new Swiper(".main-swiper", {
            spaceBetween: 10,
            pagination: {
                el: ".swiper2-pagination",
                clickable: true,
                type: "bullets",
            },
            navigation: {
                nextEl: ".swiper2-button-next",
                prevEl: ".swiper2-button-prev",
            },
            thumbs: {
                swiper: thumbnailSwiper,
            },
            on: {
                slideChange: function () {
                    updateActiveThumbnail(this.activeIndex);
                }
            }
        });
    }

    // Apply .active class to the correct thumbnail
    const thumbnails = document.querySelectorAll(".thumbnail-slider .swiper-slide");

    function updateActiveThumbnail(index) {
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add("active");
            } else {
                thumb.classList.remove("active");
            }
        });
    }

    // Also update when thumbnail is clicked
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            updateActiveThumbnail(index);
        });
    });

    // Initial sync
    updateActiveThumbnail(0);

// catalog left filter
// Select necessary elements
    const rangeSlider = document.querySelector(".range-slider");
    const filterTitles = document.getElementsByClassName("filter-title");

// Ensure all filters are open initially
    for (let i = 0; i < filterTitles.length; i++) {
        const title = filterTitles[i];
        const content = title.nextElementSibling;

        // Remove any "closed" classes to make sure they're open by default
        title.classList.remove("filter-title_close");
        if (content) {
            content.classList.remove("filter-content_close");
        }

        // Add click event to toggle closed/open
        title.addEventListener("click", function () {
            this.classList.toggle("filter-title_close");
            const content = this.nextElementSibling;
            if (content) {
                content.classList.toggle("filter-content_close");
            }
        });
    }


    // Select elements
    const minInput = document.querySelector(".min-input");
    const maxInput = document.querySelector(".max-input");
    const minPrice = document.querySelector(".min-price");
    const maxPrice = document.querySelector(".max-price");

// Proceed only if all required elements exist
    if (minInput && maxInput && minPrice && maxPrice) {
        // Minimum distance between min and max
        const priceGap = 100;

        // Sync inputs and sliders
        minInput.addEventListener("input", () => {
            let minVal = parseInt(minInput.value);
            let maxVal = parseInt(maxInput.value);

            if (maxVal - minVal >= priceGap && minVal >= parseInt(minPrice.min)) {
                minPrice.value = minVal;
            } else {
                minInput.value = minPrice.value;
            }
        });

        maxInput.addEventListener("input", () => {
            let minVal = parseInt(minInput.value);
            let maxVal = parseInt(maxInput.value);

            if (maxVal - minVal >= priceGap && maxVal <= parseInt(maxPrice.max)) {
                maxPrice.value = maxVal;
            } else {
                maxInput.value = maxPrice.value;
            }
        });

        minPrice.addEventListener("input", () => {
            let minVal = parseInt(minPrice.value);
            let maxVal = parseInt(maxPrice.value);

            if (maxVal - minVal < priceGap) {
                minPrice.value = maxVal - priceGap;
                minVal = maxVal - priceGap;
            }
            minInput.value = minVal;
        });

        maxPrice.addEventListener("input", () => {
            let minVal = parseInt(minPrice.value);
            let maxVal = parseInt(maxPrice.value);

            if (maxVal - minVal < priceGap) {
                maxPrice.value = minVal + priceGap;
                maxVal = minVal + priceGap;
            }
            maxInput.value = maxVal;
        });
    }

    // accordion
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const currentContent = currentItem.querySelector('.accordion-content');
            const isActive = header.classList.contains('active');

            // Close all
            document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));

            // Open if not active
            if (!isActive) {
                header.classList.add('active');
                currentContent.classList.add('active');
            }
        });
    });


    const hitsSection = document.querySelector('.hits');
    const isMobile = window.innerWidth <= 770;
    if (hitsSection) {
        const hitTitles = hitsSection.querySelectorAll('.filter-title1');

        // Initially close all filters inside .hits
        hitTitles.forEach(title => {
            const content = title.nextElementSibling;
            if (content && content.classList.contains('filter-item')) {
                content.classList.add('filter-content_close');
            }
        });
// Accordion behavior for .hits only
        hitTitles.forEach(title => {
            title.addEventListener('click', function (e) {
                const content = this.nextElementSibling;

                // Close all other filters inside .hits
                if (isMobile) {
                    // item.classList.remove('filter-content_close');
                } else {
                    hitTitles.forEach(otherTitle => {
                        const otherContent = otherTitle.nextElementSibling;

                        if (
                            otherTitle !== this &&
                            otherContent &&
                            otherContent.classList.contains('filter-item')
                        ) {
                            otherContent.classList.add('filter-content_close');
                            otherTitle.classList.remove('filter-title_close');
                        }
                    });
                }


                // Toggle only the clicked one
                if (content && content.classList.contains('filter-item')) {
                    content.classList.toggle('filter-content_close');
                    this.classList.toggle('filter-title_close');
                }
            });
        });
    }

    function openFiltersOnMobile() {
        // const isMobile = window.innerWidth <= 770;
        const filterItems = document.querySelectorAll('.filter-item');

        filterItems.forEach(item => {
            if (isMobile) {
                item.classList.remove('filter-content_close');
            }
        });
    }

// // Run on page load
    openFiltersOnMobile();

// Re-check on window resize
    window.addEventListener('resize', openFiltersOnMobile);


    // word limiter in product card
    const description = document.querySelector(".product-description");
    const maxLength = 140;

    if (description) {
        const fullText = description.textContent.trim();
        if (fullText.length > maxLength) {
            description.textContent = fullText.slice(0, maxLength - 3) + "...";
        }
    }


  // word limiter in product card
  const description = document.querySelector(".product-description");
  const maxLength = 140;

  if (description) {
    const fullText = description.textContent.trim();
    if (fullText.length > maxLength) {
      description.textContent = fullText.slice(0, maxLength - 3) + "...";
    }
  }


});

//   $(".thumbnail").on("click", function () {
//     $(".thumbnail").removeClass("active");
//     $(this).addClass("active");
//     const index = $(this).index();
//     mainSwiper.slideTo(index);
//   });

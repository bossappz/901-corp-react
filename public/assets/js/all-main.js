(function ($) {
    "use strict";

    // few modifications for react
    $('body').delegate('.initiate-scripts', 'click', function() {
        setTimeout(() => {
            bannerCarousel();
            searchToggle();
            skillsBar();
            productsCarousel();
            teamCarousel();
            wcuCarousel();
            brandCarousel();
            filterInit();
            masonryInit();
            preLoader();
            $('select').niceSelect();
        }, 100)
    });

    $('body').delegate('.scroll-to-top', 'click', function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, '500');
        return false;
    })

    $(window).on('load', function () {
        filterInit();
        masonryInit();
    });

    $(window).on('scroll', function () {
        var scrollToTop = $('.scroll-to-top'),
            scroll = $(window).scrollTop();
        if (scroll >= 500) scrollToTop.addClass('show');
        else scrollToTop.removeClass('show');
    });

    $(document).ready(function () {
        bannerCarousel();
        searchToggle();
        skillsBar();
        productsCarousel();
        teamCarousel();
        wcuCarousel();
        brandCarousel();
        preLoader();
        $('select').niceSelect();
    });
    
    if ($(window).width() < 992) {
        $('body').delegate('.navbar .dropdown-toggle', 'click', function(e) {
            $(this).siblings('.dropdown-menu').animate({
                height: "toggle"
            }, 300);
        });
    }

    $('select').niceSelect();

    // searchToggle Init
    function searchToggle() {
        $('body').delegate('.search-toggle', 'click', function(e) {
            $('.search-wrapper').addClass('showSearch');
        });
        $('body').delegate('.search-close-wrap, .search-close-btn', 'click', function(e) {
            $('.search-wrapper').removeClass('showSearch');
        });
    };

    // scroll to top init
    $('.scroll-to-top').each(function(){
        $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, '500');
            return false; 
        });
    });

    // PreLoader Init
    function preLoader() {
        $('body').addClass('loaded');
        $('.preloader-wrapper').addClass('loaded');
    }

    // skillsBar Init
    function skillsBar() {
        $('.cm-team').waypoint(function(direction){
            $('.progress-bar').each(function() {
                var barWidth = $(this).attr('data-value');
                $(this).animate({width: barWidth+'%', opacity: 1})
            });
            this.destroy()
        },{offset:'75%'});
    }

    // teamCarousel Init
    function teamCarousel() {
        $('.team-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            responsive : {
                0 : {
                    items: 1
                },
                991 : {
                    items: 2
                }
            },
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
        });
    }

    // masonry init
    function masonryInit() {
        $('.masonry').isotope();
    }

    // filter init
    function filterInit() {
        var $gridt = $('.jsFilter');
        $gridt.isotope();
        $('body').delegate('.product-filter-buttons-2', 'click', function(e) {
            var filterValue = $(this).attr('data-filter');
            $gridt.isotope({
                filter: filterValue
            });
            $(this).addClass('active').siblings().removeClass('active');
        });
    };
    filterInit();


    // banner carousel
    function bannerCarousel() {
        $('.banner-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            items: 1,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
        });
    }

    // products carousel
    function productsCarousel() {
        var productsCarousel = $('.fluid-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            responsive : {
                0 : {
                    items: 1
                },
                650 : {
                    items: 2
                },
                991 : {
                    items: 3
                },
                1200 : {
                    items: 4
                }
            },
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
        });
        $('body').delegate('.product-filter-buttons', 'click', function(e) {
            var $item = $(this);
            var filter = $item.data('owl-filter');
            $('.product-filter-buttons .btn').removeClass('active');
            $(this).addClass('active');
            productsCarousel.owlcarousel2_filter(filter);
        
        })
    }

    // why-choose-us carousel
    function wcuCarousel() {
        $('.why-choose-us-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive : {
                0 : {
                    items: 1
                },
                767 : {
                    items: 2
                }
            }
        });
    }

    // brand carousel
    function brandCarousel() {
        $('.brand-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: true,
            responsive : {
                0 : {
                    items: 2
                },
                575 : {
                    items: 3
                },
                991 : {
                    items: 4
                },
                1200 : {
                    items: 5
                }
            }
        });
    }

})(jQuery);
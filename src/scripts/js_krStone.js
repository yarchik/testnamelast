let front = {
    nav: $('.navbar'),
    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: false,
        cellAlign: 'left',
        contain: true
    },

    init: function () {
        this.events();
        this.headerScroll();
        this.spoiler.init();
    },
    spoiler : {
        init : function () {
            $(".spoiler-readmore").on('click', function(){
                $(this).parents('.spoiler').find('.spoiler-content').slideToggle();
                $(this).find('span').toggleClass('active');
                return false;
            });
        }
    },

    headerScroll: function () {
        if ($(window).scrollTop() > 5) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    },

    events: function () {
        let self = this;
        $(window).on('scroll', function () {
            self.headerScroll();
        });
    }
};

let modal = {
    closeButton: $('.modal-content__close'),
    closeOverlay: $('.modal'),
    can: 1,
    popupTop: 0,
    init: function () {
        this.events();
    },


    removeScroll: function () {
        modal.popupTop = $(window).scrollTop();

        $('html').css({
            "position": "fixed",
            "top": -$(window).scrollTop(),

            "width": "100%"
        });


    },

    addScroll: function () {
        $('html').css({
            "position": "static"
        });
        window.scroll(0, modal.popupTop);
    },

    openModal: function (id) {
        let modalWindow = $(id);
        modalWindow.fadeIn();
        modalWindow.find('.modal-content').removeClass('animate-away').addClass('animate-in');
       // $('body').addClass('overflow-hidden');
      //  modal.removeScroll();
    },

    closeModal: function (id) {
        let modalWindow = $(id);
        modalWindow.find('.modal-content').removeClass('animate-in').addClass('animate-away');
        modalWindow.fadeOut();
      //  modal.addScroll();
       // $('body').removeClass('overflow-hidden');
    },

    events: function () {

        $(document).on('click', '.modalTrigger', function (e) {
            e.preventDefault();
            let self = $(this),
                target = self.attr('data-modal');
            modal.openModal(target);
        });

        $(document).on('click', '.modal', function (event) {
            let self = '#' + $(this).attr('id');
            if (event.target.className == 'modal-body') {
                modal.closeModal(self);
            }
        });

        $(document).on('click', '.modal-content__close', function () {
            let self = '#' + $(this).closest('.modal').attr('id');
            modal.closeModal(self);
        });
    }
};

jQuery(function () {
    front.init();
    modal.init();

    $(".burger").on("click", function () {
        $(this).toggleClass("active"),
            $(".header-main").toggleClass("is-visible")
    })

});

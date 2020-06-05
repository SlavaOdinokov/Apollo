$(document).ready(function() {
    // Выпадающее меню
    var pull = $('#navToggle');
    var menu = $('.nav ul');
    var navBar = $('.nav-bars');
    
    // Событие при нажатии на кнопку
    $(pull).on('click', function(e){
        // Отменяем стандартное поведение
        e.preventDefault();
        // Открываем, скрываем меню
        menu.slideToggle();
        // Добовляем класс "active"
        $(this).toggleClass('active');
        $(navBar).toggleClass('active');
    });
    
    // При изменении ширины окна 
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 640 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    // Сворачиваем меню при клике на ссылку
    var widthNav = $(window).width();
    if(widthNav < 992) {
        $('.nav ul').on('click', function(){
            menu.slideToggle();
            $(pull).toggleClass('active');
            $(navBar).toggleClass('active');
        });
    }

    // Слайдер
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: ['', ''],
        loop: true,
        smartSpeed: 1200
    });

    // Стрелка 'UP'
	$('#backTop').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('#backTop').fadeIn();
		} 
		else{
			$('#backTop').fadeOut();
		}
	})
    
});

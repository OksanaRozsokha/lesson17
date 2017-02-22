
$(document).ready(function() {
    let flagName = false;
    let flagEmail = false;
    let flagTel = false;

    $('#first-form').on('submit', function(e) {
        e.preventDefault();
        let name = $('.name').val().trim(),
            email = $('.email').val().trim(),
            tel = $('.tel').val().trim();

        let data = {
            nameObj: name,
            emailObj: email,
            telObj: tel
        };
        if (name.length < 3) {
            $('.name').removeClass('success').addClass('error');
        } else {
            $('.name').removeClass('error').addClass('success');
            flagName = true;
        }
        if (email.length < 3) {
            $('.email').removeClass('success').addClass('error');
        } else {
            $('.email').removeClass('error').addClass('success');
            flagEmail = true;
        }
        if (tel.length < 3) {
            $('.tel').removeClass('success').addClass('error');
        } else {
            $('.tel').removeClass('error').addClass('success');
            flagTel = true;
        }

        if (flagName == true && flagEmail == true && flagTel == true) {
            $.ajax({
                url: '/user-page',
                method: 'post',
                data: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            });
        }

    });

    $('#second-form').on('submit', function(e) {
        e.preventDefault();
        let nameSec = $('.name-sec').val().trim(),
            emailSec = $('.email-sec').val().trim();

        let secData = {
          nameObject: nameSec,
          emailObject: emailSec
        };

        if (nameSec.length < 3) {
            $('.name-sec').removeClass('border-inp').removeClass('success').addClass('error');
        } else {
            $('.name-sec').removeClass('border-inp').removeClass('error').addClass('success');
            flagName = true;
        }
        if (emailSec.length < 3) {
            $('.email-sec').removeClass('border-inp').removeClass('success').addClass('error');
        } else {
            $('.email-sec').removeClass('border-inp').removeClass('error').addClass('success');
            flagEmail = true;
        }
        if (flagName == true && flagEmail == true) {
            $.ajax({
                url: '/user-page',
                method: 'post',
                data: JSON.stringify(secData),
                headers: {
                    'content-type': 'application/json'
                }
            });
        }

    });

    //  menu on click
    let flagMenu = true;
    $('.menu').on('click', function () {
        if(flagMenu) {
            flagMenu = false;
            $('.menu-list').slideToggle(function () {
                flagMenu = true;
            });
            $('body').toggleClass('active');
        }
    });

    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            dotData: true,
            dotsEach: true
        });
    });

});
//$(function() {
//
//
//
//    $('#registerform').validate({
//
//        rules: {
//
//            firstname: {
//                required: true,
//                minlength: 2,
//                maxlength: 100
//            },
//            lastname: {
//                required: true,
//                minlength: 2,
//                maxlength: 100
//            },
//            email: {
//                required: true,
//                email: true
//            },
//            about: {
//                required: true,
//                minlength: 10,
//                maxlength: 300
//            }
//
//        },
//        
//        submitHandler: function(form) {
//
//             $('#_wait_').fadeIn('slow');
//
//            $.post("register-portal.php", $('#registerform').serialize(), function(data) {
//                
//                $('#_wait_').hide();
//                $('#response').html(data).fadeIn('slow').delay(4000).fadeOut('slow');
//
//                $('#firstname').val('');
//                $('#lastname').val('');
//                $('#email').val('');
//                $('#about').val('');
//
//            });
//
//        }
//
//
//    });
//
//
//})
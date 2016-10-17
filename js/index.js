 $(function() {
     $('#send').click(function(e) {
         e.preventDefault();
         $.ajax({
             url: "https://formspree.io/rura.andrew@gmail.com",
             method: "POST",
             data: {
                 message: $('#name').val(),
                 email: $('#email').val(),
                 text: $('#messages').val()
             },
             dataType: "json"
         }).done(function() {
             $('form').html('<h1>Thank you!</h1>')
         }).fail(function(xhr, err) {
             $('form').html(xhr.statusText);
         });
     })
 });






 function initMap() {
     var Lviv = {
         lat: 49.82033,
         lng: 24.077120
     };
     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 9,
         center: Lviv
     });
     var marker = new google.maps.Marker({
         position: Lviv,
         map: map
     });
 }
 
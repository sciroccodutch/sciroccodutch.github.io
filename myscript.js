$(document).ready(function () {
    
   
        var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
          if ( $(document).scrollTop() > 100 ) {
            // Navigation Bar
              $('.navbar').removeClass('fadeIn');
              $('body').addClass('shrink');
              $('.navbar').addClass('animated fadeInDown');
            } else {
              $('.navbar').removeClass('fadeInDown');
              $('body').removeClass('shrink');
              $('.navbar').addClass('animated fadeIn');
          }

        });


      //   window.addEventListener('scroll', function () {
      //     if (window.pageYOffset > 100) {
      //       nav.classList.add('bg-dark', 'shadow');
      //     } else {
      //       nav.classList.remove('bg-dark', 'shadow');
      //     }
      //   });

      //   $( window ).scroll( function () {
      //       if ( $(document).scrollTop() > 150 ) {
      //       // Navigation Bar
      //         $('.navbar').removeClass('fadeIn');
      //         $('body').addClass('shrink');
      //         $('.navbar').addClass('animated fadeInDown');
      //       } else {
      //         $('.navbar').removeClass('fadeInDown');
      //         $('body').removeClass('shrink');
      //         $('.navbar').addClass('animated fadeIn');
      //     }
      // });

      
    //  listen for a submit

    document.querySelector(".contact-form").addEventListener("submit", submitForm);

    function submitForm(e) {
      e.preventDefault();
      
      let name = document.querySelector('.name').value;
      let email = document.querySelector('.email').value;
      let message = document.querySelector('.message').value;

      document.querySelector(".contact-form").reset();

      sendEmail(name,email,message);

    }

    $(document).on('click','.navbar-collapse',function(e) {
      if( $(e.target).is('a') ) {
          $(this).collapse('hide');
      }
  });


  // watch intro
    const url = $("#watchintro").attr('src');
    
    
    $("#watchModal").on('hide.bs.modal', function(){
        $("#watchintro").attr('src', '');
    });
    
   
    $("#watchModal").on('show.bs.modal', function(){
        $("#watchintro").attr('src', url);
    });


  //  earning simulation

      const elementArray = document.querySelectorAll('.periode');
      elementArray.forEach(function(elem) {
        elem.addEventListener("input", function() {
          elem.value = this.value.replace(/,/g, '.').replace(/[^\d.]+/g, '');
        });
    });

    $(document).on('click','input[type=text]',function(){ this.select(); });



//  aksi tombol hitung
  const paket = document.getElementById('paket');
  const price = document.getElementById('ctnft_price');

      $('.tombolHitung').click(function() {

        let ver = true;
        if (paket.value == "") {
          alert('Pls kindly to choose the package!');
          ver = false;
        }

        if (price.value == "") {
          alert('Pls kindly to enter the ctnft price!');
          ver = false;
        }

        elementArray.forEach(function(elem, i){
            if (elem.value == "") {
              alert(`${ordinal_suffix_of(i + 1)}  The period is not may empty!`);
              ver = false;
            }
        });

        if (!ver) {
          return false;
        } else {
          hitungReward();
        }
      });

});

function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}

// Hitung Reward berdasarkan paket

function hitungReward() {
  const paket = document.getElementById('paket').value;
  const periode = Array.from(document.querySelectorAll('.periode'));
  const price = document.getElementById('ctnft_price').value;
  
  let values = periode.map(a => Number(paket) * (Number(a.value) * 150) / 100)
  .reduce((x,y) => x + y);

  document.getElementById('reward').value = values + Number(paket);
  document.getElementById('reward1').value = (values + Number(paket)) * Number(price);
}




 // Send email info
 function sendEmail(name, email, message)
 {
   Email.send({
     Host: "smtp.gmail.com",
     Username: 'help.istakenbtc@gmail.com',
     // Password:"nkpoajptagvvqqjf",
     Password:"ksxrneyxkpdmsicm",
     To: "help.istakenbtc@gmail.com",
     From: "help.istakenbtc@gmail.com",
     Subject: `${name} Sent you a message`,
     Body: `Name: ${name} <br/> Email: ${email} <br/> message: ${message}`,
   }).then((message) => alert("mail sent successfully"));
 }

 
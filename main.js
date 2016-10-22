var prog = document.getElementById('prog'),
    percent = document.getElementById('percent'),
    fiberProg = document.getElementById('fiber-prog'),
    fiberPercent = document.getElementById('fiber-percent'),
    time = 1000,
    multiplier = 125,
    filesizeGB,
    i = 0,
    j = 0;

$('#reload').one("click", function() {
  location.reload();
})

$('#download').one("click", function(){

  $(this).addClass('disabled');

clearInterval(i);
clearInterval(j);
i = 0;
j = 0;


  for(; i <= 100; i++){
      (function(i){
          setTimeout(function(){
              percent.innerHTML = i;
              $('#prog').width(i + "%");

              if (i >= 50 && i <= 99) {
                $('#prog').removeClass('progress-bar-danger');
                $('#prog').addClass('progress-bar-warning');
              }
              else if (i >99) {
                $('#prog').removeClass('progress-bar-warning');
                $('#prog').addClass('progress-bar-success');
              }

          }, time * i);
      }(i));
  }

  for(; j <= 100; j++){
      (function(j){
          setTimeout(function(){
              fiberPercent.innerHTML = j;
              $('#fiber-prog').width(j + "%");

              if (j >= 50 && j <= 99) {
                $('#fiber-prog').removeClass('progress-bar-danger');
                $('#fiber-prog').addClass('progress-bar-warning');
              }
              else if (j >99) {
                $('#fiber-prog').removeClass('progress-bar-warning');
                $('#fiber-prog').addClass('progress-bar-success');
              }


          }, time/multiplier * j);
      }(j));
  }
})

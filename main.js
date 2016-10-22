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

          }, time * i);
      }(i));
  }

  for(; j <= 100; j++){
      (function(j){
          setTimeout(function(){
              fiberPercent.innerHTML = j;
              $('#fiber-prog').width(j + "%");

          }, time/multiplier * j);
      }(j));
  }
})
// for(i = 1; i <= 100; i++){
//     (function(i){
//         setTimeout(function(){
//             percent.innerHTML = i;
//             $('#prog').width(i + "%");
//
//         }, time * i);
//     }(i));
// }
//
// for(j = 1; j <= 100; j++){
//     (function(j){
//         setTimeout(function(){
//             fiberPercent.innerHTML = j;
//             $('#fiber-prog').width(j + "%");
//
//         }, time/multiplier * j);
//     }(j));
// }

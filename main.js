var prog = document.getElementById('prog'),
    percent = document.getElementById('percent'),
    fiberProg = document.getElementById('fiber-prog'),
    fiberPercent = document.getElementById('fiber-percent');

for(i = 1; i <= 100; i++){
    (function(i){
        setTimeout(function(){
            percent.innerHTML = i;
            $('#prog').width(i + "%");

        }, 1000 * i);
    }(i));
}

for(j = 1; j <= 100; j++){
    (function(j){
        setTimeout(function(){
            fiberPercent.innerHTML = j;
            $('#fiber-prog').width(j + "%");

        }, 8 * j);
    }(j));
}

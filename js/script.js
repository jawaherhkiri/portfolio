function size(a,b,c,d) {
    var img = document.getElementById(c);
    var cls = document.getElementById(d);
    var w = img.width;
    var h = img.height;
    if (w==0 && h==0 ){
        img.style.width = a;
        img.style.height = b;
        cls.style.width = '50px';
        cls.style.height = '50px';
    }
}

function clo(c,d) {
    var img = document.getElementById(c);
    var cls = document.getElementById(d);
    if(c == 'mic'){
        img.pause();
    }
    img.style.width = '00px';
    img.style.height = '00px';
    cls.style.width = '0px';
    cls.style.height = '0px';
}
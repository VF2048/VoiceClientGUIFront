var slider1 = document.getElementById("range1");
var slider2 = document.getElementById("range2");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var open = true;
var item = document.getElementById("inputmode");

p1.innerHTML = slider1.value;
p2.innerHTML = slider2.value;

window.onload = () => {
    slider1.value = 50;
    slider1.oninput();
    slider2.value = 50;
    slider2.oninput();
}

slider1.oninput = function() {
    var volume = parseInt(this.value);
    p1.innerHTML = volume;
    var color = 'linear-gradient(90deg, #c93149 ' + volume + '%, #4c2027 ' + volume + '%)';
    slider1.style.background = color;
    if (window.voice_api)
        window.set_play_volume(volume/100);
}
slider2.oninput = function() {
    var volume = parseInt(this.value);
    p2.innerHTML = volume;
    var color = 'linear-gradient(90deg, #c93149 ' + volume + '%, #4c2027 ' + volume + '%)';
    slider2.style.background = color;
    if (window.voice_api)
        window.set_record_volume(volume/100);
}

function hiddeninput() {
    if(open == true){
        item.style.visibility = 'hidden'
        open = false;
    }
    else{
        item.style.visibility = 'visible'
        open = true;
    }
}
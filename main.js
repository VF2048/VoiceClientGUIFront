var config = {
    main: {
        soundVolume:50,
        microphoneVolume:50,
        triggerOnOffSound:true,
        triggerSound3D:true,
        inputmode:false,
        inputModeRadio:1,
        kiGlobal:"A",
        kiRadio:"B",
    },
}

{
var floatwindow = document.getElementById("floatwindow");
var mutListPlayers = document.getElementById("mutListPlayers");
var mutListOpenButton = document.getElementById("mutListOpenButton");
var mutListCloseButton = document.getElementById("mutListCloseButton");
var volumePlayersWindow = document.getElementById("volumePlayersWindow");
var volumePlayersButton = document.getElementById("volumePlayersButton");
var volumeMainWindow = document.getElementById("volumeMainWindow");
var soundVolume = document.getElementById("range1");
var microphoneVolume = document.getElementById("range2");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var triggerOnOffSound = document.getElementById("triggerOnOffSound");
var triggerSound3D = document.getElementById("triggerSound3D");
var triggerInputMode = document.getElementById("triggerInputMode");
var inputmode = document.getElementById("inputmode");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");
var gui_close = document.getElementById("gui_close");
var drag = document.getElementById("drag");
var container = document.getElementById("container");
}

function presentation(){
    mutList.addMutedPlayer("Vf",10);
    mutList.addMutedPlayer("Vf1",11);
    mutList.addMutedPlayer("Vf2",12);
    mutList.addMutedPlayer("Vf3",13);
    
    volumeWindow.createRoom("Общий",1);
    volumeWindow.addPlayerinRoom("Vf1",1,1);
    volumeWindow.addPlayerinRoom("Vf2",1,2);
    volumeWindow.addPlayerinRoom("Vf3",1,3);
    volumeWindow.addPlayerinRoom("Vf4",1,4);
    volumeWindow.addPlayerinRoom("Vf5",1,5);
    
    volumeWindow.createRoom("Радио",2);
    volumeWindow.addPlayerinRoom("Vf1",2,6);
    volumeWindow.addPlayerinRoom("Vf2",2,7);
    volumeWindow.addPlayerinRoom("Vf3",2,8);
    volumeWindow.addPlayerinRoom("Vf4",2,9);
    volumeWindow.addPlayerinRoom("Vf5",2,10);
    
    volumeWindow.createRoom("Радио",3);
    volumeWindow.addPlayerinRoom("Vf1",3,11);
    volumeWindow.addPlayerinRoom("Vf2",3,12);
    volumeWindow.addPlayerinRoom("Vf3",3,13);
    volumeWindow.addPlayerinRoom("Vf4",3,14);
    volumeWindow.addPlayerinRoom("Vf5",3,15);
    
    volumeWindow.createRoom("Радио",4);
    volumeWindow.addPlayerinRoom("Vf1",4,16);
    volumeWindow.addPlayerinRoom("Vf2",4,17);
    volumeWindow.addPlayerinRoom("Vf3",4,18);
    volumeWindow.addPlayerinRoom("Vf4",4,19);
    volumeWindow.addPlayerinRoom("Vf5",4,20);

    // volumeWindow.removeRoom(1);
    // volumeWindow.removePlayerinRoom(1,1);
}

var mutList = {
    addMutedPlayer: (PlayerName,Id) => {
    mutListPlayers.innerHTML += '<button id="' + Id + PlayerName + '" class="button selector mut-leaf">' + PlayerName + '</button>'
    },

    removeMutedPlayer: (event) => {
        let tardet = document.getElementById(event.target.id);
        mutListPlayers.removeChild(tardet);
        console.log(event.target.id);
    }
}

mutListPlayers.onclick = (event) => {
    mutList.removeMutedPlayer(event);
}

volumePlayersButton.onclick = () => {
    volumePlayersWindow.style.display = "block";
}

var volumeWindow = {
    createRoom: (nameRoom,namberRoom) => {
    volumeMainWindow.innerHTML += 
    ('<div id="voiceroom' + namberRoom + '" class="voiceroom">'+
    '<div class="voiceroomlogo">'+
        '<img class="radiomin" src="img/radiomin.png">'+
        '<p class="voiceroomlogotext">' + nameRoom + '</p>'+
        '<input id="hiddenSetting" type="checkbox">'+
        '<label for="hiddenSetting" class="hiddenSetting"  onclick="hiddenStyyings(' + namberRoom + ')"></label>'+
    '</div>'+
    '<div id="voiceRoom' + namberRoom + 'PlayerList" class="voiceRoomPlayerList" style="visibility: visible;">'+
    '</div>'+
    '</div>')
    },

    addPlayerinRoom:(nick,namberRoom,unicid) => {
        let room = document.getElementById("voiceRoom" + namberRoom + "PlayerList")
        let player = document.createElement('table');
        player.id = "voiceRoomPlayerSettings" + unicid;
        player.innerHTML = (
            '<tr class="voiceRoomPlayerSettings">'+
                '<th class="th">'+
                    '<img src="img/userloc.png" class="userloc">'+
                    '<p class="userName">' + nick + '</p>'+
                '</th>'+
                '<th class="th">'+
                    '<img src="img/distance.png" class="imgdistance">'+
                    '<p id=userName' + unicid + 'Distance class="userName">1000</p>'+
                    '<p class="userName margin">m.</p>'+
                '</th>'+
                '<th id="grid" class="th">'+
                    '<img src="img/micSettings.png" class="micSettings">'+
                    '<input id="sliderP' + unicid + '" min="0" max="100" value="0" type="range" class="sliderP">'+
                    '<p id="sliderP' + unicid + 'volume" class="userName">0</p>'+
                '</th>'+
            '</tr>');
        room.appendChild(player);
    },

    removePlayerinRoom: (namberRoom,unicid) => {
        let target = document.getElementById("voiceRoomPlayerSettings" + unicid);
        let room = document.getElementById("voiceRoom" + namberRoom + "PlayerList");
        room.removeChild(target);
    },

    removeRoom: (namberRoom) => {
        let room = document.getElementById("voiceroom" + namberRoom);
        volumeMainWindow.removeChild(room);
    },

    setDistancePlayerinRoom: (unicid,distance) => {
        let target = document.getElementById("userName" + unicid + "Distance");
        console.log(target);
        target.innerHTML = distance;
    },
}

function onloadConfig(config) {
    triggerOnOffSound.checked = config.main.triggerOnOffSound;
    triggerSound3D.checked = config.main.triggerSound3D;
    inputmode.style.visibility = config.main.inputmode.state;
    switch(config.main.inputModeRadio){
        case 1 : 
        radio1.checked = "checked";
        break;
        case 2 : 
        radio2.checked = "checked";
        break;
        case 3 : 
        radio3.checked = "checked";
        break;
    }
    triggerInputMode.checked = config.main.inputmode.checked;
    kiGlobal.innerHTML = config.main.kiGlobal;
    kiRadio.innerHTML = config.main.kiRadio;
    soundVolume.value = config.main.soundVolume;
    soundVolume.oninput();
    microphoneVolume.value = config.main.microphoneVolume;
    microphoneVolume.oninput();
}

window.onload = () => {
    onloadConfig(config);
    // function saveConfig(){
    //     var jsonData = JSON.stringify(config);
    // }    
    // function loadConfig(config){
    //     config = JSON.parse(this.config);
    // }
    windowGui.toggleWindow();
    presentation();
    windowGui.CloseWindow();
}

var windowGui = {
    toggleWindow : () => {
        document.addEventListener('keydown', keyOpen = (event) => {
                if(event.key == "Insert") {
                    if(container.style.visibility == "hidden"){
                        windowGui.OpenWindow();
                    }else
                    windowGui.CloseWindow();
                }
                else if(event.key == "Escape") {
                    windowGui.CloseWindow()
                }
        })
    },

    CloseWindow : () => {
        volumePlayersWindow.style.display = "none";
        container.style.visibility = "hidden";
        inputmode.style.visibility = "hidden";
        floatwindow.style.display = 'none'
    },
    
    OpenWindow : () => {
        container.style.visibility = "visible";
        config.main.inputmode ? inputmode.style.visibility = "hidden":inputmode.style.visibility = "visible";
    }
}


soundVolume.oninput = () => {
    var volume = parseInt(soundVolume.value);
    p1.innerHTML = volume, 
    config.main.soundVolume = volume;
    var color = 'linear-gradient(90deg, #c93149 ' + volume + '%, #4c2027 ' + volume + '%)';
    soundVolume.style.background = color;
    window.SetPlayVolume(volume/100);
}

microphoneVolume.oninput = () => {
    var volume = parseInt(microphoneVolume.value);
    config.main.microphoneVolume = volume;
    p2.innerHTML = volume;
    var color = 'linear-gradient(90deg, #c93149 ' + volume + '%, #4c2027 ' + volume + '%)';
    microphoneVolume.style.background = color;
    window.SetRecordVolume(volume/100);
}

mutListOpenButton.onclick = () => {
    floatwindow.style.display = 'block'
}

mutListCloseButton.onclick = () => {
    floatwindow.style.display = 'none'
}

triggerOnOffSound.onclick = () => {
    if(triggerOnOffSound.checked) {
        triggerOnOffSound.checked = config.main.triggerOnOffSound = true;
        window.EnableVoice(true);
    }
    else {
        triggerOnOffSound.checked = config.main.triggerOnOffSound = false;
        window.EnableVoice(false);
    }
}

triggerSound3D.onclick = () => {
    if(triggerSound3D.checked) {
        triggerSound3D.checked = config.main.triggerSound3D = true;
        window.enable_3d_voice(true)
    }
    else {
        triggerSound3D.checked = config.main.triggerSound3D = false;
        window.enable_3d_voice(false)
    }
}

triggerInputMode.onclick = () => {
    if(config.main.inputmode){ 
        inputmode.style.visibility = config.main.inputmode.state = "visible";
        triggerInputMode.checked = config.main.inputmode = false;
    }
    else{
        inputmode.style.visibility = config.main.inputmode.state = "hidden";
        triggerInputMode.checked = config.main.inputmode = true;
    }
}

document.body.oninput = (event) => {
    if(event.target.name == "radio"){
        config.main.inputModeRadio = parseInt(event.target.value);
    }
}

kiGlobal.onclick = (event) => {
    battonSelect(event);
}

kiRadio.onclick = (event) => {
    battonSelect(event);
}

var battonSelectNow = false;
function battonSelect(event){
    if((event.target.id == "kiRadio" || event.target.id == "kiGlobal")&& battonSelectNow == false && event.which == 1){
        battonSelectNow = true;
        let id = event.target.id;
        let elem = document.getElementById(id);

        elem.classList.add("bactive") 
        elem.addEventListener('keydown', keySelect1=(event)=>{
        let key = event.key;
        key = key.length == 1 ? key.toUpperCase() : key;
        config.main.elem = key;
        elem.innerHTML = key;
        elem.classList.remove("bactive");
        elem.removeEventListener('keydown', keySelect1);
        battonSelectNow = false;
    })
    }
}

gui_close.onclick = () => {
    windowGui.CloseWindow();
}

function hiddenStyyings(numberRoom) {
    var room = document.getElementById("voiceRoom"+numberRoom+"PlayerList")
    var A = document.getElementById("voiceroom" + numberRoom);
    room.style.visibility == 'visible' ? 
    (room.style.visibility = 'hidden',A.style.height = '6vh') : 
    (room.style.visibility = 'visible',A.style.height = '20vh');
}

document.body.oninput = function(event) {
    if(event.target.tagName == 'INPUT') {
        var id = event.target.id + 'volume';
        var elem = document.getElementById(id);
        var volume = parseInt(event.target.value);
        elem.innerHTML = volume;
        event.target.style.background = 'linear-gradient(90deg, #c93149 ' + volume + '%, #4c2027 ' + volume + '%)'
    }
}

DragAndDropOwerlay()
drag.onmousedown = (event) => {
    if(event.which == 1){
        let elem = document.getElementById(event.target.id);
        dragOff(elem);
        let id = event.target.id;
        if(id =="owerlayMicrophone" || id == "owerlayVolumeOn"){
            DragAndDrop(event,elem);
        }
    }
}

function DragAndDrop(event,elem){
    let shiftX = event.clientX - elem.getBoundingClientRect().left;
    let shiftY = event.clientY - elem.getBoundingClientRect().top;
    elem.style.position = 'absolute';
    elem.style.zIndex = 1000;
    
    function moveAt(pageX, pageY) {
        elem.style.left = pageX - shiftX + 'px';
        elem.style.top = pageY - shiftY + 'px';
    }
    var move = false;
    moveAt(event.pageX, event.pageY)
    function onMouseMove(event) {
        move = true;
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    elem.onmouseup = function(event) {
        console.log(1);
        let id = event.target.id;
        if(!move && id != "owerlay") {
            doClick(elem);
        }
        document.removeEventListener('mousemove', onMouseMove);
        elem.onmouseup = null;
    };

}

function DragAndDropOwerlay(){
    let owerlay = document.getElementById("owerlay")
    owerlay.onmousedown = (event) => {
        if(event.which == 1){
            DragAndDrop(event,owerlay);
        }
    }
}

function doClick(elem){
    arr = elem.src.split("/")
    arr.pop()
    for (let name of arr) {
        if(dir == undefined){
            dir = name + "/"
        }else{
            dir += name + "/";
        }
    }
    var dir;
    if(elem.id =="owerlayMicrophone"){
        elem.src.split("/").pop() == "owerlayMicrophone.png" ? 
        elem.src = dir + "owerlayMicrophoneOff.png" : 
        elem.src = dir + "owerlayMicrophone.png"
    }else if(elem.id == "owerlayVolumeOn"){
        elem.src.split("/").pop() == "owerlayVolumeOn.png" ? 
        elem.src = dir + "owerlayVolumeOff.png" : 
        elem.src = dir + "owerlayVolumeOn.png"
    }
}

function dragOff(elem){
    elem.ondragstart = function() {
        return false;
    }; 
} 
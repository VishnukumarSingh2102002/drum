/*document.querySelectorAll("button")[0].addEventListener("click", handler);
function handler(){
    var audio = new Audio ("./sounds/crash.mp3");
    audio.play();
    
}

document.querySelectorAll("button")[1].addEventListener("click", handler1);
function handler1(){
    var audio = new Audio ("./sounds/kick-bass.mp3");
    audio.play();
    
}

document.querySelectorAll("button")[2].addEventListener("click", handler2);
function handler2(){
    var audio = new Audio ("./sounds/snare.mp3");
    audio.play();
    
}

document.querySelectorAll("button")[3].addEventListener("click", handler3);
function handler3(){
    var audio = new Audio ("./sounds/tom-1.mp3");
    audio.play();
    
}

document.querySelectorAll("button")[4].addEventListener("click", handler4);
function handler4(){
    var audio = new Audio ("./sounds/tom-2.mp3");
    audio.play();
    
}

document.querySelectorAll("button")[5].addEventListener("click", handler5);
function handler5(){
    var audio = new Audio ("./sounds/tom-3.mp3");
    audio.play();
    
}

document.querySelectorAll("button")[6].addEventListener("click", handler6);
function handler6(){
    var audio = new Audio ("./sounds/tom-4.mp3");
    audio.play();
    
}

var num = document.querySelectorAll(".drum").length;

for(var i = 0; i < num; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       var letter = this.innerHTML;
       
      makesound(letter);
    });
}



*/
//document.querySelectorAll("button").addEventListener("click"):
//for(var  = 0 )
var letter = document.querySelectorAll("button").length;
for(var i = 0; i < letter; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var leti = this.innerHTML;
        makesound(leti);  
        pressed(leti)
    });
    
    
}




document.addEventListener("keypress", function(event){
    makesound(event.key);
    pressed(event.key);
});

function makesound(key){
    if(key === "w"){
        var audio = new Audio ("./sounds/crash.mp3");
        audio.play();
    }else if(key ==="a"){
        var audio = new Audio ("./sounds/kick-bass.mp3");
    audio.play();
    }else if( key === "s"){
        var audio = new Audio ("./sounds/snare.mp3");
    audio.play();
    }else if(key ==="d"){
        var audio = new Audio ("./sounds/tom-1.mp3");
    audio.play();
    }else if(key ==="j"){
        var audio = new Audio ("./sounds/tom-2.mp3");
        audio.play();
    }else if(key ==="k"){
        var audio = new Audio ("./sounds/tom-3.mp3");
        audio.play();
    }else{
        var audio = new Audio ("./sounds/tom-4.mp3");
        audio.play();
    }



}

function pressed(leti){
    document.querySelector("."+leti).classList.add("new1");
    setTimeout(function(){
       document.querySelector("."+leti).classList.remove("new1");
    }, 300);
}

function hello(leti){
    document.querySelector("."+leti).classList.add("pressed");
 
    setTimeout(function(){
     document.querySelector("."+leti).classList.remove("pressed");
    }, 100);
    
 }
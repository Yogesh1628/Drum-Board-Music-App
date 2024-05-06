var random=document.querySelectorAll(".drum");
var size=random.length;

for(var i=0;i<size;i++)
{
    random[i].addEventListener("click",handleClick);
}
function handleClick()
{
    var ran = this.innerHTML;
    makesSound(ran);
    buttonAnimation(ran);

}

addEventListener("keypress",KeyboardPress);


function KeyboardPress(event)
{

    makesSound(event.key);
 buttonAnimation(event.key);

}

function buttonAnimation(currentkey)
{
    var activebutton =document.querySelector("." + currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function()
    {
        activebutton.classList.remove("pressed");

    },100);
}

function makesSound(key)
{
    switch (key) {

        case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "a" :
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
        audio.play();

        
        break;

        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        
        break;

        case "j":
            var audio=new Audio("sounds/snare.mp3");
        audio.play();
        
        break;

        case "k":
            var audio=new Audio("sounds/crash.mp3");
        audio.play();
        
        break;

        case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

    default:
        console.log(ran);
        break;
}

}









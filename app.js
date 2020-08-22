window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div")
    const visual=document.querySelector(".visual");
    const colors=[
        "#60d394",
        "#d36060",
        "#c060d3",
        "#cfe93e",
        "#43dd5d",
        "#4bd4e6"
    ];

    //attaching sounds with pads
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            //sounds are in the form of node list, so accessing each element of the node through index property
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //function to create bubbles
    const createBubbles= (index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});


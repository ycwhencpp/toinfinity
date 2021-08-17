//creating stars
function createstars(){
    const scene= document.querySelector(".scene");
    const count =20;
    let i=0;

    while(i<count){
    let stars=document.createElement("i");
    let x = Math.floor(Math.random() *window.innerWidth);
    
    let height = Math.random() *100;
    let width = Math.random() *1;
    let duration = Math.random()*1;

    
    stars.style.left= x +"px";
    stars.style.height= 50+ height +"px";
    stars.style.width=  width +"px";
    stars.style.animationDuration=duration +"s";
    scene.appendChild(stars);
    i++;
    }
    
    
    
}
createstars();
// move rocket on moving cursor
const rocket = document.querySelector(".rocket");
// const rocket1 = document.querySelector(".:rocket");
window.addEventListener("mousemove",rocketmove);

 function rocketmove(e){
    rocket.style.top=e.offsetY +"px";
    rocket.style.left=e.offsetX +"px";
   
}
// const stars=document.querySelectorAll("i");
// stars.forEach((func)=>{
    
//     if(func.style.top==rocket.style.top){
        
//         console.log("tick");
//     }
// });
// console.log(stars.values());



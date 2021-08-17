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


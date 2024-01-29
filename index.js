let bulb=document.querySelector(".picture")

let btn=document.querySelector(".button")
console.log(btn.textContent);
btn.addEventListener("click",()=>{
    if(  btn.textContent=="light on")
    {
        btn.textContent="light of";
        bulb.src="./imiges/onn.jpg"
        bulb.Style.height="400px";
        
    }
    else{
        btn.textContent="light on";
        bulb.src="./imiges/of.jpg"

    }
   
})
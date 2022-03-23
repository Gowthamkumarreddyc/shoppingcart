let show=false;
document.getElementById("imgsection").onclick=()=>
{
    
    console.log("click")
    if(show)
    {
        show=false;
        document.getElementById("extra").style.display="none";
       
    }else{
        show=true;
        document.getElementById("extra").style.display="block";
      
    }
}

`use strict`;
 let carts=document.querySelectorAll(`.cart`)
for(let i=0; i < carts.length; i++ ){
    carts[i].addEventListener(`click`,()=>{
        cartNumbers();
    })
}

function onLoadcart(){
    let productNumbers=localStorage.getItem("cartNumbers");

    if(productNumbers){
        document.querySelector(`.item`).textContent=productNumbers;
    }
}

function cartNumbers(){
    let productNumbers=localStorage.getItem("cartNumbers");
    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem("cartNumbers",productNumbers + 1);
        document.querySelector(`.item`).textContent=productNumbers+1;
    }
    else{
        localStorage.setItem("cartNumbers",1);
        document.querySelector(`.item`).textContent=0;
    }
}
onLoadcart();

function remove(){
    let productNumbers=localStorage.getItem("cartNumbers");
    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem("cartNumbers",productNumbers - 1);
        document.querySelector(`.item`).textContent=productNumbers-1;
    }
    else{
        localStorage.setItem("cartNumbers",1);
        document.querySelector(`.item`).textContent=0;
    }
}
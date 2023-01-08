let cartBtn = document.querySelector('[data-cart]')
let cart = document.querySelector('#cart')
let color= document.querySelector('h3')
let flagCart=false;

cartBtn.onclick=()=>{
    if (flagCart=== false){
        cart.style.display='block'
        cartBtn.style.color='blue'
        flagCart=true;
    }else {
        cart.style.display='none'
        cartBtn.style.color=color.style.color
        flagCart=false;
    }
}


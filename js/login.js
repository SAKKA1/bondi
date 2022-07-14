let forget = document.querySelector('.forget')
let pass = document.querySelector('.pass')
let closee = document.querySelector('.close')
let black = document.querySelector('.black-screen')


forget.addEventListener('click',()=>{
    pass.style. zIndex = 2;
    black.style.zIndex = 1;
    closee.style.opacity = 1 ;
})
closee.addEventListener('click',()=>{
    pass.style. zIndex = -5;
    black.style.zIndex = -5;
    closee.style.opacity = 0 ;
})
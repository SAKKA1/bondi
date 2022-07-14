let switchList = document.querySelectorAll('.switcher li')
let imgs = document.querySelectorAll('.box img')




function animation(){
    //     $('.animation').each(function( i, item ) {
        //     if(window.scrollY >= item.offsetTop - 350){
//         $(item).css('opacity', '1');
//         $(item).css('transform', 'translateY(0)');
//     }
//   });

const homs = document.querySelectorAll('.animation');
// for (let element of homs) {
    //     if(window.scrollY >= element.offsetTop - 350){
        //         element.style.opacity = 1;
        //         element.style.transform = 'translateY(0)';
        //     }
        // }
        for (let i=0; i<homs.length;i++) {
            if(window.scrollY >= homs[i].offsetTop - 400){
                homs[i].style.opacity = 1;
                homs[i].style.transform = 'translateY(0)';
            }
        }
        
    }
    switchList.forEach((el)=>{
        el.addEventListener('click',removeActive)
        el.addEventListener('click',mangeImgs)
    })
    
    function removeActive(){
        switchList.forEach((el)=>{
            el.classList.remove('active')
            this.classList.add('active')
        })
    }
    
    function mangeImgs(){
        imgs.forEach((el)=>{
            el.parentElement.parentElement.style.display = 'none'
        })
        document.querySelectorAll(this.dataset.type).forEach((el)=>{
            el.parentElement.parentElement.style.display = 'block'
        })
    }
    
    
    
    window.addEventListener('scroll', animation) 
    window.addEventListener('scroll', show) 
    
    
    let up = document.querySelector('.scrollTop')
    
    up.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
        })
    })
    function show(){
        if(window.scrollY > 500 ){
            up.classList.add('show')
        }
        else{
            up.classList.remove('show')
    }
}
// up.onclick = ()=>{
    //     window.scrollTo({
        //         top:0,
        //     })
        // }
        

        let typeEffect = 'We make awesome graphic and web design';
        let i = 0;

        setTimeout(myFuncntion,3000)

        function myFuncntion(){
            let effect = setInterval(()=>{
                document.getElementById('typeEffect').innerHTML += typeEffect[i]
                i++
                if(i>typeEffect.length-1){
                    clearInterval(effect)
                }
            },50)
        }

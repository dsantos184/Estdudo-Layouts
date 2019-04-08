let btnMenu = document.querySelector('.mopen')
let menu = document.querySelector('.menu');
/*let open = document.querySelector('.open')*/

btnMenu.addEventListener('click', (e) =>{
    e.preventDefault()
    
    let open = document.querySelector('.open')

    console.log(open)
    
    if( open === null )
    {
        menu.classList.add('open')
    }
    else
    {
        menu.classList.remove('open')
    }

})
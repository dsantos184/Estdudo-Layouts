const abrirMenu = document.querySelector('.activeMobile')
const listaMenu = document.querySelector('.menuMobile')

abrirMenu.addEventListener('click', (e)=>{
    
    e.preventDefault()

    let active = document.querySelector('.active')
    
    if( active === null )
    {
        listaMenu.classList.add('active')
    }
    else
    {
        listaMenu.classList.remove('active')
    }

})
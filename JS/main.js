const ismenuMobileClosed=document.querySelector('.menu-mobile-container');
const btnOpenMenuMobile = document.querySelector('#menuMobile');
const btnCloseMenu = document.querySelector('#backArrow');


btnOpenMenuMobile.addEventListener('click',showMenu);
btnCloseMenu.addEventListener('click',backToPrincipal);

function showMenu(){
    if(ismenuMobileClosed){
        ismenuMobileClosed.classList.remove('inactive');
    }
}

function backToPrincipal (){
    ismenuMobileClosed.classList.add('inactive');
}
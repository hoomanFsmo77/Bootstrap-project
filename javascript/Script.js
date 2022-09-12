////////////////////Variables//////////////////////////////////////
const $=document
const navbarTag=_q('.navbar')
const dropdownMenuTag=_q('.dropdown-menu')
const dropdownMenuATag=_qAll('.dropdown-menu li a')
const collapseTag=_id('navbarSupportedContent')
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
//////////////////////////// fire on document ////////////////////////////
document.addEventListener('scroll',function () {
    if(document.documentElement.scrollTop){
        collapseTag.classList.add('scrolled')
        navbarTag.classList.add('bg-dark')
        navbarTag.classList.remove('bg-white')
        navbarTag.classList.add('navbar-dark')
        navbarTag.classList.add('active')
        dropdownMenuTag.classList.add('bg-dark')
        dropdownMenuATag.forEach(function (item) {
            item.classList.add('text-white')
        })
    }else{
        collapseTag.classList.remove('scrolled')
        navbarTag.classList.remove('bg-dark')
        navbarTag.classList.add('bg-white')
        navbarTag.classList.remove('navbar-dark')
        navbarTag.classList.remove('active')
        dropdownMenuTag.classList.remove('bg-dark')
        dropdownMenuATag.forEach(function (item) {
            item.classList.remove('text-white')
        })
    }
});


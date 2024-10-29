let menu=document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
let header =document.querySelector('header');


menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remeove('active');
}
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0);
});
 const sr =ScrollReveal({
    distance: '60px',
    duration:1000,
    delay:0,
    reset:true
});
sr.reveal('.home-text',{delay:100,origin:'top'})
sr.reveal('.home-img',{delay:200,origin:'top'})
sr.reveal('.about-title,.about-text,.heading,.box,input,textarea',{delay:100,origin:'top'})


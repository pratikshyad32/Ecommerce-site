let a= document.getElementsByClassName("navbarcontent");

let b=document.getElementsByClassName("baricon");



b[0].addEventListener('click',()=>{
    a[0].classList.toggle('active');
})
var typed=new Typed(".multiple",{
strings:["UI/UX DESIGNER", "YOUTUBER","COMPUTER SCIENCE STUDENT","UDEMY INSTRUCTOR","CYBERSECURITY","FREELANCER"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true




}
)



var typed1=new Typed(".ab",{
strings:["UI/UX DESIGNER", "YOUTUBER","COMPUTER SCIENCE STUDENT","UDEMY INSTRUCTOR"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true




}
)

let menu=document.querySelector('#menu-icon');
let nav=document.querySelector('.navbar');

menu.onclick()=() =>{

menu.classList.toggle('bx-x');
nav.classList.toggle('active');

};





let sections=document.querySelectorAll('section');
let navlink=document.querySelectorAll('section');

window.onscroll =() =>{




    sections.forEach(sec => {
let top=window.scrollY;
let offset=sec.offsetTop-150;
let height=sec.offsetHeight;
let id=sec.getAttribute('id');
if(top >=offset && top <offset+height){

navlink.forEach(links =>{


links.classList.remove('active');
document.querySelector('header nav a[href*=' +id +']').classList.add('active');
});
};
});

let header =document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);
};
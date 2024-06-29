const downloadButton = document.getElementById("resbtn");
downloadButton.addEventListener("click",function(){
const fileUrl = "https://drive.google.com/file/d/1KOr5Zkpi_yx3haoPR9t8cUUPdZKOT69L/view?usp=drivesdk";
const fileName=  "MY RESUME";

const link =document.createElement("a");
link.href=fileUrl;
link.download= fileName;

link.click();
});

let menu =document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');


    sections.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop - 100;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top< offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            } );
          /*sec.classList.add('show-animate');*/

        }
         /*else{
            sec.classList.remove('show-animate');
         }*/
        
    });

   
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

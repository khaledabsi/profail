// let up = document.querySelector(".scroll-up")
// let section = document.querySelectorAll('section')
// let link = document.querySelectorAll('.menu-wrap ul li')

// window.onscroll = function () {

//     let current = ''
//     Selection.forEach(section => {
//         if (pageyoffset >= section.offsetTop) {
//             current = section.getAttribute('id')

//         }
//         links.forEach(link => {
//             if (link.classlist.contains(current)) {
//                 link.classlist.add(active);
//             } else {
//                 link.classlist.remove('active')
//             }
//         })
//     });
//     window.scrollY >= 800 ? up.classlist.and('show') : up.classlist.remove('show')
// }


// up.onclick = function () {
//     window.scrollTo({top: 0,})


//     const navToggle = document.querySelector('nav-toggle')
//     const bodyElement = document.querySelector('body')

//     navToggle.onclick = function () {
//         bodyElement.classlist.toggle('open-menu')
//     }
// }

// function makeActive() {
//     var element = document.getElementById("text");
//     element.classList.add("active");
//     element.innerHTML="This is Active";
// }

// $(document).ready(function(){
//     var element = document.getElementById("dark-mood-icon");

//     element.classList.add("active");
// });

var topbtn = document.getElementById("btn");
        window.onscroll = function(){
            if(window.scrollY >= "800"){
                topbtn.style.display = "block"; 

            }else{
                topbtn.style.display = "none"; 
            }
        };
        topbtn.onclick = function(){
            window.scrollTo({
                top : 0 ,
                behavior : "smooth"
            })
        }



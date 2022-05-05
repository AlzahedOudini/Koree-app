const tabs1 = document.querySelectorAll(".box_card .card_item");
const content1 = document.querySelectorAll(".what_content");

tabs1.forEach((tab, index) =>{
    tab.addEventListener("click", () => {

        tabs1.forEach((tab) => tab.classList.remove("active"));
        tab.classList.add("active");

        content1.forEach((c) => c.classList.remove("active"));
        content1[index].classList.add("active");
    });
});

tabs1[0].click();


const tabs2 = document.querySelectorAll(".other_content .my_boxx");
const content2 = document.querySelectorAll(".content_box");

tabs2.forEach((tab, index) =>{
    tab.addEventListener("click", () => {

        tabs2.forEach((tab) => tab.classList.remove("active"));
        tab.classList.add("active");

        content2.forEach((c) => c.classList.remove("active"));
        content2[index].classList.add("active");
    });
});












/**
   * Faq Alzahed oudini
   */

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('myfaqcontent');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#EFDBAD";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#FFFFFF";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#FFFFFF";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}
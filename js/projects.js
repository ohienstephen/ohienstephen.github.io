const name = document.querySelector('#project-name');
const image1 = document.querySelector('#project-display-image1');
const image2 = document.querySelector('#project-display-image2');
const image3 = document.querySelector('#project-display-image3');
const services = document.querySelector('#project-services');
const details = document.querySelector('#project-details');
//const project = window.Request.
let index = 0;

console.log("Hy");
var url = window.location.href.split("/")
if(url[3] == "project-tutorpoint.html"){
    index = 0
}
else 
if(url[3] == "project-vid-ly.html"){
    index = 1
}
else if(url[3] == "project-code.html"){
    index = 2
}
else if(url[3] == "project-firstborn.html"){
    index = 3
}

fetch('js/projects.json')
.then(res => res.json())
.then(data => {
    console.log(data);
    let newData = data.products[index];
    name.innerHTML = newData.name;
    image1.src = newData.image1;
    image2.src = newData.image2;
    image3.src = newData.image3;
    services.innerHTML = newData.services;
    details.innerHTML = newData.details;
})
.catch();
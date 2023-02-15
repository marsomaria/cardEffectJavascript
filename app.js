//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//items
const title = document.querySelector(".title");
const product = document.querySelector(".product img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");





//Moving animation Event
container.addEventListener("mousemove", (e) => {
    // let xAxis = (window.innerHeight / 2 -e.pageX /10);
    // let yAxis = (window.innerHeight / 2 -e.pageY /10);
    // card.style.transform= `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;


    let xAxis = (window.innerHeight / 2 -e.pageX )/ 15;
    let yAxis = (window.innerHeight / 2 -e.pageY) / 15;
    card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//Animate in
container.addEventListener('mouseenter', (e) => {
    
    card.style.transiton='none';
    //pop up effect
    title.style.transform = "transalteZ(150px)";
    product.style.transform = "transalteZ(150px)";
});
//Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition="all 0.5s ease";
    card.style.transform= `rotateY(0deg) rotateX(0deg)`;
});
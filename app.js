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
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    product.style.transform = "translateZ(200px)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  })

//Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition="all 0.5s ease";
    card.style.transform= `rotateY(0deg) rotateX(0deg)`;
    //pop out effect
    title.style.transform = "translateZ(0px)";
    product.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");


//Moving animation Event
container.addEventListener("mousemove", (e) => {
    // let xAxis = (window.innerHeight / 2 -e.pageX /10);
    // let yAxis = (window.innerHeight / 2 -e.pageY /10);
    // card.style.transform= `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;


    let xAxis = (window.innerHeight / 2 -e.pageX / 20);
    let yAxis = (window.innerHeight / 2 -e.pageY / 20);
    card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//Animate in

//Animate out
container.addEventListener('mouseleave', (e) => {
    
})
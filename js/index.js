let viewUser = ["Welcome, to our website", "Why Exercise is important"]
let count = 0;
let element=document.querySelector(".h-primary");

let time= setInterval(welcomeHere,4000);

function welcomeHere(){
    element.textContent = viewUser[count];
    count++;
    if (count >= viewUser.length) {
        count = 0;
    }
}

let type = ["Follow for Good health", 'Type of Exercise']
let typeWorkout = document.querySelector(".h1-secondary");
let counter=0;

let time_type = setInterval(typeTime,4000);

function typeTime(){
    typeWorkout.textContent= type[counter];
    counter++;
    if(counter>=type.length){
        counter=0;
    }
}

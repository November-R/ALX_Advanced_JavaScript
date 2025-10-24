//functions for mental health and productivity

function washDishes(callback) {

    setTimeout(() => {
        console.log("You have washed the dishes");
        callback();
    }, 2000);
}


function watchTv(callback){

    setTimeout(() => {
        console.log("You have to watch tv");
        callback();
    }, 3000);
}

function readBook(callback) {

    setTimeout(() => {
        console.log("Yo should read some fan fiction");
        callback();
    }, 2500);
}

function goWalk(callback){

    setTimeout(() =>{
        console.log("You have to go for a walk");
        callback();
    }, 1000);
}

//callback hell

washDishes(() => {
    watchTv(() => {
        readBook(() => {
            goWalk(() => console.log("You have just worked on your mental health. Good girl"));
        });
    });
});
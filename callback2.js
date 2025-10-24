//practice callbacks through ordering food in a restraunt

function appetizer(callback){

    setTimeout(() => {
        console.log("You have ordered an appetizer");
        callback();
    }, 2000);
}

function mainCourse(callback){
    setTimeout(() => {
        console.log("You have ordered our main course: ");
        callback();
    }, 1000);
}

function dessert(callback){

    setTimeout(() => {
        console.log("You have ordered a dessert");
        callback();
    }, 2500);
}

appetizer(() => {
    mainCourse(() => {
        dessert(() => console.log("We hope you have enjoyed all our meals"));
    });
});
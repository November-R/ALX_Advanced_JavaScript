//functions on movie recomendations

function horror(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You have watched a horror move genre");
        },500);
    });
}

function romance(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You have watched a romance movie genre");
        }, 200);
    });
}

function scifi(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You have watched a scifi movie");
        }, 100);
    });
}

//horror().then(value => console.log(value));

horror().then(value => {console.log(value); return romance()})
        .then(value => {console.log(value); return scifi()})
        .then(value => {console.log(value); console.log("You have binged all your todo movie genre")});
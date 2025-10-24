//energy drinks

function monsterEnergy(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const monsterDrink = true;

            if (monsterDrink) {
                resolve("You have drunk the monster energy drink");
            } else {
                reject("You have not drunk a monster energy drink");
            }
        }, 2000);


    });
}

function redbullEnergy(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const redbullDrink = true;

            if (redbullDrink) {
                resolve("You have drunk a redbull energy drink");
            } else{
                reject("You have not drunk a redbull energy drink");
            }

        }, 1500);
    });
}

function predatorEnergy(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const predatorDrink = false;

            if (predatorDrink) {
                resolve("You have drunk a predator energy drink");
            } else{
                reject("You have not drunk a predator energy drink");
            }

        }, 2500);
    });
}

monsterEnergy().then(value => {console.log(value); return redbullEnergy()})
               .then(value => {console.log(value); return predatorEnergy()})
               .then(value => {console.log(value); console.log("You have drunk all the best energy drinks")})
               .catch(error => console.log(error));
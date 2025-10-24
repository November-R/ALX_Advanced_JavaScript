function lenovoModel() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const lenovoLaptop = true;

            if (lenovoLaptop) {
                resolve("You have a lenovo laptop");
            
            }else {
                reject("You do not have a lenovo laptop");
            }
        }, 300);
    });
}


function hpModel() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const hpLaptop = true;

            if (hpLaptop) {
                resolve("You have a hp laptop");
            
            }else {
                reject("You do not have a hp laptop");
            }
        }, 300);
    });
}


function delModel() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const delLaptop = false;

            if (delLaptop) {
                resolve("You have a del laptop");
            
            }else {
                reject("You do not have a del laptop");
            }
        }, 300);
    });
}

async function laptopModel() {
    try {
        
        const lenovoModelResults = await lenovoModel();
        console.log(lenovoModelResults);

        const hpModelResults = await hpModel();
        console.log(hpModelResults);

        const delModelResults = await delModel();
        console.log(delModelResults);

    }
    catch(error) {
        console.error(error)
    }
}

laptopModel()
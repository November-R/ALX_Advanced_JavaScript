// function that takes an array of numbers,
// looks if they are even, 
// places them in an array
// logs them to the console when called

function filterEven(myArray){

    let evenNumbers = [];

    for(i = myArray[0]; i < myArray.length; i++){
        if(i % 2 == 0){
            evenNumbers.push(i);
            console.log(evenNumbers);
        }
    }
}

filterEven([1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 14]);


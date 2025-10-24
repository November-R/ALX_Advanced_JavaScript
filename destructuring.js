//an array of book titles
const books = ["Mr.Darcy","Frankestein", "Aristotle and Dante", "Holy Bible"];

//deconstructing the array variable by their types and positions
const[Romance, Horror, YoungAdult, Religion] = books;

//a object containing information about an owl
const owlCharacteristics = {
    "name" : "Grey Ghost",
    "age" : 4,
    "color" : "grey",
    "size" : "tiny"
}

// deconstructing the object by their keys
const{name, age, color, size} = owlCharacteristics;

//logging the deconstructed variables
console.log(Romance);
console.log(Horror);
console.log(YoungAdult);
console.log(Religion);
console.log(age);


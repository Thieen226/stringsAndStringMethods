//create length function
let word = "names";
let index = 0;
let length = 0; 
function varLength(){
    //when the condition is true, add 1 to index and add 1 to length
    while(word[index]){
        index++;
        length++;
    }
    return length;
}
varLength(word);
console.log(length);

//create slice() function
let fruits = "homework";

//create a empty array to contain the string after slicing
let slicedFruits = [];
function slice(start, end){
    //create a for loop to check through the string
    for(let i = 0; i < fruits.length; i++){

        //set fruits[start] equals to the index you start slicing
        fruits[start] = fruits[i];
        slicedFruits.push(fruits[start]);

        //set fruits[end] equals to the index you want to stop slicing
        fruits[end] = fruits[i];
        slicedFruits.push(fruits[end]);
    }
    return slicedFruits;
}
console.log(slice(0, 3));





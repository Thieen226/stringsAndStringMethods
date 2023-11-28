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
//create a empty string to contain the string after slicing
let slicedFruits = "";
function slice(start, end){
    //create a for loop to put the letters into new string
    for(let i = start; i < end; i++){
        slicedFruits += fruits[i];
    }
    return slicedFruits;
}
console.log(slice(3, 8));







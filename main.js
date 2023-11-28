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
let words = "homework";
//create an empty string to hold the letters after slicing
let slicedWords = "";
function slice(start, end){
    //create a for loop to put the letters into new string
    for(let i = start; i < end; i++){
        slicedWords += words[i];
    }
    return slicedWords;
}
console.log(slice(3, 8));


//create replace() function
let fullName = "Thien Ho";
//create an empty string to hold new variable after replacing
let newName = "";
 function replace(a, b){
 }








//create length function
let word = "names"
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

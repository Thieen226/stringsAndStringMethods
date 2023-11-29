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
    for(let i = 0; i < fullName.length; i++){
        //check if the letter in the original string same as a
        if(fullName[i] === a){
            //then index = the ith where the matching letter is
            index = i;
        }
        break;
    }

    for(let i = 0; i < fullName.length; i++){
        //check if i equals to the index of matching letter
        if(i === index){
            //then change it to new letter
            newName += b;
        }
        else{
            //otherwise keep the rest
            newName += fullName[i];
        }
    }
    return newName;
 }
 console.log(replace("T", "M"));


 //create replaceAll() function 
 let country = "The United States";
 let newCountry = "";
 function replaceAll(original, replacement){
    for(let i = 0; i < original.length; i++){
        if(original[0] === country[i]){
            index = i;
        }
    }
    for(let i = 0; i < country.length; i++){
        if(index === i){
            newCountry += replacement;
        }
        else{
            newCountry += country[i];
        }
    }
    return newCountry;
}
console.log(replaceAll("States", "Kingdom"));


//create concat() function
let fruits = "apple, banana, kiwi";
let drinks = "orange juice, coke, pepsi";
function concat(){
    
}







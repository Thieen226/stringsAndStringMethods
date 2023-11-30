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
 function replaceAll(original, replacement){
    let country = "The United States";
    let newCountry = "";
    for(let i = 0; i < country.length; i++){
        if(country[i] === original){
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
let fruits = "apple, banana, kiwi, ";
let drinks = "juice, coke, pepsi";
let concatString = "";
function concat(){
    //adding fruits string into concatString
    for(let i = 0; i < fruits.length; i++){
        concatString += fruits[i];
    }
    //adding drinks string into concatString after the first string
    for(let i = 0; i < drinks.length; i++){
        concatString += drinks[i];
    }
}
concat();
console.log(concatString);


//create charAt() function
let schoolName = "Yerba Buena High School";
function charAt(index){
    for(let i = 0; i < schoolName.length; i++){
        //if the ith of schoolName equals to the desired index 
        if(i === index){
            //return the ith letter
            return schoolName[i];
        }
    }
}
console.log(charAt(1));







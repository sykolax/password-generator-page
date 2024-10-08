const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
    "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
    "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let generateBtnEl = document.querySelector("#generate-btn");
let passwordEls = document.querySelectorAll(".generated-password");

function generateRandomNumbers(num) {
    let randomNums = [];
    for(let i = 0; i < num; i++) {
        randomNums.push(Math.floor(Math.random() * characters.length));
    }
    return randomNums;
}

function constructPassword(num) {
    let password = "";
    randomIdx = generateRandomNumbers(num);
    for(let i = 0; i < num; i++) {
        password += characters[randomIdx[i]];       
    }
    return password;
}


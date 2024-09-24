let Guess = parseInt(prompt('Guess'));
let rand = Math.floor(Math.random() * 10);
let attempts=1;

while(!Guess){
    Guess = parseInt(prompt('Please enter a number between 1 and 10'));
    }


while((Guess!==rand)){
    attempts++;
    if(Guess<rand){
        Guess = parseInt(prompt('Guess is Lower try again'));
    }
    else{
        Guess = parseInt(prompt('Guess is higher try again'));
    }
}
console.log(`Guess is Right in ${attempts} attempts`);

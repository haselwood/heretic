const firstName ="Heather";
const lastName ="Hex"

const sentence = `Hello ${firstName} ${lastName}, How are you?`;
console.log(sentence);

const TheSkyBlue = true;
console.log(TheSkyBlue);

const num =666.66;

console.log(num);

const isSkyBlue = false;
if (isSkyBlue) {
    console.log("The sky is blue");
} else {
    console.log("The sky is not blue");
}

/*const friendsAtYourParty = 10;
if (friendsAtYourParty === 0) {
    console.log("You can eat all the nachos by yourself");
} else if (friendsAtYourParty <=4) {
    console.log("Great we can play Mario Kart")
} else {
    console.log("We will do a sacrificial ritural")
}*/

let friendsAtYourParty = 0;

//loop, reexecuted code until condition is false
while (friendsAtYourParty < 10) {
    console.log(friendsAtYourParty);
    friendsAtYourParty = friendsAtYourParty + 1;
    friendsAtYourParty += 1;
    friendsAtYourParty++;
}

console.log(friendsAtYourParty);

let friendsAtYourParty2 = 0;

for (i=0; i<10; i++) {
    friendsAtYourParty2++;
    console.log(friendsAtYourParty2);
}


const character = 't';
const timesToRepeat = 5;
let answer = ''; 

for (let i=0; i < timesToRepeat; i++) {
    answer += character;
}

console.log (answer); //tttt

const sleep = 'z';
const hoursOfSleep = 24;
let rest = '';

for (let i=0; i <hoursOfSleep; i++) {
    rest += sleep;
}

console.log (`MMM... ${rest}`);


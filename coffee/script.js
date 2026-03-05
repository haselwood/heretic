//99 bottles of beer loop

/*let drinksWithJason = 99;
while (drinksWithJason > 0) {
    console.log(drinksWithJason + ' bottles of beer on the wall, ' + drinksWithJason + ' bottles of beer.');
    console.log("Take one down and pass it around");
    drinksWithJason--;
    if (drinksWithJason > 0) {
        console.log(drinksWithJason + ' bottles of beer on the wall');
    }
}
console.log("No more bottles of beer on the wall!");*/

const drinksWithJason = 10;
const emoji = 'beer ';

/*let drink = "";

for (let i = 0; i< drinksWithJason; i++) {
 drink = drink + emoji;
}
console.log(drink);*/

console.log(emoji.repeat(drinksWithJason));
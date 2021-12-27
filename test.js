//Let's test a few things here 

const flowers = ['peony', 'roses', 'sunflowers'];

function addFlower(arr){
    arr.push('lilies');
}

addFlower(flowers);//array is mutated 

console.log(flowers);

let countString = '';
let i = 1;

do {
    countString = countString + i;
    i++;
} while (i <= 5);

console.log(countString);

//Show the differenct between while and do while 

const firstM = 'I will print';
const secondM = 'I will not print';

//a do while with a stopping condition that evaluates to false 

do {
    console.log(firstM);
} while (true === false); 

//while loop with a stopping condition that evaluates to false

while (true === false){
    console.log(secondM);
};

const cupsNeeded = 12;
let cupsAdded = 0;

do {
    cupsAdded++;
    //console.log(`${cupsAdded} ${(cupsAdded > 1) ? 'cups' : "cup "} of sugar added`);
} while (cupsAdded < cupsNeeded);

const words = ['apple', 'banana', 'orange', 'pinapple'];

for (let i = 0; i < words.length; i++) {
    console.log(words[i]);

    if (words[i] === 'orange'){
        break;
    }

}
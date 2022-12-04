// YOUR CODE COMES HERE

// Sum of Cats

function positiveSum(numbers) {
    let counter = 0;
    for (let num of numbers) {
        if (num >= 0) {
            counter += 1;
        }
    }
    return counter;
}

console.log(positiveSum([1, -7, -8, 7, -5, 3, -3, 2, 1]));

// Wrong names

function removeChar(catNames) {
    let splitedNames = [];
    splitedNames = catNames.split(", ");
    for (let i = 0; i < splitedNames.length; i++) {
        splitedNames[i] = splitedNames[i].slice(1, -1)
    }
    return splitedNames;
}

console.log(removeChar("BBonifacy, FFilemon, FFrania, MMania"));

// Youngest cat - Attention: "..." when Math.min and array.

const youngestCat = (catAges) => {
    let result = 0;
    result = Math.min(...catAges);
    console.log(catAges)
    console.log(result)
    return `Our youngest cat is ${result} years old`
}

console.log(youngestCat([1, 5, 8, 3, 6, 2]));

// Cat ID

const createId = (catId) => {
    let splited = [];
    let result = [];
    splited = catId.toString().split("");
    result = splited.reverse();
    return result.map(Number);
}

console.log(createId(35231));

// Food time

const foodTime = (foodlist) => {
    let array = [];
    let i = foodlist[0];
    do {
        array.push(i)
        i++
    } while (i <= foodlist[foodlist.length - 1])
    return array;
}

console.log("------------------------------------")
console.log(foodTime([7, 2, 3, 5, 1]));

// Where is Mimi?

let cats = [
    {
        nickname: "Marcel",
        age: 25,
        owner: "Shelter"
    },
    {
        nickname: "Filemon",
        age: 25,
        owner: "Shelter"
    },
    {
        nickname: "Bonifacy",
        age: 25,
        owner: "John"
    },
];

const searchCat = (list, name) => {
    for (let cat of list) {
        if (cat.nickname === name) {
            return name;
        }
    }
    return 0;
}

console.log(searchCat(cats, "Filemon"));

// Adopted cats

const removeCats = (cats) => {
    let result = [];
    result = cats.slice(1, -1)
    return result;
}

console.log(removeCats(['Bonifacy', 'Filemon', 'Frania', 'Mania']));

// Similar cat names

let old = ['Bonifacy', 'Filemon', 'Sztos', 'Kabanos', 'Bambur'];
let young = ['Bonifacy', 'Bambur', 'KotWButach', 'Kabanos', 'Sztos'];

const similarCatNames = (olderCats, youngerCats) => {
    let array = [];
    for (let cat of olderCats) {
        for (let kitten of youngerCats) {
            if (cat === kitten) {
                array.push(cat);
            }
        }
    }
    return array;
}

let catNicknames = similarCatNames(old, young).join(", ")
console.log(`Similar cat names: ${catNicknames}`);


// v. 2
const similarCatNames2 = (olderCats, youngerCats) => {
    let array = [];
    for (let cat of olderCats) {
        if (youngerCats.includes(cat)) {
            array.push(cat);
        }
    }
    return array;
}
console.log(similarCatNames2(old, young));


// Let's see the cats
let catNames = similarCatNames(old, young);






// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        { name: "positiveSum", content: positiveSum, type: "function" },
        { name: "removeChar", content: removeChar, type: "function" },
        { name: "youngestCat", content: youngestCat, type: "function" },
        { name: "createId", content: createId, type: "function" },
        { name: "foodTime", content: foodTime, type: "function" },
        { name: "searchCat", content: searchCat, type: "function" },
        { name: "removeCats", content: removeCats, type: "function" },
        { name: "similarCatNames", content: similarCatNames, type: "function" },
        { name: "catNames", content: catNames, type: "array" }
    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport };

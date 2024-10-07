// ========================================
//       Arrays TS Level-1_10 (Split)
// ========================================
console.log('%c Arrays TS Level-1_10 (Split) ', 'background: black; color: yellow;');

const futuramaQuote: string = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

const result1 = futuramaQuote.split('.');
console.log(result1);

const result2 = futuramaQuote.split(' ');
console.log(result2);

const result3 = futuramaQuote.split('');
console.log(result3);

// ========================================
//       Arrays TS Level-1_11 (includes)
// ========================================
console.log('%c Arrays TS Level-1_11 (includes) ', 'background: black; color: yellow;');

let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
let stringArr = string.split(' ');

console.log(stringArr.includes('piper'));
console.log(stringArr.includes('Piper'));
console.log(stringArr[4].includes('peck'));
console.log(stringArr[4].includes('Peck'));

// console.log(string.toLowerCase().includes('piper'));
// console.log(string.toLowerCase().includes('Piper'));
// console.log(string.includes('peck'));
// console.log(string.includes('Peck'));

// ========================================
//       Arrays TS Sort Level-2_1
// ========================================
console.log('%c Arrays TS Sort Level-2_1 ', 'background: black; color: yellow;');

const namesArr: string[] = ['Sergio', ' Hannah', 'Regallager', 'Reliefpfeiler', 'Rentner'];
const phrasesArr: string[] = ['Ella mag alle Bohnen', 'han nesaH has ennaH'];

const invertedArr = (arr: string[]) => {
    return arr.map((name: string) => name.split('').reverse().join(''));
};

console.log(invertedArr(namesArr));
console.log(invertedArr(phrasesArr));

// ========================================
//       Arrays TS sort Level-1_1 (sort)
// ========================================
console.log('%c Arrays TS sort Level-1_1 (sort) ', 'background: black; color: yellow;');

let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortAlphabetically = (arr: string[]) => {
    return console.log(arr.sort());
}

sortAlphabetically(languages);

let europeanCountries: string[] = [
    "France",
    "Germany",
    "Sweden",
    "Great Britain",
    "Czech Republic",
    "Switzerland"
]

sortAlphabetically(europeanCountries);

// ========================================
//   Arrays TS sort Level-1_2 (sort + reverse)
// ========================================
console.log('%c Arrays TS sort Level-1_2 (sort + reverse) ', 'background: black; color: yellow;');

let codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortDescending = (a: string, b: string) => {
    return b.localeCompare(a);
}

console.log(codingLanguages.sort(sortDescending));
console.log(europeanCountries.sort(sortDescending));

// ========================================
//   Arrays TS sort Level-1_3 (sort)
// ========================================
console.log('%c Arrays TS sort Level-1_3 (sort) ', 'background: black; color: yellow;');

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.toSorted((a: number, b: number) => a - b));
console.log(numArray1.toSorted((a: number, b: number) => b - a));

// ========================================
//   Arrays TS sort Level-2_2 (sort)
// ========================================
console.log('%c Arrays TS sort Level-2_2 (sort) ', 'background: black; color: yellow;');

let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];

console.log(numArray.sort((a: number, b:number) => a - b));

// ========================================
//   Arrays TS Level-3_1 (find, split, trim)
// ========================================
console.log('%c Arrays TS Level-3_1 (find, split, trim) ', 'background: black; color: yellow;');

const artworks: string[] = [
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"
];

const artworkDates: string[] = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Die Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
];



const artworkFinder = (artworkName: string) => {
    if(
        artworks.find((artName) => artName.includes(artworkName)) ||
        artworkDates.find((artName) => artName.includes(artworkName))
    ) {
        const artNameOutput = artworks.find((name) => name.includes(artworkName))?.split('-')[0].trim();
        console.log(artNameOutput);
        const authorName = artworks.find((name) => name.includes(artworkName))?.split('-')[1].trim();
        console.log(authorName);
        const artYear = artworkDates.find((name) => name.includes(artworkName))?.split('-')[1].trim();
        console.log(`${artNameOutput} wurde von ${authorName} im Jahre ${artYear} gemalt`);
    } else {
        console.log(`Artwork ${artworkName} not found`);
    }
}

artworkFinder('Garten der Lüste');
artworkFinder('Mona Lisa');
artworkFinder('Die Geburt der Venus');
artworkFinder('Morena Linda');
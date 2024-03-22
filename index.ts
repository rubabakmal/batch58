//2 Personal Message
let Pname = "Eric";
console.log("Hello " + Pname + " ,would you like to learn some Python today?");


//3 Name Cases

let personName = "rubab akmal";

console.log("lowecase:" + personName.toLowerCase());
console.log("upercase:" + personName.toUpperCase());
let titlecaseName = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(`Titlecase:${titlecaseName}`);

//4 Famous Quote

let author = "Theodore Roosevelt";
let Quote = "Speak softly and carry a big stick";
console.log(author + " once said, " + Quote);

//5 Famous Quote 2: Repeat Exercise 4,

let famous_author = "Theodore Roosevelt";
let famous_quote = "Speak softly and carry a big stick";

let Message = famous_author + " once said " + famous_quote;

console.log(Message);

// 6 Stripping Names:

let nameWithWhitespace = " Muhammad \n\n Rana \t\t Akmal ";
console.log(nameWithWhitespace);

//7 Number Eight

console.log("Addition:", 5 + 3); // Output: 8


console.log("Subtraction:", 10 - 2); // Output: 8


console.log("Multiplication:", 4 * 2); // Output: 8


console.log("Division:", 16 / 2); // Output: 8

// 8 You should create four lines that look like this:console.log(5 + 3)

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// 9 Favorite Number

let favourite_no = 4;
let myMessage = "my favourite no is ";

console.log(myMessage + favourite_no);

// 10 Adding Comments


// Program Name: Famous Quote Program
// Author: [Rubab Akmal]
// Date: [19-03-2024]

// Store the famous person's name in a variable
let famous_person = "Theodore Roosevelt";

// Store the quote and its author
let quote = "Speak softly and carry a big stick";


// Compose the message
let final_Message = famous_person + " once said " + quote;

// Print the message
console.log(final_Message);

// Program Name: Favorite Number Program
// Author: [Rubab Akmal]
// Date: [19-03-2024]

// Store your favorite number in a variable
let favoriteNumber = 4;
// Store your favorite message in a variable
let fav_message = "My favorite number is ";
// Create a message revealing your favorite number
let message = "My favorite number is " + favoriteNumber ;

// Print the message
console.log(message);

// 11 , 12  Names: Store the names of a few of your friends in a array called names.

let names = ['rubab', 'sobia'];
for (let i = 0; i < names.length; i++){
    console.log("good morning " + names[i]);
}

// 13 Your Own Array

let transportation = ['car', 'motorcycle', 'landCrusier', 'train', 'car'];
for (let i = 0; i < transportation.length; i++){
    console.log("I would like to own a " + transportation[i]+".");
}

// 14 Guest List

let guestList = ['zoya', 'alia', 'Rehan'];
for (let i = 0; i < guestList.length; i++){
    console.log("Dear " + guestList[i] + ",\n I would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}

// 15 Changing Guest List
let guestListAgain = ['zoya', 'alia', 'Rehan'];

for (let i = 0; i < guestListAgain.length; i++) {
    console.log("Dear " + guestListAgain[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}

console.log(guestListAgain[1] + " can't make it to dinner.");

guestListAgain[1] = 'Rubi'; 

for (let i = 0; i < guestListAgain.length; i++) {
    console.log("Dear " + guestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}

guestList.unshift('alisha'); 
guestList.splice(Math.floor(guestList.length / 2), 0, 'komal'); 
guestList.push('rabbia'); 

console.log("Great news! We found a bigger dinner table.");

for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}

// 16 and 17  More Guests/Shrinking Guest List:
 
let lastGuestList = ['saba', 'alia', 'Rehan'];

for (let i = 0; i < lastGuestList.length; i++){
    console.log("Dear " + lastGuestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}

console.log(lastGuestList[1] + " cant make it to dinner");

lastGuestList[1] = "rubi";

for (let i = 0; i < lastGuestList.length; i++){
    console.log("Dear " + lastGuestList[1] + "\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}

lastGuestList.splice(Math.floor(lastGuestList.length / 2), 0, 'Komal');
lastGuestList.push('Sobia');
console.log("Great news! We found a bigger dinner table.");

for (let i = 0; i < lastGuestList.length; i++){
    console.log("Dear " + lastGuestList + "\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}
console.log('oops, Unfortunately, we can only invite two people for dinner.');

while (lastGuestList.length > 2) {
    let removedguest = lastGuestList.pop();
    console.log("sorry " + removedguest + ", we can't invite you to dinner this time.")
}
for (let i = 0; i < lastGuestList.length; i++){
    console.log("Dear " + lastGuestList + "You are still Invited")
}

lastGuestList.pop();
lastGuestList.pop();

console.log("Remaining Guests" + lastGuestList);

// 18 Seeing the World:

let placeToVisit = ['paris', 'France', 'New York', 'Canada'];

console.log("original order: " + placeToVisit);
console.log('alphabetical order: ', [...placeToVisit].sort());
console.log("original order (unchanged): " + placeToVisit);
console.log("reverse alphabetical order: ", [...placeToVisit].sort().reverse());
console.log("original order (unchanged): " + placeToVisit);
placeToVisit.reverse()
console.log("reversed order " + placeToVisit);
placeToVisit.reverse()
console.log('Original order (reversed again) ' + placeToVisit);
placeToVisit.sort()
console.log("Alphabetical order (sorted): " + placeToVisit);
placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order (sorted) " + placeToVisit);

// 19 Dinner guests

let recentGuestList = ['zoya', 'alia', 'Rehan'];

for (let i = 0; i < recentGuestList.length; i++) {
    console.log("Dear " + recentGuestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n[Your Name]");
}
console.log(recentGuestList[1] + " can't make it to dinner.");

recentGuestList[1] = 'Rubi'; 

for (let i = 0; i < recentGuestList.length; i++) {
    console.log("Dear " + recentGuestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n[Your Name]");
}
recentGuestList.unshift('soha');
recentGuestList.splice(Math.floor(recentGuestList.length / 2), 0, 'komal');
recentGuestList.push('Rabbia');
console.log("Number of people invited to dinner: " + recentGuestList.length);
for (let i = 0; i < recentGuestList.length; i++) {
    console.log("Dear " + recentGuestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n[Your Name]");
}

// 20  Array containing programming languages


let programmingLanguages: string[] = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Swift', 'Go', 'TypeScript', 'Rust', 'PHP'];
console.log("List of programming languages:");
for (let i = 0; i < programmingLanguages.length; i++) {
    console.log(programmingLanguages[i]);
}

// 21  Object containing information about different countries

let countries = [
    {
        name: 'United States',
        capital: 'Washington, D.C.',
        population: 331002651,
        language: 'English'
    },
    {
        name: 'France',
        capital: 'Paris',
        population: 65273511,
        language: 'French'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        population: 126476461,
        language: 'Japanese'
    },
    {
        name: 'Brazil',
        capital: 'Brasília',
        population: 212559417,
        language: 'Portuguese'
    }
];
console.log("Information about different countries:");
for (let i = 0; i < countries.length; i++) {
    console.log("Country: " + countries[i].name);
    console.log("Capital: " + countries[i].capital);
    console.log("Population: " + countries[i].population);
    console.log("Language: " + countries[i].language);
    console.log("-----------------------------------------");
}

// 22  Object containing information about specific countries

let countriess = [
    {
        name: 'United States',
        capital: 'Washington, D.C.',
        population: 331002651,
        language: 'English'
    },
    {
        name: 'France',
        capital: 'Paris',
        population: 65273511,
        language: 'French'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        population: 126476461,
        language: 'Japanese'
    },
    {
        name: 'Brazil',
        capital: 'Brasília',
        population: 212559417,
        language: 'Portuguese'
    },
     {
        name: 'paris',
        capital: 'parl',
        population: 212559417,
        language: 'ppppp'
    }
];

console.log("Information about a specific country:");
console.log("Country: " + countriess[4].name);
console.log("Country: " + countriess[0].name); 

// 23 Conditional Tests

// Test 1
let x = 5;
console.log("Is x == 5? I predict True.");
console.log(x == 5);

// Test 2
let y = 10;
console.log("Is y > 5? I predict True.");
console.log(y > 5);

// Test 3
let z = 'rubab';
console.log("Is z === 'sobia'? I predict True.");
console.log(z === 'sobia');

// Test 4
let a = 20;
console.log("Is a < 10? I predict False.");
console.log(a < 10);

// Test 5
let b = 'banana';
console.log("Is b !== 'apple'? I predict True.");
console.log(b !== 'apple');

// Test 6
let c = 15;
console.log("Is c <= 20? I predict True.");
console.log(c <= 20);

// Test 7
let d = 'orange';
console.log("Is d == 'grape'? I predict False.");
console.log(d == 'grape');

// Test 8
let e = 25;
console.log("Is e >= 30? I predict False.");
console.log(e >= 30);

// Test 9
let f = 'pear';
console.log("Is f === 'banana'? I predict False.");
console.log(f === 'banana');

// Test 10
let g = 12;
console.log("Is g !== 15? I predict True.");
console.log(g !== 15);

// 24 More Conditional Tests:

// Tests for equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

let color = 'blue';
console.log("Is color != 'red'? I predict True.");
console.log(color != 'red');
// Tests using the lower case function
let userInput = 'HELLO';
console.log("Is userInput.toLowerCase() === 'hello'? I predict True.");
console.log(userInput.toLowerCase() === 'hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 < num2? I predict False.");
console.log(num1 < num2);

console.log("Is num1 >= num2? I predict True.");
console.log(num1 >= num2);

console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let age = 25;
console.log("Is age > 18 and age < 30? I predict True.");
console.log(age > 18 && age < 30);

let isStudent = true;
console.log("Is age > 18 or isStudent? I predict True.");
console.log(age > 18 || isStudent);

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in numbers? I predict True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));

// 25 Alien Colors #1

let alien_color = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
// else block
let alien_color_failed = 'red';

if (alien_color_failed === 'green') {
    console.log("The player just earned 5 points.");
}

// 26 Alien Colors #2:
let alien_color2 = 'green';

if (alien_color2 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// else block

let alien_color_block = 'red';

if (alien_color_block === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// 27 Alien Colors #3:

let alien_color_green = 'green';
if (alien_color_green === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_green === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_green === 'red') {
    console.log("The player earned 15 points.");
}


let alien_color_yellow = 'yellow';
if (alien_color_yellow === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_yellow === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_yellow === 'red') {
    console.log("The player earned 15 points.");
}

let alien_color_red = 'red';
if (alien_color_red === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color_red === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color_red === 'red') {
    console.log("The player earned 15 points.");
}


// 28 Stages of Life:

let p_age = 25;

if (p_age < 2) {
    console.log("The person is a baby.");
} else if (p_age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (p_age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (p_age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (p_age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// 29 favourite fruit

let favorite_fruits = ['apple', 'banana', 'orange'];

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}


// 30 Hello Admin

let usernames = ['admin', 'rubab', 'sobia', 'irfan', 'raheem'];

for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again.");
    }
}

// 31 No Users

let admin_user = ['admin', 'rubab', 'sobia', 'irfan', 'raheem'];

if (admin_user.length === 0) {
    console.log("We need to find some users!");
} else {
    let p_age = 25;

    if (p_age < 2) {
        console.log("The person is a baby.");
    } else if (p_age >= 2 && p_age < 4) {
        console.log("The person is a toddler.");
    } else if (p_age >= 4 && p_age < 13) {
        console.log("The person is a kid.");
    } else if (p_age >= 13 && p_age < 20) {
        console.log("The person is a teenager.");
    } else if (p_age >= 20 && p_age < 65) {
        console.log("The person is an adult.");
    } else {
        console.log("The person is an elder.");
    }
}

admin_user = [];

if (admin_user.length === 0) {
    console.log("We need to find some users!");
}

// 32 Checking Usernames 

let current_users = ['admin', 'rubab', 'sobia', 'irfan', 'raheem'];

let new_users = ['saba', 'rubab', 'arica', 'sarah', 'irfan'];

let lower_current_users = current_users.map(user => user.toLowerCase());

for (let i = 0; i < new_users.length; i++) {
    let username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (lower_current_users.includes(username)) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}


// 33 Ordinal Numbers
let o_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < o_numbers.length; i++) {
    let number = o_numbers[i];
    let ordinal;

    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    console.log(number + ordinal);
}


// 34 Pizzas
let pizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

for (let i = 0; i < pizzas.length; i++) {
    console.log("I like " + pizzas[i] + " pizza.");
}
console.log("Pizza is one of my favorite foods. I really love pizza!");

// 35 Animals

let animals = ['Dog', 'Cat', 'Rabbit'];

for (let i = 0; i < animals.length; i++) {
    console.log("A " + animals[i] + " would make a great pet.");
}
console.log("Any of these animals would make a great pet!");

// 36 T-Shirt

function make_shirt(shirtSize: string, shirtMessage: string) {
    console.log("The shirt size is " + shirtSize + " and it will have the message: " + shirtMessage);
}

make_shirt("Medium", "Hello, World!");


// 37 large shirts

function make_shirt_l(size = "Large", message = "I love TypeScript") {
    console.log("The shirt size is " + size + " and it will have the message: " + message);
}

make_shirt_l();

make_shirt_l("Medium");

make_shirt_l("Small", "JavaScript is awesome!");


// 38 cities

function describe_city(dcity: string, country: string = "Pakistan") {
    console.log(dcity + " is in " + country + ".");
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

// 39 City Names:

function city_country(city: string, country: string): string {
    return city + ", " + country;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));



// 40 Album
interface Album {
    artist: string;
    title: string;
    tracks?: number; 
}

function make_album(artist_name: string, album_title: string, tracks?: number): Album {
    let album: Album = { artist: artist_name, title: album_title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1: Album = make_album('Artist1', 'Album1');
let album2: Album = make_album('Artist2', 'Album2', 12);
let album3: Album = make_album('Artist3', 'Album3', 8);

console.log(album1);
console.log(album2);
console.log(album3);

// 41
function showMagician(magicians_new: string[]) {
    magicians_new.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician names
const magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
showMagician(magicianNames);


// 42
function show_magicians(magic: string[]): void {
    for (let magician of magic) {
        console.log(magician);
    }
}

function make_great(magic: string[]): string[] {
    const g_meg: string[] = [];
    for (let magician of magic) {
        g_meg.push(`${magician} the Great`);
    }
    return g_meg;
}

const magicians: string[] = ['Rubab Akmal', 'Sofia Rajput', 'Rehan Khan', 'Irfan'];
const g_meg: string[] = make_great(magicians);
show_magicians(g_meg);

// 43 Unchanged Magicians

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

const originalMagicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
const copiedMagicians: string[] = [...originalMagicians];
const greatMagicians: string[] = makeGreat([...originalMagicians]);
console.log("Original Magicians:");
showMagicians(copiedMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

// 44 Sandwiches

function orderSandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss cheese", "Pickles");
orderSandwich("Tuna", "Mayonnaise");

// 45 Cars

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let option of options) {
        const [key, value] = option;
        car[key] = value;
    }

    return car;
}
const carInfo = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);
console.log(carInfo);





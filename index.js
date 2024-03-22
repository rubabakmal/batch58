var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//2 Personal Message
var Pname = "Eric";
console.log("Hello " + Pname + " ,would you like to learn some Python today?");
//3 Name Cases
var personName = "rubab akmal";
console.log("lowecase:" + personName.toLowerCase());
console.log("upercase:" + personName.toUpperCase());
var titlecaseName = personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
console.log("Titlecase:".concat(titlecaseName));
//4 Famous Quote
var author = "Theodore Roosevelt";
var Quote = "Speak softly and carry a big stick";
console.log(author + " once said, " + Quote);
//5 Famous Quote 2: Repeat Exercise 4,
var famous_author = "Theodore Roosevelt";
var famous_quote = "Speak softly and carry a big stick";
var Message = famous_author + " once said " + famous_quote;
console.log(Message);
// 6 Stripping Names:
var nameWithWhitespace = " Muhammad \n\n Rana \t\t Akmal ";
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
var favourite_no = 4;
var myMessage = "my favourite no is ";
console.log(myMessage + favourite_no);
// 10 Adding Comments
// Program Name: Famous Quote Program
// Author: [Rubab Akmal]
// Date: [19-03-2024]
// Store the famous person's name in a variable
var famous_person = "Theodore Roosevelt";
// Store the quote and its author
var quote = "Speak softly and carry a big stick";
// Compose the message
var final_Message = famous_person + " once said " + quote;
// Print the message
console.log(final_Message);
// Program Name: Favorite Number Program
// Author: [Rubab Akmal]
// Date: [19-03-2024]
// Store your favorite number in a variable
var favoriteNumber = 4;
// Store your favorite message in a variable
var fav_message = "My favorite number is ";
// Create a message revealing your favorite number
var message = "My favorite number is " + favoriteNumber;
// Print the message
console.log(message);
// 11 , 12  Names: Store the names of a few of your friends in a array called names.
var names = ['rubab', 'sobia'];
for (var i = 0; i < names.length; i++) {
    console.log("good morning " + names[i]);
}
// 13 Your Own Array
var transportation = ['car', 'motorcycle', 'landCrusier', 'train', 'car'];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a " + transportation[i] + ".");
}
// 14 Guest List
var guestList = ['zoya', 'alia', 'Rehan'];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\n I would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}
// 15 Changing Guest List
var guestListAgain = ['zoya', 'alia', 'Rehan'];
for (var i = 0; i < guestListAgain.length; i++) {
    console.log("Dear " + guestListAgain[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}
console.log(guestListAgain[1] + " can't make it to dinner.");
guestListAgain[1] = 'Rubi';
for (var i = 0; i < guestListAgain.length; i++) {
    console.log("Dear " + guestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}
guestList.unshift('alisha');
guestList.splice(Math.floor(guestList.length / 2), 0, 'komal');
guestList.push('rabbia');
console.log("Great news! We found a bigger dinner table.");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}
// 16 and 17  More Guests/Shrinking Guest List:
var lastGuestList = ['saba', 'alia', 'Rehan'];
for (var i = 0; i < lastGuestList.length; i++) {
    console.log("Dear " + lastGuestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}
console.log(lastGuestList[1] + " cant make it to dinner");
lastGuestList[1] = "rubi";
for (var i = 0; i < lastGuestList.length; i++) {
    console.log("Dear " + lastGuestList[1] + "\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}
lastGuestList.splice(Math.floor(lastGuestList.length / 2), 0, 'Komal');
lastGuestList.push('Sobia');
console.log("Great news! We found a bigger dinner table.");
for (var i = 0; i < lastGuestList.length; i++) {
    console.log("Dear " + lastGuestList + "\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n Rubab");
}
console.log('oops, Unfortunately, we can only invite two people for dinner.');
while (lastGuestList.length > 2) {
    var removedguest = lastGuestList.pop();
    console.log("sorry " + removedguest + ", we can't invite you to dinner this time.");
}
for (var i = 0; i < lastGuestList.length; i++) {
    console.log("Dear " + lastGuestList + "You are still Invited");
}
lastGuestList.pop();
lastGuestList.pop();
console.log("Remaining Guests" + lastGuestList);
// 18 Seeing the World:
var placeToVisit = ['paris', 'France', 'New York', 'Canada'];
console.log("original order: " + placeToVisit);
console.log('alphabetical order: ', __spreadArray([], placeToVisit, true).sort());
console.log("original order (unchanged): " + placeToVisit);
console.log("reverse alphabetical order: ", __spreadArray([], placeToVisit, true).sort().reverse());
console.log("original order (unchanged): " + placeToVisit);
placeToVisit.reverse();
console.log("reversed order " + placeToVisit);
placeToVisit.reverse();
console.log('Original order (reversed again) ' + placeToVisit);
placeToVisit.sort();
console.log("Alphabetical order (sorted): " + placeToVisit);
placeToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse alphabetical order (sorted) " + placeToVisit);
// 19 Dinner guests
var recentGuestList = ['zoya', 'alia', 'Rehan'];
for (var i = 0; i < recentGuestList.length; i++) {
    console.log("Dear " + recentGuestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n[Your Name]");
}
console.log(recentGuestList[1] + " can't make it to dinner.");
recentGuestList[1] = 'Rubi';
for (var i = 0; i < recentGuestList.length; i++) {
    console.log("Dear " + recentGuestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n[Your Name]");
}
recentGuestList.unshift('soha');
recentGuestList.splice(Math.floor(recentGuestList.length / 2), 0, 'komal');
recentGuestList.push('Rabbia');
console.log("Number of people invited to dinner: " + recentGuestList.length);
for (var i = 0; i < recentGuestList.length; i++) {
    console.log("Dear " + recentGuestList[i] + ",\nI would like to invite you to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n[Your Name]");
}
// 20  Array containing programming languages
var programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Swift', 'Go', 'TypeScript', 'Rust', 'PHP'];
console.log("List of programming languages:");
for (var i = 0; i < programmingLanguages.length; i++) {
    console.log(programmingLanguages[i]);
}
// 21  Object containing information about different countries
var countries = [
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
for (var i = 0; i < countries.length; i++) {
    console.log("Country: " + countries[i].name);
    console.log("Capital: " + countries[i].capital);
    console.log("Population: " + countries[i].population);
    console.log("Language: " + countries[i].language);
    console.log("-----------------------------------------");
}
// 22  Object containing information about specific countries
var countriess = [
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
var x = 5;
console.log("Is x == 5? I predict True.");
console.log(x == 5);
// Test 2
var y = 10;
console.log("Is y > 5? I predict True.");
console.log(y > 5);
// Test 3
var z = 'rubab';
console.log("Is z === 'sobia'? I predict True.");
console.log(z === 'sobia');
// Test 4
var a = 20;
console.log("Is a < 10? I predict False.");
console.log(a < 10);
// Test 5
var b = 'banana';
console.log("Is b !== 'apple'? I predict True.");
console.log(b !== 'apple');
// Test 6
var c = 15;
console.log("Is c <= 20? I predict True.");
console.log(c <= 20);
// Test 7
var d = 'orange';
console.log("Is d == 'grape'? I predict False.");
console.log(d == 'grape');
// Test 8
var e = 25;
console.log("Is e >= 30? I predict False.");
console.log(e >= 30);
// Test 9
var f = 'pear';
console.log("Is f === 'banana'? I predict False.");
console.log(f === 'banana');
// Test 10
var g = 12;
console.log("Is g !== 15? I predict True.");
console.log(g !== 15);
// 24 More Conditional Tests:
// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
var color = 'blue';
console.log("Is color != 'red'? I predict True.");
console.log(color != 'red');
// Tests using the lower case function
var userInput = 'HELLO';
console.log("Is userInput.toLowerCase() === 'hello'? I predict True.");
console.log(userInput.toLowerCase() === 'hello');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 < num2? I predict False.");
console.log(num1 < num2);
console.log("Is num1 >= num2? I predict True.");
console.log(num1 >= num2);
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var age = 25;
console.log("Is age > 18 and age < 30? I predict True.");
console.log(age > 18 && age < 30);
var isStudent = true;
console.log("Is age > 18 or isStudent? I predict True.");
console.log(age > 18 || isStudent);
// Test whether an item is in an array
var numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in numbers? I predict True.");
console.log(numbers.includes(3));
// Test whether an item is not in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
// 25 Alien Colors #1
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
// else block
var alien_color_failed = 'red';
if (alien_color_failed === 'green') {
    console.log("The player just earned 5 points.");
}
// 26 Alien Colors #2:
var alien_color2 = 'green';
if (alien_color2 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// else block
var alien_color_block = 'red';
if (alien_color_block === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// 27 Alien Colors #3:
var alien_color_green = 'green';
if (alien_color_green === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color_green === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color_green === 'red') {
    console.log("The player earned 15 points.");
}
var alien_color_yellow = 'yellow';
if (alien_color_yellow === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color_yellow === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color_yellow === 'red') {
    console.log("The player earned 15 points.");
}
var alien_color_red = 'red';
if (alien_color_red === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color_red === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color_red === 'red') {
    console.log("The player earned 15 points.");
}
// 28 Stages of Life:
var p_age = 25;
if (p_age < 2) {
    console.log("The person is a baby.");
}
else if (p_age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (p_age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (p_age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (p_age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// 29 favourite fruit
var favorite_fruits = ['apple', 'banana', 'orange'];
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
var usernames = ['admin', 'rubab', 'sobia', 'irfan', 'raheem'];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again.");
    }
}
// 31 No Users
var admin_user = ['admin', 'rubab', 'sobia', 'irfan', 'raheem'];
if (admin_user.length === 0) {
    console.log("We need to find some users!");
}
else {
    var p_age_1 = 25;
    if (p_age_1 < 2) {
        console.log("The person is a baby.");
    }
    else if (p_age_1 >= 2 && p_age_1 < 4) {
        console.log("The person is a toddler.");
    }
    else if (p_age_1 >= 4 && p_age_1 < 13) {
        console.log("The person is a kid.");
    }
    else if (p_age_1 >= 13 && p_age_1 < 20) {
        console.log("The person is a teenager.");
    }
    else if (p_age_1 >= 20 && p_age_1 < 65) {
        console.log("The person is an adult.");
    }
    else {
        console.log("The person is an elder.");
    }
}
admin_user = [];
if (admin_user.length === 0) {
    console.log("We need to find some users!");
}
// 32 Checking Usernames 
var current_users = ['admin', 'rubab', 'sobia', 'irfan', 'raheem'];
var new_users = ['saba', 'rubab', 'arica', 'sarah', 'irfan'];
var lower_current_users = current_users.map(function (user) { return user.toLowerCase(); });
for (var i = 0; i < new_users.length; i++) {
    var username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (lower_current_users.includes(username)) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
    }
}
// 33 Ordinal Numbers
var o_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < o_numbers.length; i++) {
    var number = o_numbers[i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(number + ordinal);
}
// 34 Pizzas
var pizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like " + pizzas[i] + " pizza.");
}
console.log("Pizza is one of my favorite foods. I really love pizza!");
// 35 Animals
var animals = ['Dog', 'Cat', 'Rabbit'];
for (var i = 0; i < animals.length; i++) {
    console.log("A " + animals[i] + " would make a great pet.");
}
console.log("Any of these animals would make a great pet!");
// 36 T-Shirt
function make_shirt(shirtSize, shirtMessage) {
    console.log("The shirt size is " + shirtSize + " and it will have the message: " + shirtMessage);
}
make_shirt("Medium", "Hello, World!");
// 37 large shirts
function make_shirt_l(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is " + size + " and it will have the message: " + message);
}
make_shirt_l();
make_shirt_l("Medium");
make_shirt_l("Small", "JavaScript is awesome!");
// 38 cities
function describe_city(dcity, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(dcity + " is in " + country + ".");
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
// 39 City Names:
function city_country(city, country) {
    return city + ", " + country;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
function make_album(artist_name, album_title, tracks) {
    var album = { artist: artist_name, title: album_title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2', 12);
var album3 = make_album('Artist3', 'Album3', 8);
console.log(album1);
console.log(album2);
console.log(album3);
// 41
function showMagician(magicians_new) {
    magicians_new.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician names
var magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
showMagician(magicianNames);
// 42
function show_magicians(magic) {
    for (var _i = 0, magic_1 = magic; _i < magic_1.length; _i++) {
        var magician = magic_1[_i];
        console.log(magician);
    }
}
function make_great(magic) {
    var g_meg = [];
    for (var _i = 0, magic_2 = magic; _i < magic_2.length; _i++) {
        var magician = magic_2[_i];
        g_meg.push("".concat(magician, " the Great"));
    }
    return g_meg;
}
var magicians = ['Rubab Akmal', 'Sofia Rajput', 'Rehan Khan', 'Irfan'];
var g_meg = make_great(magicians);
show_magicians(g_meg);
// 43 Unchanged Magicians
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
var originalMagicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
var copiedMagicians = __spreadArray([], originalMagicians, true);
var greatMagicians = makeGreat(__spreadArray([], originalMagicians, true));
console.log("Original Magicians:");
showMagicians(copiedMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
// 44 Sandwiches
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss cheese", "Pickles");
orderSandwich("Tuna", "Mayonnaise");
// 45 Cars
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0], value = option[1];
        car[key] = value;
    }
    return car;
}
var carInfo = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);
console.log(carInfo);

// ### Ternary Operator

// * Rewrite this if using the conditional operator '?':
// ```js
//     let result;
//     let a=3;
//     let b=6;
//     if (a + b < 4) {
//     result = 'Below';
//     } else {
//     result = 'Over';
//     }

//     console.log(result)
// ```
let result;
let a = 3;
let b = 6;
a + b < 4 ? (result = "Below") : (result = "Over");
console.log(result);

// * Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
// ```js
//     let score = 42;
//     let msg = "";

//     if (score > 1337)
//     {
//         msg = "This is a new highscore!";
//     }
//     else
//     {
//         msg = "You need more points to beat the highscore!";
//     }
//     console.log(msg)
// ```
let score = 42;
let msg = "";
(score > 1337) ? msg = "This is a new highscore!" : msg = "You need more points to beat the highscore!";
console.log(msg)

// * Rewrite if..else using multiple ternary operators '?'.

//     For readability, it’s recommended to split the code into multiple lines.
// ```js
//     let message;
//     let login="Employee"
//     if (login == 'Employee') {
//     message = 'Hello';
//     } else if (login == 'Director') {
//     message = 'Greetings';
//     } else if (login == '') {
//     message = 'No login';
//     } else {
//     message = '';
//     }
//     console.log(message)
// ```
let message;
let login="Employee";
(login == 'Employee') ? message = 'Hello': 
(login == 'Director') ? message = 'Greetings': 
(login == '')         ? message = 'No login':message = '';
console.log(message);

'usestrict';
function makePassword(password) {
    return function quess(passwordGuess) {
        return (passwordGuess === password);
    };
}

let tryGuess = makePassword('secret');

console.log('Guessing "nope": ' + tryGuess('nope'));
console.log('Guessing "secret": ' + tryGuess('secret'));

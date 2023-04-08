/*
This application is inspired by the Python "RANDOM" Library.
As this does not exist by default in JAVASCRIPT, this application will
allow you to use all of those functions without having to type "hard to remember"
code which does the exact same thing. Keep it simple, right?
*/

function choice(array) {
    /* 
    Picks a random item from the array.
    */

    if (!Array.isArray(array)) {
        throw new Error(`Choice parameter must be an array, but the given parameter was not. (${array})`);
    };

    if (array.length < 1) {
        throw new Error('Cannot choose from an empty array');
    }

    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function shuffle(array) {
    /*
    Shuffles your array at random, and returns that array
    */

    if (!Array.isArray(array)) {
        throw new Error(`Choice parameter must be an array, but the given parameter was not. (${array})`);
    };

    var al = array.length;

    // While the array is not empty
    while (al) {
        i = Math.floor(Math.random() * al--);
        t = array[al];
        array[al] = array[i];
        array[i] = t;
    }

    return array;
};


function randInt(l, h) {
    /* 
    Javascript random, python style.
    Picks a random number from lowest (l) to highest (h).
    */

    h = Math.floor(h);
    l = Math.floor(l);

    if (isNaN(l) || isNaN(h)) {
        throw new Error(`Received NaN in parameters. (${l}, ${h}, )`);
    };

    const number = Math.floor(Math.random() * (h - l + 1) + l);
    return number;
};

function uniform(l, h) {
    /* 
    Picks a random number with decimals between lowest (l) to highest (h)
    */

    if (isNaN(l) || isNaN(h)) {
        throw new Error(`Received NaN in parameters. (${l}, ${h}, )`);
    };

    const number = Math.random() * (h - l) + l;
    return number;
};

module.exports = { choice, randInt, uniform, shuffle};

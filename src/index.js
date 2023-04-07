function choice(array) {
    /* 
    Allows you to pick something randomly from an array,
    like in python!
    */

    if (!Array.isArray(array)) {
        throw new Error(`Choice parameter must be an array, but the given parameter was not. (${array})`);
    };

    const random = Math.floor(Math.random() * array.length);
    return array[random]
}


function randInt(l, h) {
    /* 
    Javascript random, python style.
    Picks a random number from lowest (l) to highest (h).
    */

    h = Math.floor(h)
    l = Math.floor(l)

    if (isNaN(l) || isNaN(h)) {
        throw new Error(`Received NaN in parameters. (${l}, ${h}, )`);
    };

    const number = Math.floor(Math.random() * (h - l + 1) + l)
    return number
}

function uniform(l, h) {
    /* 
    Picks a random number with decimals between lowest (l) to highest (h)
    */

    if (isNaN(l) || isNaN(h)) {
        throw new Error(`Received NaN in parameters. (${l}, ${h}, )`);
    };

    const number = Math.random() * (h - l) + l
    return number
}

module.exports = { choice, randInt, uniform};

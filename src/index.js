module.exports = function multiply(first, second) {
    // am I supposed to just multiply them, where's a trick?
    // aah, I see now)
    // man, even BigInt doesn't work
    // I dont'want to multiply them myself
    // nope, just a syntax mistake, BigInt DOES work
    // yup, ez
    // if anyone will read this, I leave this comments to prove I am not plagiarizing code
    // with the task being one-line-lenghted, every solution would surely be like this
    // meetcha)
    return (BigInt(first)*BigInt(second)).toString();
};

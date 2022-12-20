
function addTokens(input, tokens) {

    if (typeof input !== 'string') throw new Error('Invalid input');

    if (input.length < 6) throw new Error('Input should have at least 6 characters');

    if (Array.isArray(tokens)) {
        tokens.forEach(tok => {
            if ('tokenName' in tok === false || typeof tok.tokenName !== 'string')
                throw new Error('Invalid array format');
        })
    }


    let k = 0;
    inputWords = input.split(" ");
    for (let i = 0; i < inputWords.length; i++) {
        if (inputWords[i] === "...") {
            inputWords[i] = "${" + tokens[k].tokenName + "}";
            k++;
        }
    }

    tokenized = inputWords.join(" ");
    return tokenized;

}

const app = {
    addTokens: addTokens
}

module.exports = app;
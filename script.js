// script.js
function decryptSubstitutionCipher(ciphertext) {
    const plaintextAlphabet = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
    const ciphertextAlphabet = "EOBNCFVSUPMQIWXHRKDZGTJLA";

    const mapping = {};
    for (let i = 0; i < plaintextAlphabet.length; i++) {
        mapping[ciphertextAlphabet[i]] = plaintextAlphabet[i];
    }

    return ciphertext.split('').map(char => mapping[char] || char).join('');
}

document.getElementById("decryptButton").addEventListener("click", function() {
    const ciphertext = document.getElementById("cipherText").value.toUpperCase();
    const decryptedText = decryptSubstitutionCipher(ciphertext);
    document.getElementById("decryptedText").textContent = decryptedText;
});
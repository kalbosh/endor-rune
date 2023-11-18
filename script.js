// script.js
function decryptSubstitutionCipher(ciphertext, ciphertextAlphabet) {
    const plaintextAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const mapping = {};
    for (let i = 0; i < plaintextAlphabet.length; i++) {
        mapping[ciphertextAlphabet[i]] = plaintextAlphabet[i];
    }

    return ciphertext.split('').map(char => mapping[char] || char).join('');
}

document.getElementById("decryptButton").addEventListener("click", function() {
    const ciphertextAlphabet = document.getElementById("ciphertextAlphabet").value.toUpperCase();
    const ciphertext = document.getElementById("cipherText").value.toUpperCase();
    
    if (ciphertextAlphabet.length !== 26) {
        alert("Please enter a valid ciphertext alphabet with 26 characters.");
        return;
    }

    const decryptedText = decryptSubstitutionCipher(ciphertext, ciphertextAlphabet);
    document.getElementById("decryptedText").textContent = decryptedText;
});

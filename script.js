document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById('type-area__text');
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const copyButton = document.getElementById('copy-button');

    encryptButton.addEventListener("click", () => encryptText(textInput, resultTitle, resultText));
    decryptButton.addEventListener("click", () => decryptText(textInput, resultTitle, resultText));
    copyButton.addEventListener("click", () => copyText(textInput));
});

const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptionMap = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function encryptText(textInput, resultTitle, resultText) {
    const inputText = textInput.value.toLowerCase();
    const encryptedText = inputText.replace(/[eiaou]/g, match => encryptionRules[match]);

    console.log("Texto criptografado:", encryptedText);

    resultTitle.textContent = "Texto Criptografado:";
    resultText.textContent = encryptedText;
}

function decryptText(textInput, resultTitle, resultText) {
    const inputText = textInput.value;
    const decryptedText = inputText.replace(/enter|imes|ai|ober|ufat/g, match => decryptionMap[match]);

    console.log("Texto descriptografado:", decryptedText);

    resultTitle.textContent = "Texto Descriptografado:";
    resultText.textContent = decryptedText;
}

function copyText(textInput){
    console.log("Testando Botão");
}
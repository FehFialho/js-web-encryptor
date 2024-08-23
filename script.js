document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById('type-area__text');
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const copyButton = document.getElementById('copy-button');

    encryptButton.addEventListener("click", () => encryptText(textInput, resultTitle, resultText));
    decryptButton.addEventListener("click", () => decryptText(textInput, resultTitle, resultText));
    copyButton.addEventListener("click", () => copyText(resultText, copyButton));
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

document.getElementById('type-area__text').addEventListener('input', function (event) {
    const textarea = event.target;
    const regex = /[^a-zA-Z0-9\s]/g; 
    textarea.value = textarea.value.replace(regex, '');
});


function encryptText(textInput, resultTitle, resultText, copyButton) {
    if (textInput.value === "") {
        resultTitle.textContent = "Ops!";
        resultText.textContent = "Nenhum texto foi inserido. Digite e tente novamente!";
    } else {
        const inputText = textInput.value.toLowerCase();
        const encryptedText = inputText.replace(/[eiaou]/g, match => encryptionRules[match]);
        resultTitle.textContent = "Texto Criptografado:";
        resultText.textContent = encryptedText;
    }
}

function decryptText(textInput, resultTitle, resultText, copyButton) {
    if (textInput.value === "") {
        resultTitle.textContent = "Ops!";
        resultText.textContent = "Nenhum texto foi inserido. Digite e tente novamente!";
    } else {
        const inputText = textInput.value;
        const decryptedText = inputText.replace(/enter|imes|ai|ober|ufat/g, match => decryptionMap[match]);

        console.log("Texto descriptografado:", decryptedText);

        resultTitle.textContent = "Texto Descriptografado:";
        resultText.textContent = decryptedText;
    }
}

function copyText(resultText, copyButton) {
    const textToCopy = resultText.textContent; 

    navigator.clipboard.writeText(textToCopy).then(() => {
        copyButton.textContent = "Texto Copiado!";
        setTimeout(() => {
            copyButton.textContent = "Copiar"; // Reset button text after a delay
        }, 1200);
    }).catch((err) => {
        console.error("Erro ao Copiar: ", err);
    });
}
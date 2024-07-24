function encrypt() {
    let text = document.getElementById('text-area').value;
    console.log(`Texto inicial: ${text}`);

    document.getElementById('cont-right-child-content-start').style.display = 'none';
    document.getElementById('cont-right-child-content-end').style.display = 'block';

    let encryptedText = text.replace(/a/g, 'ai')
                            .replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

    console.log(`Texto encriptado: ${encryptedText}`);

    document.getElementById('text-area-right').value = encryptedText;
}

function decrypt() {
    let encryptedText = document.getElementById('text-area-right').value;

    console.log(`Texto encriptado: ${encryptedText}`);

    let decryptedText = encryptedText.replace(/ufat/g, 'u')
                            .replace(/ober/g, 'o')
                            .replace(/imes/g, 'i')
                            .replace(/enter/g, 'e')
                            .replace(/ai/g, 'a');

    console.log(`Texto desencriptado: ${decryptedText}`);
    
    document.getElementById('text-area-right').value = decryptedText;
}
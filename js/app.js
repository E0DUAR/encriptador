function encrypt() {
    let text = document.getElementById('text-area').value; 
    console.log(`Texto inicial: ${text}`);
    
    let encryptedText = text.replace(/a/g, 'ai')
                            .replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

    console.log(`Texto encriptado: ${encryptedText}`);
}

function decrypt() {
    let text = document.getElementById('text-area').value;
    console.log(`Texto encriptado: ${text}`);

    let decryptedText = text.replace(/ufat/g, 'u')
                            .replace(/ober/g, 'o')
                            .replace(/imes/g, 'i')
                            .replace(/enter/g, 'e')
                            .replace(/ai/g, 'a');

    console.log(`Texto desencriptado: ${decryptedText}`);
}
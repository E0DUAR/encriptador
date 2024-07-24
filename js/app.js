function encrypt() {
  const textArea = document.getElementById("text-area");
  const rightContentStart = document.getElementById(
    "cont-right-child-content-start"
  );
  const rightContentEnd = document.getElementById(
    "cont-right-child-content-end"
  );
  const textAreaRight = document.getElementById("text-area-right");

  const text = textArea.value;

  const isValid = /^[a-z\s]+$/.test(text);
  if (!isValid) {
    alert(
      "El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales."
    );
    textArea.value = ""; 
    return;
  }

  console.log(`Texto inicial: ${text}`);

  hideDiv(rightContentStart);
  showDiv(rightContentEnd);

  const encryptedText = text
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  console.log(`Texto encriptado: ${encryptedText}`);
  textAreaRight.value = encryptedText;
}



function decrypt() {
  const textArea = document.getElementById("text-area");
  const textAreaRight = document.getElementById("text-area-right"); 
  const encryptedText = textArea.value || textAreaRight.value; // Usar el texto del textarea izquierdo o derecho

  const isValid = /^[a-z\saienterimesoberufat]+$/.test(encryptedText);
  if (!isValid) {
    alert(
      "El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales."
    );
    textAreaRight.value = "";
    return;
  }

  console.log(`Texto encriptado: ${encryptedText}`);

  const decryptedText = encryptedText
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ai/g, "a");

  console.log(`Texto desencriptado: ${decryptedText}`);
  textAreaRight.value = decryptedText;
}



function copyText() {
  const textAreaRight = document.getElementById("text-area-right");
  const rightContentStart = document.getElementById(
    "cont-right-child-content-start"
  );
  const rightContentEnd = document.getElementById(
    "cont-right-child-content-end"
  );

  textAreaRight.disabled = false;
  textAreaRight.select();
  textAreaRight.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Contenido copiado");
  textAreaRight.disabled = true;

  showDiv(rightContentStart);
  hideDiv(rightContentEnd);
}



function hideDiv(element) {
  element.style.display = "none";
}


function showDiv(element) {
  element.style.display = "block";
}

# Proyecto de Encriptación y Desencriptación de Texto

URL: https://e0duar.github.io/encriptador/

Este proyecto permite al usuario encriptar y desencriptar texto utilizando un conjunto de reglas definidas. El texto encriptado puede ser copiado al portapapeles y el texto desencriptado puede ser mostrado en el área de texto correspondiente.

## Funcionalidades

1. **Encriptar Texto**:
   - **Descripción**: Toma el texto del área de texto izquierdo (`text-area`), lo encripta utilizando reglas específicas, y muestra el resultado en el área de texto derecho (`text-area-right`).
   - **Reglas de Encriptación**:
     - La letra "a" se convierte en "ai".
     - La letra "e" se convierte en "enter".
     - La letra "i" se convierte en "imes".
     - La letra "o" se convierte en "ober".
     - La letra "u" se convierte en "ufat".
   - **Visualización**: Oculta el contenedor del área de texto izquierdo y muestra el contenedor del área de texto derecho.

2. **Desencriptar Texto**:
   - **Descripción**: Toma el texto del área de texto izquierdo (`text-area`) o derecho (`text-area-right`) (si el izquierdo está vacío), lo desencripta y muestra el resultado en el área de texto derecho (`text-area-right`).
   - **Reglas de Desencriptación**:
     - La secuencia "ufat" se convierte en "u".
     - La secuencia "ober" se convierte en "o".
     - La secuencia "imes" se convierte en "i".
     - La secuencia "enter" se convierte en "e".
     - La secuencia "ai" se convierte en "a".

3. **Copiar Texto**:
   - **Descripción**: Copia el contenido del área de texto derecho al portapapeles y muestra un mensaje de confirmación.

## Requisitos

- El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.
- El texto encriptado y desencriptado debe cumplir con las reglas establecidas.

## Instrucciones de Uso

1. **Encriptar Texto**:
   - Escribe el texto en el área de texto izquierdo (`text-area`).
   - Haz clic en el botón de encriptar.
   - El texto encriptado aparecerá en el área de texto derecho (`text-area-right`).

2. **Desencriptar Texto**:
   - Escribe o pega el texto encriptado en el área de texto izquierdo (`text-area`).
   - Si hay texto en el área de texto derecho (`text-area-right`), puedes desencriptarlo desde allí.
   - Haz clic en el botón de desencriptar.
   - El texto desencriptado aparecerá en el área de texto derecho (`text-area-right`).

3. **Copiar Texto**:
   - Haz clic en el botón de copiar para copiar el contenido del área de texto derecho al portapapeles.

function criptografar() {
    const texto = document.getElementById('input-text').value;
    const textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('output-text').value = textoCriptografado;
}

function descriptografar() {
    const texto = document.getElementById('input-text').value;
    const textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('output-text').value = textoDescriptografado;
}
function copiarTexto() {
    const textoCopiado = document.getElementById('output-text');
    const texto = textoCopiado.value.trim(); 
    
    if (texto === "") {
        alert("Não há texto para copiar!");
        return; 
    }
    
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
function sanitizeText(text) {
    text = text.toLowerCase();
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return text;
}
document.getElementById('input-text').addEventListener('input', function (event) {
    const currentValue = event.target.value;
    event.target.value = sanitizeText(currentValue);
});

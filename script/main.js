
function limpiar() {
    resulado.textContent = "";
}



document.querySelector("#btnTriangulo").addEventListener("click", () => {
    const b = parseFloat(document.querySelector("#base").value);
    const a = parseFloat(document.querySelector("#altura").value);
    const r = (b*a)/2;
    console.log(r.toFixed(2));

    document.querySelector("#resultTriangulos").innerHTML = r.toFixed(2);
    
})


document.querySelector("#btnCuadrado").addEventListener("click", () => {
    const l = parseFloat(document.querySelector("#lados").value);
    const r = Math.pow(l,2);
    console.log(r.toFixed(2));

    document.querySelector("#resultCuadrados").innerHTML = r.toFixed(2);
})


document.querySelector("#btnCirculo").addEventListener("click", () => {
    const radio = parseFloat(document.querySelector("#radio").value);
    const resultado = Math.PI * Math.pow(radio,2);
    console.log(resultado.toFixed(2));

    document.querySelector("#resultCirculos").innerHTML = resultado.toFixed(2);
})













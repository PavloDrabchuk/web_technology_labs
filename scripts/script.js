function calculateHypotenuse() {
    //console.log("calculate");
    let leg1 = parseFloat(document.getElementById("leg1").value);
    let leg2 = parseFloat(document.getElementById("leg2").value);

    if (leg1 > 0 && leg2 > 0) {
        let hypotenuse = Number(Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2)).toFixed(4));
        //alert(typeof(hypotenuse).toString());
        (isFinite(hypotenuse)) ? document.getElementById("result").innerText = "Гіпотенуза: " + hypotenuse: alert("Ви ввели занадто велике число.");
    } else {
        alert("Ви помилились під час введення значення.\nПеревірте їх та повторіть спробу.");
    }
}
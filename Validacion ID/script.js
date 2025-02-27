function validarCedula() {
    let cedula = document.getElementById("cedula").value.trim();

    // Quitar guiones o espacios
    cedula = cedula.replace(/[-\s]/g, "");

    // Revisar que tenga 11 números
    if (cedula.length !== 11 || isNaN(cedula)) {
        document.getElementById("resultado").innerText = "CÉDULA ES INCORRECTA";
        document.getElementById("resultado").style.color = "red";
        return false;
    }

    let suma = 0;
    let peso = [1, 2]; // Alterna entre 1 y 2

    for (let i = 0; i < 10; i++) {
        let num = parseInt(cedula[i]) * peso[i % 2];
        if (num > 9) {
            num -= 9;
        }
        suma += num;
    }

    // Calcular el dígito verificador correcto
    let digitoVerificador = (10 - (suma % 10)) % 10;

    // Comparar con el último dígito
    if (digitoVerificador === parseInt(cedula[10])) {
        document.getElementById("resultado").innerText = "CÉDULA ES CORRECTA";
        document.getElementById("resultado").style.color = "green";
        return true;
    } else {
        document.getElementById("resultado").innerText = "CÉDULA ES INCORRECTA";
        document.getElementById("resultado").style.color = "red";
        return false;
    }
}
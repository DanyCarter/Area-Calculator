//Primero se debe cargar todo
document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const resultContainer = document.getElementById("result");

    calculateButton.addEventListener("click",  () => {
    //Todo lo que se recoge en un input no deja de ser un String por ello hay que pasarlo a numero mediante el uso de parseFloat

        const length = parseFloat(document.getElementById("length").value);
        
        const width = parseFloat(document.getElementById("width").value);

       /**Is Not a Number
        * falso + falso = verdad
        * verdad + verdad = entra al if
        * si utilizamos || (o) simplemente entraria con que 1 fuera un numero
        * con el $$ (Y) obliga a que los dos sean numerosvalido y el valor del ancho es un número valido
        * Si el valor del largo es un numero 
        */
        if (!isNaN(length) && !isNaN(width)) {
            //Multiplicamos largo por ancho y obtenemos el área.
            const area = length * width;
            //Añadimos el resultado al div que tenemos el template
            //Hay que usar template, se usa asi: `El... ${area}`;
            resultContainer.innerHTML = `El área del rectángulo es: ${area}`;
        } else {
            resultContainer.innerHTML = "Por favor, ingrese valores válidos.";
            
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const preciosUnitarios = document.querySelectorAll(".value__item");
    const cantidades = document.querySelectorAll(".item__cantidad");
    const totalesItems = document.querySelectorAll(".value__total");
    const resumenCantidades = document.querySelectorAll(".resumen_cantidad");
    const resumenSubtotales = document.querySelectorAll(".resumen_subtotal");
    const resumenEnvio = document.querySelector(".resumen_envio");
    const resumenTotal = document.querySelector(".resumen_total");

    const calcularTotal = index => {
        const precioUnitario = parseFloat(preciosUnitarios[index].textContent) || 0;
        const cantidad = parseInt(cantidades[index].value) || 0;
        const total = isNaN(precioUnitario) ? 0 : (precioUnitario * cantidad).toFixed(2);
        totalesItems[index].textContent = total;
        actualizarResumen();
    };

    const actualizarResumen = () => {
        let cantidadTotal = 0;
        let subtotalTotal = 0;

        cantidades.forEach((cantidad, index) => {
            cantidadTotal += parseInt(cantidad.value) || 0;
            subtotalTotal += parseFloat(totalesItems[index].textContent) || 0;
        });

        resumenCantidades.forEach(resumenCantidad => resumenCantidad.textContent = cantidadTotal);
        resumenSubtotales.forEach(resumenSubtotal => resumenSubtotal.textContent = subtotalTotal.toFixed(2));

        const envio = 500;
        const total = (subtotalTotal + envio).toFixed(2);

        resumenEnvio.textContent = envio.toFixed(2);
        resumenTotal.textContent = total;
    };

    const actualizarCantidad = (input, operacion) => {
        input.value = operacion(parseInt(input.value) || 0, 1);
        calcularTotal([...cantidades].indexOf(input));
    };

    const handleInput = function () {
        this.value = this.value.replace(/^0+/, '').replace(/[^0-9]/g, '');
        calcularTotal([...cantidades].indexOf(this));
    };

    const agregarListeners = cantidad => {
        cantidad.addEventListener('input', handleInput);
        const increment_btn = cantidad.parentElement.querySelector(".increment");
        const decrement_btn = cantidad.parentElement.querySelector(".decrement");
        increment_btn.addEventListener('click', () => actualizarCantidad(cantidad, (a, b) => a + b));
        decrement_btn.addEventListener('click', () => actualizarCantidad(cantidad, (a, b) => Math.max(a - b, 0)));
    };

    cantidades.forEach(agregarListeners);
    preciosUnitarios.forEach((_, index) => calcularTotal(index));
});

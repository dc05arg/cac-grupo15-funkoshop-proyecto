document.addEventListener('DOMContentLoaded', function() {
    const cantidades = document.querySelectorAll(".item__cantidad");

    function increment(input) {
    const value = parseInt(input.value);
    if (!isNaN(value) && value >= 0) {
        input.value = value + 1;
    } else {
        input.value = 1;
    }
    }

    function decrement(input) {
    const value = parseInt(input.value);
    if (!isNaN(value) && value > 0) {
        input.value = value - 1;
    } else {
        input.value = 0;
    }
    }

    function handleInput() {
    this.value = this.value.replace(/^0+/, '');
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value === '') {
        this.value = 0;
    }
    }

    cantidades.forEach(function(cantidad) {
    cantidad.addEventListener('input', handleInput);

    const increment_btn = cantidad.parentElement.querySelector(".increment");
    const decrement_btn = cantidad.parentElement.querySelector(".decrement");

    increment_btn.addEventListener('click', function() { increment(cantidad); });
    decrement_btn.addEventListener('click', function() { decrement(cantidad); });
    });
});
const rangeInput = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue');

rangeInput.addEventListener('input', function () {
    rangeValue.textContent = this.value;
});

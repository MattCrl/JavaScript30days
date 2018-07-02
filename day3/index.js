const inputs = document.querySelectorAll('.controls input');
const choose = document.querySelector('.choose input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function blackwhite() {
    console.log(choose.checked);
    choose.checked ? document.documentElement.style.setProperty('filter', 'grayscale(100%)') :
                     document.documentElement.style.setProperty('filter', '');

}

choose.addEventListener('change', blackwhite);

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

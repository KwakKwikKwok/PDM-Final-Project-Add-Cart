function updateButtonText(dropdownId, selectedValue) {
    const dropdownButton = document.getElementById(dropdownId);
    if (dropdownButton) {
        dropdownButton.textContent = selectedValue;
    }
}

function updateButtonClass(buttonId, status) {
    var button = document.getElementById(buttonId);

    button.innerText = status;
    if (status === 'Delivered') {
        button.classList.remove('btn-danger');
        button.classList.add('btn-info');
    } else {
        button.classList.add('btn-danger');
    }
}
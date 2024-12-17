function updateButtonClass(buttonId, status) {
    var button = document.getElementById(buttonId);

    button.innerText = status;
    if (status === 'Delivered') {
        button.classList.remove('btn-danger');
        button.classList.add('btn-info'); // Green for delivered
    } else {
        button.classList.add('btn-danger'); // Red for not delivered
    }
}
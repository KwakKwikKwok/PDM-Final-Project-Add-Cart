const accountElement = document.querySelector('.account.d-flex.align-items-center');
const dropdownMenu = accountElement.querySelector('ul.dropdown-menu.logout');

accountElement.addEventListener('click', () => {
dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
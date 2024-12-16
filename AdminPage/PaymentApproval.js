function verifyPayment(button) {
    let isConfirmed = confirm("Are you sure you want to approve this payment?");
    if (isConfirmed) {
        button.parentElement.innerHTML = "<span class='text-success'>Approved</span>";
    }
}
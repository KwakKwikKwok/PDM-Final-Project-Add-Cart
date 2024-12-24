function filterRows() {
    const monthFilter = document.getElementById("filterMonth").value;
    const yearFilter = document.getElementById("filterYear").value;
    const statusFilter = document.getElementById("filterStatus").value;

    const table = document.querySelector("table tbody");
    const rows = table.querySelectorAll("tr");

    rows.forEach(row => {
        row.style.display = "";
    });

    rows.forEach(row => {
        const dateOrder = row.cells[3].innerText.trim();
        const status = row.cells[6].innerText.trim();

        const [day, month, year] = dateOrder.split("-");

        // Apply filters
        const matchMonth = (monthFilter === "all") || (parseInt(month) === parseInt(monthFilter));
        const matchYear = (yearFilter === "all") || (parseInt(year) === parseInt(yearFilter));
        const matchStatus = (statusFilter === "all") || (status === statusFilter);

        if (!(matchMonth && matchYear && matchStatus)) {
            row.style.display = "none";
        }
    });
}

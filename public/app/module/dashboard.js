// data table
$(document).ready(function () {
    $("#myTable").DataTable({
        searching: false,
        ordering: false,
        lengthChange: false,
    });
});

// Date BTN
$(document).ready(function () {
        $("#dateButton").html(`
        <strong>${moment().format("ddd")}</strong>
        <span class="mx-2">|</span>
        <span>${moment().format("YYYY-DD-MM")}</span>
        <span class="mx-2">|</span>
        <span>${moment().format("h:mm A")}</span>
    `);
});

// Expand collapse
$("#ExpandBtn").click(function () {
    const isExpanding = $(".HideMap").is(":visible");
    $("#ExpandBtn").text;
    $(".HideMap").toggle();
    $(".tableSec").toggleClass("expanded");
    $("#DataTable").toggleClass("expanded");

    $("#ExpandBtn").text(
        $("#DataTable").hasClass("expanded") ? "Collapse" : "Expand",
    );

    let table = $("#salesmanTable").DataTable();
    if (isExpanding) {
        table.page.len(10).draw(false);
    } else {
        table.page.len(5).draw(false);
    }
});

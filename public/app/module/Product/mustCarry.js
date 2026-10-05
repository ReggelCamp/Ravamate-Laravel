import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import Api from "../../helper/Api.js";

const MustCarryColumns = [
    {
        title: "Customer Type",
        data: "customer_type",
    },
    {
        title: "Item Number",
        data: "item_number",
    },
    {
        title: "Description",
        data: "description",
    },
    {
        title: "IsActive",
        data: "is_active",
    },
    {
        title: "Date Created",
        data: "created_at",
        render: function (data) {
            if (!data) return "—";

            return moment(data).format("MMM DD, YYYY");
        },
    },
];

let selectedId = null;
let selectedValue = null;
let selectedOrderType = null;
let SelectedData = [];

function DisplayMustCarryTable() {
    TableLoader.loadTable({
        url: "mustcarry/getMustCarryTable",
        tableId: "#mustCarryTable",
        columns: MustCarryColumns,
        clickable: true,

        onRowClick: (rowData) => {
            DisplayMustCarryInfo(rowData);
        }
    });
}
DisplayMustCarryTable();

$(document).ready(function () {
    DatePicker.init();
});

ComponentHelper.dropdown().loadByApi({
    url:"product/getProductTable",
    dropdownId: "addMustCarry",
    displayField: "description",
    dataField:"id"
});

$(document)
    .off("click.mustCarryTableRow", "#mustCarryTable tbody tr")
    .on("click.mustCarryTableRow", "#mustCarryTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#mustCarryTable")) return;

        const mustCarryTable = $("#mustCarryTable").DataTable();
        const rowData = mustCarryTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        // DisplayMustCarryInfo(rowData);
    });

function DisplayMustCarryInfo(rowData) {
    if (!rowData) return;

    $('#mustCarryModalBody [data-field="customer_type"]').text(
        rowData.customer_type ?? "—",
    );

    $("#DisplayedItem").text(
        rowData.description ?? "—"
    );

    // const itemLabel =
    //     rowData.item_number && rowData.item_description
    //         ? `${rowData.item_number} - ${rowData.item_description}`
    //         : (rowData.must_carry_item ?? "—");

    // $('#mustCarryModalBody [data-field="must_carry_item"]').text(itemLabel);

    $("#MustCarryModal").data("record", rowData);

    document.getElementById("MustCarryModal").showModal();
}

$(document).on("click", "#deleteMustCarryBtn", function (e) {
    e.preventDefault();
    const record = $("#MustCarryModal").data("record");
     console.log("DELETE BUTTON CLICKED");
    if (!record) return;
    if (!confirm(`Delete must carry item for ${record.customer_type}?`)) {
        return;
    }

    Api.delete({
        url: "mustcarry/deleteMustCarry",
        data: {
            id: record.id,
        },

        onSuccess: function (response) {
            console.log("Deleted:", response);

            document.getElementById("MustCarryModal")?.close();

            DisplayMustCarryTable();
        },

        onError: function (error) {
            console.error("Delete error:", error);
        },
    });
});

$(document).on("click", "#addMustCarry .dropdown-item", function (e) {
    e.preventDefault();

    SelectedData = {
        item_number: $(this).data("id"),
        description: $(this).data("value"),
        customer_type: $("#orderType option:selected").text(),
    };

    console.log("fda", SelectedData.customer_type);
    $("#selectedItem").text(SelectedData.description);
});

$(document).on("click", "#addMustCarryBtn", function (e) {
    e.preventDefault();
    document.getElementById("MustCarry")?.close();
    console.log("Selected Data:", SelectedData);
    Swal.fire({
        title: "Creating",
        text: "Creating must carry item, please wait.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });
    Api.post({
        url: "mustcarry/createMustCarry",
        data: SelectedData,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        onSuccess: function (response) {
            Swal.close();
            DisplayMustCarryTable();
        },
        error: function (error) {
            console.error("Error adding must carry item:", error);
        }
    });
});
// import TableLoader from "../../../helper/TableLoader.js";

// const SalesmanMaintenanceTable = [
//     {
//         title: "Md Code",
//         data: "md_code"
//     },
//     {
//         title: "Name",
//         data: "name"
//     },
//     {
//         title: "Salesman Contact No.",
//         data: "salesman_contact_no"
//     },
//     {
//         title: "Cashier Contact No.",
//         data: "cashier_contact_no"
//     },
//     {
//         title: "Supervisor Contact No.",
//         data: "supervisor_contact_no"
//     },
//     {
//         title: "Date Created",
//         data: "date_created"
//     },
//     {
//         title: "Geo Locking",
//         data: "geo_locking"
//     },
//     {
//         title: "Salesman Type",
//         data: "salesman_type"
//     },
//     {
//         title: "Status",
//         data: "status"
//     }
// ];


import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";
const SalesmanMaintenanceTable = [
    {
        title: "Md Code",
        data: "md_code"
    },
    {
        title: "Name",
        data: "name"
    },
    {
        title: "Salesman Contact No.",
        data: "salesman_contact_no"
    },
    {
        title: "Cashier Contact No.",
        data: "cashier_contact_no"
    },
    {
        title: "Supervisor Contact No.",
        data: "supervisor_contact_no"
    },
    {
        title: "Date Created",
        data: "date_created"
    },
    {
        title: "Geo Locking",
        data: "geo_locking"
    },
    {
        title: "Salesman Type",
        data: "salesman_type"
    },
    {
        title: "Status",
        data: "status"
    }
];

const sampleData = [
    {
        md_code: "MD-1001",
        name: "Juan Dela Cruz",
        salesman_contact_no: "09171234567",
        cashier_contact_no: "09181234567",
        supervisor_contact_no: "09191234567",
        date_created: "2026-08-07",
        geo_locking: '50',
        salesman_type: "Booking",
        status: '<span class="text-green-600 font-bold">Active</span>'
    },
    {
        md_code: "MD-1002",
        name: "Maria Santos",
        salesman_contact_no: "09221234567",
        cashier_contact_no: "09231234567",
        supervisor_contact_no: "09241234567",
        date_created: "2026-08-06",
        geo_locking: '50',
        salesman_type: "Van Sales",
        status: '<span class="text-green-600 font-bold">Active</span>'
    },
    {
        md_code: "MD-1003",
        name: "Pedro Reyes",
        salesman_contact_no: "09351234567",
        cashier_contact_no: "09361234567",
        supervisor_contact_no: "09371234567",
        date_created: "2026-08-05",
        geo_locking: '50',
        salesman_type: "Booking",
        status: '<span class="text-green-600 font-bold">Active</span>'
    },
    {
        md_code: "MD-1004",
        name: "Ana Lopez",
        salesman_contact_no: "09451234567",
        cashier_contact_no: "09461234567",
        supervisor_contact_no: "09471234567",
        date_created: "2026-08-04",
        geo_locking: '50',
        salesman_type: "Van Sales",
        status: '<span class="text-green-600 font-bold">Active</span>'
    },
    {
        md_code: "MD-1005",
        name: "Mark Villanueva",
        salesman_contact_no: "09551234567",
        cashier_contact_no: "09561234567",
        supervisor_contact_no: "09571234567",
        date_created: "2026-08-03",
        geo_locking: '50',
        salesman_type: "Booking",
        status: '<span class="text-red-500 font-bold">Suspended</span>'
    }
];

TableLoader.tableData(
    "#salesmanMaintenanceTable", // Replace with your actual table ID
    sampleData,
    SalesmanMaintenanceTable,
    {
        scrollY: "50vh",
        pageLength:25
    }
);
$(document).ready(function () {
    DatePicker.init();
});

$(document)
    .off("click.salesmanMaintenanceTableRow", "#salesmanMaintenanceTable tbody tr")
    .on("click.salesmanMaintenanceTableRow", "#salesmanMaintenanceTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#salesmanMaintenanceTable")) return;

        const salesmanMaintenanceTable = $("#salesmanMaintenanceTable").DataTable();
        const rowData = salesmanMaintenanceTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplaySalesmanInfo(rowData);
    });

function DisplaySalesmanInfo(rowData) {
    // --- ID card fields ---
    $("#salesmanInfo_Name").text(rowData.name ?? "");
    $("#salesmanInfo_MdCode").text(rowData.md_code ?? "");
    $("#salesmanInfo_ContactNo").val(rowData.salesman_contact_no ?? "");
    $("#salesmanInfo_CashierNo").val(rowData.cashier_contact_no ?? "");
    $("#salesmanInfo_SupervisorNo").val(rowData.supervisor_contact_no ?? "");
    $("#salesmanInfo_Geolocking").val(rowData.geo_locking ?? "");

    // Not in sampleData yet — falls back until backend/sample data includes them
    $("#salesmanInfo_CallTime").val(rowData.call_time ?? "07:00:00");
    $("#salesmanInfo_SupervisorName").val(rowData.supervisor_name ?? "");
    $("#salesmanInfo_MdPassword").val(rowData.md_password ?? "");

    // reset password field back to masked every time the modal opens
    const $pwd = $("#salesmanInfo_MdPassword");
    const $pwdIcon = $pwd.closest(".join").find("i");
    $pwd.attr("type", "password");
    $pwdIcon.removeClass("fa-eye").addClass("fa-eye-slash");

    // --- Middle panel selects ---
    // salesman_type in sampleData is "Booking" / "Van Sales" — map to the select's option text
    const ordTypeMap = {
        "Booking": "BOOKING",
        "Van Sales": "VAN SELLING"
    };
    $("#salesmanInfo_DefaultOrdType").val(ordTypeMap[rowData.salesman_type] ?? "BOOKING");

    $("#salesmanInfo_WarehouseCode").val(rowData.warehouse_code ?? "");
    $("#salesmanInfo_BadOrderWarehouse").val(rowData.bad_order_warehouse ?? "BO");
    $("#salesmanInfo_GoodStockReturnWarehouse").val(rowData.good_stock_return_warehouse ?? "HO");

    // --- Toggles (not in sampleData yet — defaults to OFF until backend sends these) ---
    setSalesmanToggle("salesmanInfo_OsaChecking", rowData.osa_checking);
    setSalesmanToggle("salesmanInfo_Eod", rowData.eod);
    setSalesmanToggle("salesmanInfo_IsHybrid", rowData.is_hybrid);
    setSalesmanToggle("salesmanInfo_RestrictNewCustomer", rowData.restrict_new_customer);
    setSalesmanToggle("salesmanInfo_DisableOtp", rowData.disable_otp);

    // --- Color swatch ---
    const color = rowData.color ?? "#ff0000";
    $("#salesmanInfo_Swatch").css("background", color);
    $("#salesmanInfo_ColorPicker").val(color);

    // keep the current row's md_code around for the Save Changes handler
    $("#SalesmanInfo_Modal").data("mdCode", rowData.md_code);

    $("#SalesmanInfo_Modal")[0].showModal();
}

function setSalesmanToggle(id, isOn) {
    const $toggle = $(`#${id}`);
    const $state = $(`#${id}_state`);
    const offText = $toggle.data("off-text");
    const onText = $toggle.data("on-text");

    const checked = !!isOn;
    $toggle.prop("checked", checked);
    $state.text(checked ? onText : offText);
    $state.toggleClass("text-[#e6231e]", !checked);
    $state.toggleClass("text-green-600", checked);
}

// Fire once here too, since toggles inside a <dialog> may not exist yet at initial page load
// depending on when the modal partial is injected — safe to leave alongside the earlier binding.
$(document).on("change", ".salesman-toggle", function () {
    const stateEl = document.getElementById(`${this.id}_state`);
    const offText = this.dataset.offText;
    const onText = this.dataset.onText;
    stateEl.textContent = this.checked ? onText : offText;
    stateEl.classList.toggle("text-[#e6231e]", !this.checked);
    stateEl.classList.toggle("text-green-600", this.checked);
});

function toggleSalesmanPassword(btn) {
    const input = document.getElementById("salesmanInfo_MdPassword");
    const icon = btn.querySelector("i");
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
}
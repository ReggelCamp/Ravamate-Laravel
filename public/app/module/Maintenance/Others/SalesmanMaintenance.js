import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";
import Api from "../../../helper/Api.js";

const SalesmanMaintenanceTable = [
    {
        title: "Md Code",
        data: "md_code"
    },
    {
        title: "Name",
        data: "salesman_name"
    },
    {
        title: "Salesman Contact No.",
        data: "contact_no"
    },
    {
        title: "Cashier Contact No.",
        data: "cashier_no"
    },
    {
        title: "Supervisor Contact No.",
        data: "supervisor_no"
    },
    {
        title: "Date Created",
        data: null,
        render: function(row){
            const date = moment(row.created_at).format("MMM DD, YYYY h:mm A");
            return date;
        }
    },
    {
        title: "Geo Locking",
        data: "geo_locking"
    },
    {
        title: "Salesman Type",
        data: "default_ord_type"
    },
    {
        title: "Status",
        data: "status"
    }
];

function DisplaySalesman() {
    TableLoader.loadTable({
        url: "salesman/getSalesman", 
        tableId:"#salesmanMaintenanceTable",
        columns: SalesmanMaintenanceTable,
        scrollX: false,
    });
}

$(document).ready(function () {
    DatePicker.init();
    DisplaySalesman();
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
    console.log("hhh",rowData);
    // --- ID card fields ---
    $("#salesmanName").text(rowData.salesman_name ?? "");
    $("#mdCode").text(rowData.md_code ?? "");
    $("#salesmanInfo_MdCode").text(rowData.md_code ?? "");
    $("#salesmanInfo_ContactNo").val(rowData.contact_no ?? "N/A");
    $("#salesmanInfo_CashierNo").val(rowData.cashier_no ?? "N/A");
    $("#salesmanInfo_SupervisorNo").val(rowData.supervisor_no ?? "N/A");
    $("#salesmanInfo_Geolocking").val(rowData.geo_locking ?? "N/A");

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
    // $("#SalesmanInfo_Modal").data("mdCode", rowData.md_code);
    $("#SalesmanInfo_Modal").data("id", rowData.id);
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

    this.classList.toggle("toggle-error", !this.checked);
    this.classList.toggle("toggle-success", this.checked);
});

function toggleSalesmanPassword(btn) {
    const input = document.getElementById("salesmanInfo_MdPassword");
    const icon = btn.querySelector("i");
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
}

$("#AddSalesmanForm").on("submit", function (e) {
    
    e.preventDefault();
    document.getElementById('AddSalesman')?.close();
    Swal.fire({
        title: 'Creating',
        text: 'Creating salesman, please wait.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });
    
    Api.post({
        url: "/salesman/createSalesman",
        data: $(this).serialize(),
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",

        onSuccess: (data) => {
            Swal.close();
            this.reset();
            AddSalesman.close();
            alert(data.message);
            DisplaySalesman();
        },
        on422: (xhr) => {
            const errors = Object.values(xhr.responseJSON.errors ?? {}).flat().join("\n");
            alert(errors || "Please check the salesman details.");
        },
        onError: () => alert("Unable to create the salesman. Please try again.")
    });
});

$(document).on("click", "#salesmanInfo_SaveChanges", function () {

    const id = $("#SalesmanInfo_Modal").data("id");
    console.log("ID being updated:", id);

    document.getElementById('SalesmanInfo_Modal')?.close();
    
    Swal.fire({
        title: 'Updating',
        text: 'Updating salesman, please wait.',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    Api.post({
        url: "salesman/updateSalesman",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: {
            id: id,
            salesman_name: $("#salesmanName").text(),
            call_time: $("#salesmanInfo_CallTime").val(),
            default_ord_type: $("#salesmanInfo_DefaultOrdType").val(),
            loading_capacity: $("#salesmanInfo_LoadingCapacity").val() || null,
            color: $("#salesmanInfo_ColorPicker").val() || null,
            contact_no: $("#salesmanInfo_ContactNo").val() || null,
            cashier_no: $("#salesmanInfo_CashierNo").val() || null,
            supervisor_name: $("#salesmanInfo_SupervisorName").val() || null,
            supervisor_no: $("#salesmanInfo_SupervisorNo").val() || null,
            geolocking: $("#salesmanInfo_Geolocking").val() || null,
            price_code: $("#salesmanInfo_PriceCode").val() || null,
            bo_warehouse: $("#salesmanInfo_BadOrderWarehouse").val() || null,
            gs_warehouse: $("#salesmanInfo_GoodStockReturnWarehouse").val() || null,

            osa_checking: $("#salesmanInfo_OsaChecking").is(":checked") ? 1 : 0,
            eod: $("#salesmanInfo_Eod").is(":checked") ? 1 : 0,
            is_hybrid: $("#salesmanInfo_IsHybrid").is(":checked") ? 1 : 0,
            restrict_customer: $("#salesmanInfo_RestrictNewCustomer").is(":checked") ? 1 : 0,
            disable_otp: $("#salesmanInfo_DisableOtp").is(":checked") ? 1 : 0,
        },
        onSuccess: function (response) {
            Swal.close();

            Swal.fire({
                title: "Saved",
                text: response.message ?? "Salesman saved successfully.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });

            DisplaySalesman();
        },

        onError: function (error) {
            console.error("Update error:", error);

            Swal.fire({
                title: "Error",
                text: error?.message ?? "Failed to save salesman.",
                icon: "error",
            });
        }
    });
});

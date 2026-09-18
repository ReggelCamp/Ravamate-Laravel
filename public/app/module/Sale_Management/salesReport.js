import ComponentHelper from "../../helper/ComponentHelper.js";
import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const StockRequestColumns = [
    {
        title: "Status",
        data: "status"
    },
    {
        title: "Salesman",
        data: null,
        render: function(row) {
            return row.transaction_salesman.salesman_name;
        }
    },
    {
        title: "Date",
        data: null,
        render: function (row) {
            return row.transaction_date
                ? moment(row.transaction_date).format("MMM DD, YYYY h:mm A")
                : "N/A";
        }
    },
    {
        title: "Custcode",
        data: "customercode"
    },
    {
        title: "Customer",
        data: null,
        render: function(row){
            return row.transaction_store.store_name;
        }
    },
    {
        title: "Document No.",
        data: "document_no"
    },
    {
        title: "Range",
        data: "range"
    },
    {
        title: "Time Travel (Min.)",
        data: "time_travel"
    },
    {
        title: "Time Spent (Min.)",
        data: "time_spent"
    },
    {
        title: "Geo Difference",
        data: "geo_difference"
    },
    {
        title: "Longitude",
        data: "longitude"
    },
    {
        title: "Latitude",
        data: "latitude"
    },
    {
        title: "Remarks",
        data: "remarks"
    },
    {
        title: "Payment Type",
        data: "payment_type"
    },
    {
        title: "Sales",
        data: null,
        render: function (row) {
            const transactionSale = (row.transaction_details ?? [])
                .reduce((total, detail) => {
                    return total +
                        (Number(detail.quantity ?? 0) *
                        Number(detail.current_price ?? 0));
                }, 0);

            return transactionSale.toFixed(2);
        }
    }
];

const salesReportsItems = [
    {
        title: "Sales Summary",
        data: "sales_summary",
        modal: "#sales_summary",
    },
    {
        title: "Range Summary",
        data: "range_summary",
        url: "/rangesum"
    },
    {
        title: "Range Monitoring",
        data: "range_monitoring",
        url: "/rangemon"
    },
    {
        title: "Geocall Rate",
        data: "geocall_rate",
        url: "/geocallrate"
    },
    {
        title: "Strike Rate",
        data: "strike_rate",
        url: "/strikerate"
    },
    {
        title: "Salesrep SKU Details",
        data: "salesrep_sku_details",
        url: "/skureport"
    },
    {
        title: "Unproductive",
        data: "unproductive",
        url: "/unproductivereport"
    },
    {
        title: "Sosyo Transaction",
        data: "sosyo_transaction",
        url: "/sosyotransaction"
    },
    {
        title: "Voucher History",
        data: "voucher_history",
        url: "/voucherhistory"
    },
];

const SalesReqColumns = [
    {
        title: "STOCKCODE",
        data: null,
        render: function(row) {
            console.log(row.product_details.StockCode);
            return row.product_details.StockCode;
        }
    },
    {
        title: "DESCRIPTION",
         data: null,
        render: function(row) {
            console.log(row.product_details.description);
            return row.product_details.description;
        }
    },
    {
        title: "QUANTITY",
        data: "quantity",
        className: "text-right"
    },
    {
        title: "AMOUNT",
         data: null,
        render: function(row) {
           const totalAmt = row.current_price * row.quantity;
            return totalAmt;
        }
    }
];

function LoadTable() {
    TableLoader.loadTable({
        url: "transaction/getSalesmanTransaction",
        tableId: "#salesReportTable",
        columns: StockRequestColumns,
        // flattenDetails: true,
    });
}

LoadTable();

$(document).ready(function () {
    DatePicker.init();
});

ComponentHelper.dropdown().LoadDropdownItems({
    id: "#salesReports",
    items: salesReportsItems
});

// Handle clicks on dropdown items that have a data-modal attribute
$(document).on("click", "#salesReports li a[data-modal]", function (e) {
    e.preventDefault();
    const modalSelector = $(this).data("modal");
    if (modalSelector) {
        $(modalSelector)[0].showModal();
    }
});

$(document)
    .off("click.SalesReportRow", "#salesReportTable tbody tr")
    .on("click.SalesReportRow", "#salesReportTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#salesReportTable")) return;

        const SalesReportTable = $("#salesReportTable").DataTable();
        const rowData = SalesReportTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayReport(rowData);
    });

function DisplayReport(rowData) {
    console.log("report row:", rowData);

    // --- Sales Report card ---
    $("#salesman_name").text(rowData.transaction_salesman.salesman_name ?? "");
    $("#status").html(
        (rowData.api_status ?? "VALID") +
        ' <i class="fa-solid fa-circle-check text-green-500 text-xs"></i>'
    );
    $("#documentNum").text(rowData.document_no ?? "");
    $("#timeTravel").text(rowData.time_travel ?? "N/A");
    $("#geoDiff").text(rowData.geo_difference ?? "N/A");
    $("#Long").text(rowData.longitude ?? "—");
    $("#Lat").text(rowData.latitude ?? "—");
    $("#Source").text(rowData.source ?? "—");

    // --- Sales Details card ---
    $("#StoreName").text(rowData.transaction_store.store_name ?? "");
    $("#custCode").text(rowData.customercode ?? "");
    $("#RefNum").text(rowData.transaction_id ?? "");
    $("#address").text(rowData.address ?? ", ,");

    if (rowData.transaction_date) {
        $("#DeliveryDate").text(moment(rowData.transaction_date).format("MM/DD/YYYY"));
        $("#DeliveryTime").text(moment(rowData.transaction_date).format("HH:mm:ss.SSS"));
    } else {
        $("#DeliveryDate").text("N/A");
        $("#DeliveryTime").text("N/A");
    }

    $("#Sales").text(rowData.sales ?? "0.00");

    // --- Item Code table ---
    const details = rowData.transaction_details ?? [];

    const itemRows = details.map(detail => {
        const price = detail.product_details?.price ?? 0;
        const qty = detail.quantity ?? 0;

        return {
            stockcode: detail.product_details?.StockCode ?? "",
            description: detail.product_details?.description ?? "",
            quantity: qty,
            amount: "₱" + (price * qty).toFixed(2),
        };
    });

    $(document).ready(function(){
        TableLoader.loadTable({
            url: "transaction/DisplayTransactionDetailsById",
            tableId: "#StockReqModalTable",
            columns: SalesReqColumns,
            filters: { transaction_id: rowData.transaction_id },
        });
    });

    $("#reportModal")[0].showModal();
}
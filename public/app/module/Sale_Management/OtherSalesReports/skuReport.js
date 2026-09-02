import TableLoader from "../../../helper/TableLoader.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const StockRequestColumns = [
    {
        title: "transaction ID",
        data: "transaction_id"
    },
    {
        title: "Delivery Date",
        data: "delivery_date"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "CustCode",
        data: "custcode"
    },
    {
        title: "StockCode",
        data: "stockcode"
    },
    {
        title: "Description",
        data: "description"
    },
    {
        title: "Ordered QTY",
        data: "ordered_qty",
        className: "dt-body-center"
    },
    {
        title: "Total Order Amount",
        data: "total_order_amount",
        className: "dt-body-right"
    },
    {
        title: "Remarks",
        data: "remarks"
    }
];

const StockRequestSampleData = [
    {
        transaction_id: "TRN-2026-0001",
        delivery_date: "2026-08-24",
        salesman: "Juan Dela Cruz",
        custcode: "CUS001",
        stockcode: "STK001",
        description: "Premium Coffee 500g",
        ordered_qty: 10,
        total_order_amount: "₱5,500.00",
        remarks: "For delivery"
    },
    {
        transaction_id: "TRN-2026-0002",
        delivery_date: "2026-08-24",
        salesman: "Pedro Santos",
        custcode: "CUS002",
        stockcode: "STK002",
        description: "Instant Coffee 100g",
        ordered_qty: 25,
        total_order_amount: "₱3,750.00",
        remarks: "Confirmed"
    },
    {
        transaction_id: "TRN-2026-0003",
        delivery_date: "2026-08-25",
        salesman: "Maria Garcia",
        custcode: "CUS003",
        stockcode: "STK003",
        description: "Chocolate Drink 1kg",
        ordered_qty: 15,
        total_order_amount: "₱6,750.00",
        remarks: "Pending"
    },
    {
        transaction_id: "TRN-2026-0004",
        delivery_date: "2026-08-25",
        salesman: "Jose Reyes",
        custcode: "CUS004",
        stockcode: "STK004",
        description: "Milk Powder 500g",
        ordered_qty: 20,
        total_order_amount: "₱8,000.00",
        remarks: "For delivery"
    },
    {
        transaction_id: "TRN-2026-0005",
        delivery_date: "2026-08-26",
        salesman: "Ana Mendoza",
        custcode: "CUS005",
        stockcode: "STK005",
        description: "Biscuit Assorted Pack",
        ordered_qty: 30,
        total_order_amount: "₱4,500.00",
        remarks: "Confirmed"
    }
];

TableLoader.tableData(
    "#skuReportTable",
    StockRequestSampleData,
    StockRequestColumns,
    {
        scrollY: "50vh",
        pageLength: 25
    }
);

ComponentHelper.select().loadByApi({
    url: "/salesmen",
    selectID: "select_items",
    noDataText: "No salesman Found"
});

$(document).ready(function () {
    DatePicker.init();
});
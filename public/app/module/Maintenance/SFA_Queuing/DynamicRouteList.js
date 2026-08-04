import TableLoader from "../../../helper/TableLoader.js";

const DynamicTransactionColumns = [
    {
        title: "Booking Date",
        data: "booking_date",
    },
    {
        title: "Municipality",
        data: "municipality",
    },
    {
        title: "Barangay",
        data: "barangay",
    },
    {
        title: "Salesman",
        data: "salesman",
    },
    {
        title: "Day Lapse",
        data: "day_lapse",
    },
    {
        title: "Reference",
        data: "customer",
    },
    {
        title: "Amount",
        data: "amount",
    },
];

const DynamicRouteColumns = [
    {
        title: "Transaction ID",
        data: "transaction_ID",
    },
    {
        title: "Plate No.",
        data: "plate_no",
    },
    {
        title: "Total Drops",
        data: "total_drops",
    },
    {
        title: "Loading Capacity",
        data: "loading_capacity",
    },
    {
        title: "Balance",
        data: "balance",
    },
    {
        title: "Total Amount",
        data: "total_amount",
    },
    {
        title: "Unloading Date",
        data: "unloading_date",
    },
]


TableLoader.tableData(
    "#DynamicRouteList_Table",
    [],
    DynamicTransactionColumns,
);

TableLoader.tableData(
    "#DynamicTransactionList_Table",
    [],
    DynamicRouteColumns,
);

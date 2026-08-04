import TableLoader  from "../../helper/TableLoader.js";

const SoColumns = [
    {
        title: "Trans Type",
        data: "trans_type"
    },
    {
        title: "Trans Date",
        data: "trans_date"
    },
    {
        title: "MdCode",
        data: "md_code"
    },
    {
        title: "No. of SKU",
        data: "no_sku"
    },
    {
        title: "Volume Qty.",
        data: "volume_qty"
    },
    {
        title: "Amount",
        data: "amount"
    },
    {
        title: "Status",
        data: "status"
    },
    {
        title: "Remarks",
        data: "remarks"
    },
    {
        title: "Last Updated",
        data: "last_updated"
    },
];

TableLoader.tableData(
    "#PendingRequestTable",
    [],
    SoColumns
);
import TableLoader from "../../../helper/TableLoader.js";

const BankColumns = [
    {
        title: "Bank Code",
        data: "bank_code",
    },
    {
        title: "Bank Name",
        data: "bank_name",
    },
    {
        title: "Last Updated",
        data: "updated_at",
    }
];

TableLoader.tableData(
    "#BankDataTable",
    [],
    BankColumns,
);
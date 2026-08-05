// import TableLoader from "../../../helper/TableLoader.js";

// const BankColumns = [
//     {
//         title: "Bank Code",
//         data: "bank_code",
//     },
//     {
//         title: "Bank Name",
//         data: "bank_name",
//     },
//     {
//         title: "Last Updated",
//         data: "updated_at",
//     }
// ];

// TableLoader.tableData(
//     "#BankDataTable",
//     [],
//     BankColumns,
// );

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

const sampleData = [
    {
        bank_code: "BDO",
        bank_name: "Banco de Oro Unibank",
        updated_at: "2026-08-05 09:15 AM"
    },
    {
        bank_code: "BPI",
        bank_name: "Bank of the Philippine Islands",
        updated_at: "2026-08-04 03:20 PM"
    },
    {
        bank_code: "MBTC",
        bank_name: "Metropolitan Bank & Trust Company",
        updated_at: "2026-08-03 01:45 PM"
    },
    {
        bank_code: "LBP",
        bank_name: "Land Bank of the Philippines",
        updated_at: "2026-08-02 10:30 AM"
    },
    {
        bank_code: "PNB",
        bank_name: "Philippine National Bank",
        updated_at: "2026-08-01 04:10 PM"
    }
];

TableLoader.tableData(
    "#BankDataTable",
    sampleData,
    BankColumns
);
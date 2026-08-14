// import TableLoader from "../../helper/TableLoader.js";

// const syncReportcolumns = [
//     {
//         title: "Mdcode",
//         data: "mdcode"
//     },
//     {
//         title: "Salesperson",
//         data: "salesperson"
//     },
//     {
//         title: "Data Sync",
//         data: "data_sync"
//     },
// ];

// TableLoader.tableData(
//     "#syncReportTable",
//     [],
//     syncReportcolumns
// );

import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const syncReportcolumns = [
    {
        title: "Mdcode",
        data: "mdcode"
    },
    {
        title: "Salesperson",
        data: "salesperson"
    },
    {
        title: "Data Sync",
        data: "data_sync"
    },
];

const sampleData = [
    {
        mdcode: "MD001",
        salesperson: "Juan Dela Cruz",
        data_sync: "2026-08-05 09:15 AM"
    },
    {
        mdcode: "MD002",
        salesperson: "Maria Santos",
        data_sync: "2026-08-05 10:30 AM"
    },
    {
        mdcode: "MD003",
        salesperson: "Pedro Reyes",
        data_sync: "2026-08-04 04:45 PM"
    },
    {
        mdcode: "MD004",
        salesperson: "Ana Garcia",
        data_sync: "2026-08-03 01:20 PM"
    },
    {
        mdcode: "MD005",
        salesperson: "Jose Lim",
        data_sync: "2026-08-02 11:10 AM"
    },
    {
        mdcode: "MD001",
        salesperson: "Juan Dela Cruz",
        data_sync: "2026-08-05 09:15 AM"
    },
    {
        mdcode: "MD002",
        salesperson: "Maria Santos",
        data_sync: "2026-08-05 10:30 AM"
    },
    {
        mdcode: "MD003",
        salesperson: "Pedro Reyes",
        data_sync: "2026-08-04 04:45 PM"
    },
    {
        mdcode: "MD004",
        salesperson: "Ana Garcia",
        data_sync: "2026-08-03 01:20 PM"
    },
    {
        mdcode: "MD005",
        salesperson: "Jose Lim",
        data_sync: "2026-08-02 11:10 AM"
    },
    {
        mdcode: "MD001",
        salesperson: "Juan Dela Cruz",
        data_sync: "2026-08-05 09:15 AM"
    },
    {
        mdcode: "MD002",
        salesperson: "Maria Santos",
        data_sync: "2026-08-05 10:30 AM"
    },
    {
        mdcode: "MD003",
        salesperson: "Pedro Reyes",
        data_sync: "2026-08-04 04:45 PM"
    },
    {
        mdcode: "MD004",
        salesperson: "Ana Garcia",
        data_sync: "2026-08-03 01:20 PM"
    },
    {
        mdcode: "MD005",
        salesperson: "Jose Lim",
        data_sync: "2026-08-02 11:10 AM"
    },
    {
        mdcode: "MD001",
        salesperson: "Juan Dela Cruz",
        data_sync: "2026-08-05 09:15 AM"
    },
    {
        mdcode: "MD002",
        salesperson: "Maria Santos",
        data_sync: "2026-08-05 10:30 AM"
    },
    {
        mdcode: "MD003",
        salesperson: "Pedro Reyes",
        data_sync: "2026-08-04 04:45 PM"
    },
    {
        mdcode: "MD004",
        salesperson: "Ana Garcia",
        data_sync: "2026-08-03 01:20 PM"
    },
    {
        mdcode: "MD005",
        salesperson: "Jose Lim",
        data_sync: "2026-08-02 11:10 AM"
    },
    {
        mdcode: "MD001",
        salesperson: "Juan Dela Cruz",
        data_sync: "2026-08-05 09:15 AM"
    },
    {
        mdcode: "MD002",
        salesperson: "Maria Santos",
        data_sync: "2026-08-05 10:30 AM"
    },
    {
        mdcode: "MD003",
        salesperson: "Pedro Reyes",
        data_sync: "2026-08-04 04:45 PM"
    },
    {
        mdcode: "MD004",
        salesperson: "Ana Garcia",
        data_sync: "2026-08-03 01:20 PM"
    },
    {
        mdcode: "MD005",
        salesperson: "Jose Lim",
        data_sync: "2026-08-02 11:10 AM"
    },
];

TableLoader.tableData(
    "#syncReportTable",
    sampleData,
    syncReportcolumns,
    {
        scrollY: "500px"
    }
);

$(document).ready(function () {
    DatePicker.init();
});
// import TableLoader from "../../../helper/TableLoader.js";

// const SalesTargetColumns = [
//     {
//         title: "Md Code",
//         data: "md_code",
//     },
//     {
//         title: "Salesman",
//         data: "salesman",
//     },
//     {
//         title: "Year",
//         data: "year",
//     },
//     {
//         title: "Month",
//         data: "month",
//     },
//     {
//         title: "sales Target",
//         data: "sales_target",
//     },
//     {
//         title: "Markup %",
//         data: "markup_percentage",
//     },
//     {
//         title: "Last Updated",
//         data: "last_updated",
//     },
// ]

// TableLoader.tableData(
//     "#SalesTargetDataTable",
//     [],
//     SalesTargetColumns,
// );

import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const SalesTargetColumns = [
    {
        title: "Md Code",
        data: "md_code",
    },
    {
        title: "Salesman",
        data: "salesman",
    },
    {
        title: "Year",
        data: "year",
    },
    {
        title: "Month",
        data: "month",
    },
    {
        title: "Sales Target",
        data: "sales_target",
    },
    {
        title: "Markup %",
        data: "markup_percentage",
    },
    {
        title: "Last Updated",
        data: "last_updated",
    },
];

const sampleData = [
    {
        md_code: "MD001",
        salesman: "Juan Dela Cruz",
        year: 2026,
        month: "January",
        sales_target: "₱500,000.00",
        markup_percentage: "12%",
        last_updated: "2026-08-05 09:15 AM"
    },
    {
        md_code: "MD002",
        salesman: "Maria Santos",
        year: 2026,
        month: "February",
        sales_target: "₱650,000.00",
        markup_percentage: "15%",
        last_updated: "2026-08-04 02:30 PM"
    },
    {
        md_code: "MD003",
        salesman: "Pedro Reyes",
        year: 2026,
        month: "March",
        sales_target: "₱720,000.00",
        markup_percentage: "10%",
        last_updated: "2026-08-03 11:45 AM"
    },
    {
        md_code: "MD004",
        salesman: "Ana Garcia",
        year: 2026,
        month: "April",
        sales_target: "₱580,000.00",
        markup_percentage: "13%",
        last_updated: "2026-08-02 03:10 PM"
    },
    {
        md_code: "MD005",
        salesman: "Jose Lim",
        year: 2026,
        month: "May",
        sales_target: "₱810,000.00",
        markup_percentage: "18%",
        last_updated: "2026-08-01 10:20 AM"
    }
];

TableLoader.tableData(
    "#SalesTargetDataTable",
    sampleData,
    SalesTargetColumns,
    {
        scrollY: "300px"
    }
);

$(document).ready(function () {
    DatePicker.init();
});
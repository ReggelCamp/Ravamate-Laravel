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
        scrollY: "300"
    }
);
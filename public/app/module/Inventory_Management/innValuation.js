// import TableLoader from "../../helper/TableLoader.js";
// import ComponentHelper from "../../helper/ComponentHelper.js";

// const InnValuationColumns = [
//     {
//         title: "mdCode",
//         data: "mdcode"
//     },
//     {
//         title: "Salesman Code",
//         data: "salesman_code"
//     },
//     {
//         title: "Salesman",
//         data: "salesman"
//     },
//     {
//         title: "Stock Code",
//         data: "stock_code"
//     },
//     {
//         title: "Description",
//         data: "description"
//     },
//     {
//         title: "Brand",
//         data: "brand"
//     },
//     {
//         title: "Main Category",
//         data: "main_category"
//     },
//     {
//         title: "Quantity (PCS.)",
//         data: "quantity"
//     },
//     {
//         title: "Last Updated",
//         data: "last_updated"
//     }
// ];

// TableLoader.tableData(
//     "#innValuationTable",
//     [],
//     InnValuationColumns
// );

// ComponentHelper.dropdown().loadByApi({
//     url: "/salesmen",
//     dropdownId: "innValuationItems",
//     noTextFound: "No Salesman Found"
// });

import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";

const InnValuationColumns = [
    {
        title: "mdCode",
        data: "mdcode"
    },
    {
        title: "Salesman Code",
        data: "salesman_code"
    },
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "Stock Code",
        data: "stock_code"
    },
    {
        title: "Description",
        data: "description"
    },
    {
        title: "Brand",
        data: "brand"
    },
    {
        title: "Main Category",
        data: "main_category"
    },
    {
        title: "Quantity (PCS.)",
        data: "quantity"
    },
    {
        title: "Last Updated",
        data: "last_updated"
    }
];

const sampleData = [
    {
        mdcode: "MD001",
        salesman_code: "SM001",
        salesman: "Juan Dela Cruz",
        stock_code: "STK1001",
        description: "Coca-Cola 1.5L",
        brand: "Coca-Cola",
        main_category: "Beverages",
        quantity: 120,
        last_updated: "2026-08-05 09:15 AM"
    },
    {
        mdcode: "MD002",
        salesman_code: "SM002",
        salesman: "Maria Santos",
        stock_code: "STK1002",
        description: "Sprite 1.5L",
        brand: "Sprite",
        main_category: "Beverages",
        quantity: 95,
        last_updated: "2026-08-05 10:30 AM"
    },
    {
        mdcode: "MD003",
        salesman_code: "SM003",
        salesman: "Pedro Reyes",
        stock_code: "STK1003",
        description: "Royal 1.5L",
        brand: "Royal",
        main_category: "Beverages",
        quantity: 75,
        last_updated: "2026-08-04 04:45 PM"
    },
    {
        mdcode: "MD004",
        salesman_code: "SM004",
        salesman: "Ana Garcia",
        stock_code: "STK1004",
        description: "Minute Maid Orange",
        brand: "Minute Maid",
        main_category: "Juices",
        quantity: 60,
        last_updated: "2026-08-03 01:20 PM"
    },
    {
        mdcode: "MD005",
        salesman_code: "SM005",
        salesman: "Jose Lim",
        stock_code: "STK1005",
        description: "Wilkins Pure 500ml",
        brand: "Wilkins",
        main_category: "Water",
        quantity: 180,
        last_updated: "2026-08-02 11:10 AM"
    }
];

TableLoader.tableData(
    "#innValuationTable",
    sampleData,
    InnValuationColumns
);

ComponentHelper.dropdown().loadByApi({
    url: "/salesmen",
    dropdownId: "innValuationItems",
    noTextFound: "No Salesman Found"
});
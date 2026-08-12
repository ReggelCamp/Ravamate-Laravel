import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const ProductListColumns = [
    {
        title: "Image",
        data: "image"
    },
    {
        title: "Status",
        data: "status"
    },
    {
        title: "Stock Code",
        data: "stock_code"
    },
    {
        title: "Supplier",
        data: "supplier"
    },
    {
        title: "Description",
        data: "description"
    },
    {
        title: "Brand",
        data: "brand"
    }
];

const sampleData = [
    {
        image: '<img src="https://fastsosyo.com/comports/admin/cmpnts/dist/upload/partners_product_images/lowres/cdo/FG00233.jpg?v=1786073633"style="width:50px;height:50px;object-fit:contain;" alt="Product">',
          status:  `
            <span class="text-[10px]">
                Active
            </span>
        `,
        stock_code: "STK-1001",
        supplier: "ABC Trading",
        description: "Wireless Bluetooth Mouse",
        brand: "Logitech"
    },
    {
        image: '<img src="https://fastsosyo.com/comports/admin/cmpnts/dist/upload/partners_product_images/lowres/cdo/FG00233.jpg?v=1786073633"style="width:50px;height:50px;object-fit:contain;" alt="Product">',
          status:  `
            <span class="text-[10px]">
                Active
            </span>
        `,
        stock_code: "STK-1002",
        supplier: "Tech Supplies Inc.",
        description: "Mechanical Keyboard",
        brand: "Keychron"
    },
    {
        image: '<img src="https://fastsosyo.com/comports/admin/cmpnts/dist/upload/partners_product_images/lowres/cdo/FG00233.jpg?v=1786073633"style="width:50px;height:50px;object-fit:contain;" alt="Product">',
          status:  `
            <span class="text-[10px]">
                Active
            </span>
        `,
        stock_code: "STK-1003",
        supplier: "Global Electronics",
        description: '27" 4K Monitor',
        brand: "LG"
    },
    {
        image: '<img src="https://fastsosyo.com/comports/admin/cmpnts/dist/upload/partners_product_images/lowres/cdo/FG00233.jpg?v=1786073633"style="width:50px;height:50px;object-fit:contain;" alt="Product">',
          status:  `
            <span class="text-[10px]">
                Active
            </span>
        `,
        stock_code: "STK-1004",
        supplier: "Office World",
        description: "USB-C Docking Station",
        brand: "Anker"
    },
    {
        image: '<img src="https://fastsosyo.com/comports/admin/cmpnts/dist/upload/partners_product_images/lowres/cdo/FG00233.jpg?v=1786073633"style="width:50px;height:50px;object-fit:contain;" alt="Product">',
        status:  `
            <span class="text-[10px]">
                Active
            </span>
        `,
        stock_code: "STK-1005",
        supplier: "Digital Hub",
        description: "External SSD 1TB",
        brand: "Samsung"
    }
];

TableLoader.tableData(
    "#producListTable",
    sampleData,
    ProductListColumns,
    {
        scrollY: "300px"
    }
);

$(document).ready(function () {
    DatePicker.init();
});
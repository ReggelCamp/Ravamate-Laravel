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

    }
);

$(document).ready(function () {
    DatePicker.init();
});

$(document)
    .off("click.producListTableRow", "#producListTable tbody tr")
    .on("click.producListTableRow", "#producListTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#producListTable")) return;

        const producListTable = $("#producListTable").DataTable();
        const rowData = producListTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayProductInfo(rowData);
    });

function DisplayProductInfo(rowData) {
    if (!rowData) return;

    // stock_code & description map directly
    $('#ProductModal [data-field="stock_code"]').text(rowData.stock_code ?? "—");
    $('#productModalBody [data-field="description"]').text(rowData.description ?? "—");

    // image is a raw <img> HTML string in your data — pull the src out of it
    const imageUrl = extractImageSrc(rowData.image);
    $("#productModalImage").attr("src", imageUrl ?? "").css("display", imageUrl ? "" : "none");

    // status is also raw HTML — pull the visible text out
    const statusText = extractStatusText(rowData.status);
    const isAvailable = statusText.toUpperCase() === "ACTIVE" || statusText.toUpperCase() === "AVAILABLE";

    $('#productModalBody [data-status-label]')
        .text(statusText.toUpperCase() || "—")
        .removeClass("text-green-500 text-red-500")
        .addClass(isAvailable ? "text-green-500" : "text-red-500");

    document.getElementById("ProductModal").showModal();
}

function extractImageSrc(imageHtml) {
    if (!imageHtml) return null;
    const match = imageHtml.match(/src=["']([^"']+)["']/);
    return match ? match[1] : null;
}

function extractStatusText(statusHtml) {
    if (!statusHtml) return "";
    const temp = document.createElement("div");
    temp.innerHTML = statusHtml;
    return temp.textContent.trim();
}
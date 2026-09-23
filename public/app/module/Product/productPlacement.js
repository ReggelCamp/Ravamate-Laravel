import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import Api from "../../helper/Api.js";

const PlacementProductColumns = [
    {
        title: "Type",
        data: "type"
    },
    {
        title: "Customer Class",
        data: "customer_class"
    },
    {
        title: "Item Number",
        data: "item_number"
    },
    {
        title: "Item Description",
        data: "item_description"
    },
    {
        title: "Placement",
        data: "placement"
    },
    {
        title: "Last Updated",
        data: "updated_at",
        render: function (data) {
            return data ? moment(data).format("MMM DD, YYYY hh:mm A") : "";
        }
    }
];

const CustClassOptions = [
    { data: "CONVENIENCE", title: "CONVENIENCE STORE" },
    { data: "GROCERY", title: "GROCERY" },
    { data: "OTHERS", title: "OTHERS" },
    { data: "SUPERMARKET", title: "SUPERMARKET" },
    { data: "MARKET", title: "MARKET STALL  DRY" },
    { data: "DRUGSTORE", title: "DRUGSTORE" },
    { data: "SARISARI", title: "SARISARI STORE" },
    { data: "FOODSERVICE", title: "FOODSERVICE" },
    { data: "MARKET", title: "MARKET STALL  WET" },
];

const PlacementType = [
    {
        data: "core" , title: "CORE"
    },
    {
        data: "non_core" , title: "NON-CORE"
    },
];

const Placement = [
    {
        data: "core" , title: "Core"
    },
    {
        data: "opportunity" , title: "Opportunity"
    },
    {
        data: "dev_core" , title: "Dev Core"
    },
];

TableLoader.loadTable({
    url: "product/getAllProductPlacement",
    tableId: "#productPlacementTable", 
    columns: PlacementProductColumns,
});

ComponentHelper.select().LoadSelectItems({
    id: "custClass",
    items: CustClassOptions
});

ComponentHelper.dropdown().loadByApi({
    url:"product/getProductTable",
    dropdownId: "UpdateProductPlacement",
    noDataText: "No Product Found",
    displayField: "description",
    dataField: "id",
});

ComponentHelper.dropdown().loadByApi({
    url:"product/getProductTable",
    dropdownId: "addProductPlacement",
    noDataText: "No Product Found",
    displayField: "description",
    dataField: "id",
});

ComponentHelper.select().LoadSelectItems({
    id: "placementType",
    items: PlacementType
});

ComponentHelper.select().LoadSelectItems({
    id: "placement",
    items: Placement
});

ComponentHelper.select().LoadSelectItems({
    id: "UpdatePlacementType",
    items: PlacementType
});

ComponentHelper.select().LoadSelectItems({
    id: "UpdateCustClass",
    items: CustClassOptions
});

ComponentHelper.select().LoadSelectItems({
    id: "UpdatePlacement",
    items: Placement
});

$(document).ready(function () {
    DatePicker.init();
});

$(document)
    .off("click.productPlacementTableRow", "#productPlacementTable tbody tr")
    .on("click.productPlacementTableRow", "#productPlacementTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#productPlacementTable")) return;


        const productPlacementTable = $("#productPlacementTable").DataTable();
        const rowData = productPlacementTable.row(this).data();
        
        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayPlacementInfo(rowData);
});

function DisplayPlacementInfo(rowData) {
    if (!rowData) return;

    console.log("ffa",rowData.type);

    $("#UpdatePlacementType").val(rowData.type ?? "");
    $("#UpdateCustClass").val(rowData.custclass ?? rowData.customer_class ?? "");
    $("#UpdatePlacement").val(rowData.placement ?? "");

    $("#update_weekVisited_label").text(rowData.item_description ?? "Select");
    $("#UpdateProductPlacement").data("product-id", rowData.item_number ?? rowData.product_id ?? "");
    $("#UpdateProductPlacement").data("item-description", rowData.item_description ?? "");

    $("#PlacementModal").data("record", rowData);
    document.getElementById("PlacementModal").showModal();
}

$(document).on("click", "#deletePlacementBtn", function () {
    const record = $("#PlacementModal").data("record");
    if (!record) return;
    if (!confirm(`Delete placement for ${record.item_description}?`)) return;

    // Api.delete({ url: `/placements/${record.item_number}`, ... })
    console.log("Deleting placement:", record);
});

$(document)
    .off("click.updateProductPlacementSelect", "#UpdateProductPlacement .dropdown-item")
    .on("click.updateProductPlacementSelect", "#UpdateProductPlacement .dropdown-item", function (e) {
        e.preventDefault();
        const productId = $(this).data("id");
        const itemDescription = $(this).data("value");
        $("#UpdateProductPlacement").data("product-id", productId);
        $("#UpdateProductPlacement").data("item-description", itemDescription);
        $("#update_weekVisited_label").text(itemDescription);
    });

$(document).on("click", "#updatePlacementBtn", function () {
    
    document.getElementById("PlacementModal")?.close();

    const record = $("#PlacementModal").data("record");
    const payload = {
        id: record?.id, 
        item_number: record?.item_number,
        type: $("#UpdatePlacementType").val(),
        product_id: $("#UpdateProductPlacement").data("product-id"),
        customer_class: $("#UpdateCustClass").val(),
        item_description: $("#UpdateProductPlacement").data("item-description"),
        placement: $("#UpdatePlacement").val(),
    };

    console.log("ggg",payload);

    Swal.fire({
        text: "Updating Placement, please wait.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    Api.post({
        url: "product/updateProductPlacement",
        data: payload,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: true,

        onSuccess: function (response) {

            swal.close();

            TableLoader.loadTable({
                url: "product/getAllProductPlacement",
                tableId: "#productPlacementTable",
                columns: PlacementProductColumns,
            });
        }
    });

    console.log("Updating placement:", payload);
});

$(document)
    .off("click.productPlacementSelect", "#addProductPlacement .dropdown-item")
    .on("click.productPlacementSelect", "#addProductPlacement .dropdown-item", function (e) {
        e.preventDefault();
        
        const productId = $(this).data("id");
        const itemDescription = $(this).data("value");

        console.log("Product ID:", productId);
        console.log("Item Description:", itemDescription);

        // Store them on the dropdown
        $("#addProductPlacement").data("product-id", productId);
        $("#addProductPlacement").data("item-description", itemDescription);

        // Display description
        $("#addProductPlacementText").text(itemDescription);
        $("#SelectedProduct").text(itemDescription);
    });

$(document).on("click", "#SubmitPlacement", function () {
    document.getElementById("AddPlacement")?.close();
    
    console.log("Customer Class:", $("#custClass").val());
    console.log("Placement Type:", $("#placementType").val());
    console.log("Placement:", $("#placement").val());

    const payload = {
        type: $("#placementType").val(),
        customer_class: $("#custClass").val(),
        placement: $("#placement").val(),
        product_id: $("#addProductPlacement").data("product-id"),
        item_description: $("#addProductPlacement").data("item-description")
    };

    console.log("Payload:", payload);
    
    Swal.fire({
        // title: "Creating Placement",
        text: "Creating Placement, please wait.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    Api.post({
        url: "product/createPlacement",
        data: payload,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: true,

        onSuccess: function (response) {

            swal.close();

            console.log("CREATE RESPONSE:", response);
            console.log("CREATED DATA:", response.data);

            TableLoader.loadTable({
                url: "product/getAllProductPlacement",
                tableId: "#productPlacementTable",
                columns: PlacementProductColumns,
            });
        }
    });
});
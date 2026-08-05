import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";

ComponentHelper.dropdown().loadByApi({
    url: "/salesmen",
    dropdownId: "dsrrItems",
    noTextFound: "No Salesman Found",
    displayField: "salesman_name",
    dataField: "salesman_id",
})

$(document).on("click", "#dropdown_Item", function (e) {
    e.preventDefault();
    
    const salesman = $(this).data("value");
    console.log("ge",salesman);

    $("#dsrrSalesmanName").text(salesman || "Select Salesman");
    
    //loadTable(salesman);

    $(this).blur();
    $('.dropdownTrigger [role="button"]').blur();
    console.log("man",salesman);

});
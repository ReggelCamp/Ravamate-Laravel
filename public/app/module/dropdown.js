import Api from "../helper/Api.js";
import Dropdown from "../helper/dropdown.js";
import MyDataTables from "./dataTable.js";

Dropdown.search('#dsrSearch','#dsrItems');
Dropdown.search('#dcrSearch','#dcrItems');
Dropdown.search('#dsrrSearch','#dsrrItems');
Dropdown.search('#salesRepSearch','#otherReports');
Dropdown.search('#invValSearch','#invValItems');

// dropdown icon
$(document).on("click", ".dropdownIcon", function () {

    $(this)
        .find(".arrowIcon i")
        .toggleClass("fa-angle-down fa-angle-up");

        console.log(this);
});
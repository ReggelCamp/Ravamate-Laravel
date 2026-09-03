import TableLoader from "../../../helper/TableLoader.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const StockRequestColumns = [
    {
        title: "mdCode",
        data: "mdCode"
    },
    {
        title: "Salesperson",
        data: "salesperson"
    },
    {
        title: "Customer",
        data: "customer"
    },
    {
        title: "custName",
        data: "custName"
    },
    {
        title: "Range_Target",
        data: "rangeTarget",
        className: "dt-body-center"
    },
    {
        title: "AltStockCodeDesc",
        data: "altStockCodeDesc"
    },
    {
        title: "DropSize",
        data: "dropSize",
        className: "dt-body-center"
    },
    {
        title: "PurchaseQty",
        data: "purchaseQty",
        className: "dt-body-center"
    },
    {
        title: "isHit",
        data: "isHit",
        className: "dt-body-center",
        render: function (data, type, row) {
            if (type === 'display') {
                return data
                    ? '<i class="fa-solid fa-circle-check text-green-500"></i>'
                    : '<i class="fa-solid fa-circle-xmark text-red-500"></i>';
            }
            return data;
        }
    },
    {
        title: "BalanceQty(pc)",
        data: "balanceQty",
        className: "dt-body-center"
    }
];

const sampleStockRequestData = [
    {
        mdCode: "MD10234",
        salesperson: "Nicolas Ramboyong",
        customer: "179_FPM",
        custName: "Marife Ablay",
        rangeTarget: 25,
        altStockCodeDesc: "CDO Idol CD 250g",
        dropSize: 5,
        purchaseQty: 5,
        isHit: true,
        balanceQty: 120
    },
    {
        mdCode: "MD10235",
        salesperson: "Nicolas Ramboyong",
        customer: "42_FPM",
        custName: "Argel Joseph E. Garcia",
        rangeTarget: 10,
        altStockCodeDesc: "Bingo HD Mini Flow 250g",
        dropSize: 1,
        purchaseQty: 1,
        isHit: true,
        balanceQty: 348
    },
    {
        mdCode: "MD10236",
        salesperson: "Alejandro Cruz",
        customer: "03_FPM",
        custName: "Reggel Santos",
        rangeTarget: 15,
        altStockCodeDesc: "CDO Skinless Longga 250g",
        dropSize: 0,
        purchaseQty: 0,
        isHit: false,
        balanceQty: 200
    },
    {
        mdCode: "MD10237",
        salesperson: "Alejandro Cruz",
        customer: "17_FPM",
        custName: "Maria Dela Cruz",
        rangeTarget: 30,
        altStockCodeDesc: "FG-IDOL GO BALLS 50S 0.707 KG x8",
        dropSize: 2,
        purchaseQty: 2,
        isHit: true,
        balanceQty: 76
    },
    {
        mdCode: "MD10238",
        salesperson: "Nicolas Ramboyong",
        customer: "88_FPM",
        custName: "Junel Bautista",
        rangeTarget: 20,
        altStockCodeDesc: "CDO Sweet Ham 250g",
        dropSize: 1,
        purchaseQty: 0,
        isHit: false,
        balanceQty: 412
    }
];

TableLoader.tableData(
    "#rangeMonitoringTable",
    sampleStockRequestData,
    StockRequestColumns,
    {
        // scrollY: "full"
    }
);

ComponentHelper.select().loadByApi({
    url: "/salesmen",
    selectID: "select_items",
    noDataText: "No salesman Found"
});

$(document).ready(function () {
    DatePicker.init();
});

ComponentHelper.dropdown().loadByApi({
    url: "/salesmen",
    dropdownId: "rangeMonitoringItems",
    noDataText: "No SalesMan Found",
    displayField: "salesman_name",
    dataField: "salesman_id",
});
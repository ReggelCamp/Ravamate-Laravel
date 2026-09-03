import TableLoader from "../../../helper/TableLoader.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const PromoUsageColumns = [
    {
        title: "Date Used",
        data: "dateUsed"
    },
    {
        title: "Cust Code",
        data: "custCode"
    },
    {
        title: "Store Name",
        data: "storeName"
    },
    {
        title: "Promo Code",
        data: "promoCode"
    },
    {
        title: "Promo Value",
        data: "promoValue",
        className: "dt-body-right",
        render: function (data, type, row) {
            if (type === 'display') {
                return "₱ " + parseFloat(data).toLocaleString('en-PH', { minimumFractionDigits: 2 });
            }
            return data;
        }
    },
    {
        title: "Total Amount",
        data: "totalAmount",
        className: "dt-body-right",
        render: function (data, type, row) {
            if (type === 'display') {
                return "₱ " + parseFloat(data).toLocaleString('en-PH', { minimumFractionDigits: 2 });
            }
            return data;
        }
    }
];

const samplePromoUsageData = [
    {
        dateUsed: "08/01/2026",
        custCode: "179_FPM",
        storeName: "Ablay Sari-Sari Store",
        promoCode: "PROMO-CDO-AUG26",
        promoValue: 150.00,
        totalAmount: 5878.20
    },
    {
        dateUsed: "08/01/2026",
        custCode: "42_FPM",
        storeName: "Garcia Mini Mart",
        promoCode: "PROMO-BINGO-AUG26",
        promoValue: 75.50,
        totalAmount: 1967.16
    },
    {
        dateUsed: "08/02/2026",
        custCode: "03_FPM",
        storeName: "Santos General Merchandise",
        promoCode: "PROMO-CDO-AUG26",
        promoValue: 200.00,
        totalAmount: 2304.72
    },
    {
        dateUsed: "08/02/2026",
        custCode: "17_FPM",
        storeName: "Dela Cruz Convenience",
        promoCode: "PROMO-IDOL-AUG26",
        promoValue: 100.00,
        totalAmount: 1986.56
    },
    {
        dateUsed: "08/03/2026",
        custCode: "88_FPM",
        storeName: "Bautista Trading",
        promoCode: "PROMO-BARN-AUG26",
        promoValue: 50.00,
        totalAmount: 1382.25
    }
];

TableLoader.tableData(
    "#voucherHistTable",
    samplePromoUsageData,
    PromoUsageColumns,
    {
        // scrollY: "50vh",
        // pageLength: 25
    }
);

// ComponentHelper.select().loadByApi({
//     url: "/salesmen",
//     selectID: "select_items",
//     noDataText: "No salesman Found"
// });

$(document).ready(function () {
    DatePicker.init();
});
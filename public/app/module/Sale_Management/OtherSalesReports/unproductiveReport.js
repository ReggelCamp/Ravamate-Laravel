import TableLoader from "../../../helper/TableLoader.js";
import ComponentHelper from "../../../helper/ComponentHelper.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const StockRequestColumns = [
    {
        title: "Status",
        data: "status",
        className: "text-left"
    },
    {
        title: "Salesman",
        data: "salesman",
        className: "text-left"
    },
    {
        title: "Date",
        data: "date"
    },
    {
        title: "Custcode",
        data: "custcode"
    },
    {
        title: "Customer",
        data: "customer",
        className: "text-left"
    },
    {
        title: "Document No.",
        data: "document_no",
        className: "text-left"
    },
    {
        title: "Range",
        data: "range",
        className: "text-center"
    },
    {
        title: "Time Travel (Min.)",
        data: "time_travel",
        className: "text-center"
    },
    {
        title: "Time Spent (Min.)",
        data: "time_spent",
        className: "text-center"
    },
    {
        title: "Geo Difference",
        data: "geo_difference",
        className: "text-center"
    },
    {
        title: "Longitude",
        data: "longitude",
        className: "text-left"
    },
    {
        title: "Latitude",
        data: "latitude",
        className: "text-left"
    },
    {
        title: "Remarks",
        data: "remarks",
        className: "text-left"
    },
    {
        title: "Payment Type",
        data: "payment_type"
    },
    {
        title: "Sales",
        data: "sales",
        className: "text-right"
    }
];

const StockRequestSampleData = [
    {
        status: "✓ VALID",
        salesman: "DSP3-GUZMAN RICKY",
        date: "2026-08-24 07:59:27.990",
        custcode: "6538_GP",
        customer: "V3-LESLY STORE SUSANO MARKET 🔋88",
        document_no: "GP_5SO260824-2606006",
        range: 2,
        time_travel: 0,
        time_spent: "1min 50sec",
        geo_difference: 121,
        longitude: "121.041025",
        latitude: "14.722928",
        remarks: "Account order outside day of coverage 121.10m away",
        payment_type: "TERMS",
        sales: "₱1,949.70"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:41:45.440",
        custcode: "3012_GP",
        customer: "V1-REBECCA 🔋70",
        document_no: "GP_11SO260823-26082312",
        range: 4,
        time_travel: 1,
        time_spent: "0min 31sec",
        geo_difference: 0,
        longitude: "120.964133",
        latitude: "14.710213",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱806.50"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:40:30.220",
        custcode: "707_GP",
        customer: "V1-VILLANUEVA STORE-PASONG TAMO 🔋71",
        document_no: "GP_11SO260823-26082311",
        range: 4,
        time_travel: 1,
        time_spent: "0min 21sec",
        geo_difference: 0,
        longitude: "120.964146",
        latitude: "14.710219",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱1,284.00"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:39:14.147",
        custcode: "8702_GP",
        customer: "REMY STORE PASONG TAMO 🔋71",
        document_no: "GP_11SO260823-26082310",
        range: 5,
        time_travel: 2,
        time_spent: "0min 33sec",
        geo_difference: 0,
        longitude: "120.964127",
        latitude: "14.710212",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱446.25"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:37:43.923",
        custcode: "8701_GP",
        customer: "RICO STORE PASONG TAMO 🔋71",
        document_no: "GP_11SO260823-2608239",
        range: 5,
        time_travel: 1,
        time_spent: "0min 30sec",
        geo_difference: 0,
        longitude: "120.964129",
        latitude: "14.710214",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱426.00"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:36:21.927",
        custcode: "8700_GP",
        customer: "ATE LETS STORE 🔋72",
        document_no: "GP_11SO260823-2608238",
        range: 2,
        time_travel: 3,
        time_spent: "0min 26sec",
        geo_difference: 0,
        longitude: "120.964133",
        latitude: "14.710216",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱385.00"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:33:25.227",
        custcode: "8699_GP",
        customer: "NORA STORE 🔋72",
        document_no: "GP_11SO260823-2608237",
        range: 3,
        time_travel: 2,
        time_spent: "0min 46sec",
        geo_difference: 0,
        longitude: "120.964128",
        latitude: "14.710209",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱630.00"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:31:42.267",
        custcode: "8698_GP",
        customer: "MA JOY STORE 🔋73",
        document_no: "GP_11SO260823-2608236",
        range: 18,
        time_travel: 3,
        time_spent: "1min 48sec",
        geo_difference: 0,
        longitude: "120.964127",
        latitude: "14.710207",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱2,313.75"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:28:43.847",
        custcode: "8697_GP",
        customer: "FRANZINE STORE 🔋73",
        document_no: "GP_11SO260823-2608235",
        range: 6,
        time_travel: 1,
        time_spent: "0min 44sec",
        geo_difference: 0,
        longitude: "120.964125",
        latitude: "14.710207",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱808.50"
    },
    {
        status: "✓ VALID",
        salesman: "DSP JOHN MARK DELA CRUZ",
        date: "2026-08-23 23:27:13.477",
        custcode: "1172_GP",
        customer: "V3-YG STORE 🔋74",
        document_no: "GP_11SO260823-2608234",
        range: 9,
        time_travel: 3,
        time_spent: "1min 7sec",
        geo_difference: 0,
        longitude: "120.964130",
        latitude: "14.710211",
        remarks: "",
        payment_type: "TERMS",
        sales: "₱1,026.75"
    }
];

TableLoader.tableData(
    "#unproductiveTable",
    StockRequestSampleData,
    StockRequestColumns,
    {
        scrollY: "500px"
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
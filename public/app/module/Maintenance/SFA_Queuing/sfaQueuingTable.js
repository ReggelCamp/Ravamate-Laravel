import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const ReturnLogsColumns = [
    {
        title: "Transaction ID",
        data: "transactionId",
    },
    {
        title: "Salesman",
        data: "salesman_name",
    },
    {
        title: "CustomerCode",
        data: "customercode",
    },
    {
        title: "Invoice No.",
        data: "invoice_no",
    },
    {
        title: "Site",
        data: "site",
    },
    {
        title: "Item No.",
        data: "item_no",
    },
    {
        title: "UM",
        data: "um",
    },
    {
        title: "Quantity",
        data: "quantity",
    },
    {
        title: "Reason Code",
        data: "reason_code",
    },
    {
        title: "API Status",
        data: "api_status",
    },
    {
        title: "API Response",
        data: "api_response",
    },
    {
        title: "Last Updated",
        data: "last_updated",
    },
    {
        title: "Date Added",
        data: "date_added",
    },
];

const SoToFdisColumns = [
    {
        title: "Transaction ID",
        data: "transactionId",
    },
    {
        title: "Salesman",
        data: "salesman_name",
    },
    {
        title: "Order Type",
        data: "order_type",
    },
    {
        title: "CustomerCode",
        data: "customercode",
    },
    {
        title: "Item Number",
        data: "item_no",
    },
    {
        title: "Site",
        data: "site",
    },
    {
        title: "UM",
        data: "um",
    },
    {
        title: "QTY Ordered",
        data: "quantity",
    },
    {
        title: "API Status",
        data: "api_status",
    },
    {
        title: "API Response",
        data: "api_response",
    },
    {
        title: "Last Updated",
        data: "last_updated",
    },
    {
        title: "Date Added",
        data: "date_added",
    },
];

const PaymentLogsColumns = [
    {
        title: "Transaction ID",
        data: "transactionId",
    },
    {
        title: "Invoice No.",
        data: "invoice_no",
    },
    {
        title: "Document. #",
        data: "document_no",
    },
    {
        title: "Mode",
        data: "mode",
    },
    {
        title: "Transaction Amount",
        data: "transaction_amt",
    },
    {
        title: "Bank",
        data: "bank",
    },
    {
        title: "Check No.",
        data: "check_no",
    },
    {
        title: "Check Date",
        data: "check_date",
    },
    {
        title: "API Status",
        data: "api_status",
    },
    {
        title: "API Response",
        data: "api_response",
    },
    {
        title: "Last Updated",
        data: "last_updated",
    },
    {
        title: "Date Added",
        data: "date_added",
    },
];

const AutoLogsColumns = [
    {
        title: "Transaction ID",
        data: "transactionId",
    },
    {
        title: "Source",
        data: "source",
    },
    {
        title: "Destination",
        data: "destination",
    },
    {
        title: "Item No.",
        data: "item_no",
    },
    {
        title: "UM",
        data: "um",
    },
    {
        title: "QTY Ordered",
        data: "quantity",
    },
    {
        title: "API Status",
        data: "api_status",
    },
    {
        title: "API Response",
        data: "api_response",
    },
    {
        title: "Last Updated",
        data: "last_updated",
    },
    {
        title: "Date Added",
        data: "date_added",
    },
];

// Sample Data
const soToFdisSampleData = [
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100001",
        salesman_name: "Juan Dela Cruz",
        order_type: "Regular",
        customercode: "CUST-1001",
        item_no: "FG00233",
        site: "CEBU",
        um: "CASE",
        quantity: 10,
        api_status: "Success",
        api_response: "Transaction Posted",
        last_updated: "2026-08-07 10:15 AM",
        date_added: "2026-08-07 09:50 AM",
    },
    {
        transactionId: "SO-100002",
        salesman_name: "Maria Santos",
        order_type: "Promo",
        customercode: "CUST-1002",
        item_no: "FG00452",
        site: "MANDAUE",
        um: "PCS",
        quantity: 24,
        api_status: "Pending",
        api_response: "Waiting for Sync",
        last_updated: "2026-08-07 10:20 AM",
        date_added: "2026-08-07 10:00 AM",
    },
];

const returnLogsSampleData = [
    {
        transactionId: "RT-200001",
        salesman_name: "Pedro Reyes",
        customercode: "CUST-2001",
        invoice_no: "INV-100001",
        site: "CEBU",
        item_no: "FG00233",
        um: "CASE",
        quantity: 2,
        reason_code: "DAMAGED",
        api_status: "Success",
        api_response: "Return Accepted",
        last_updated: "2026-08-07 11:00 AM",
        date_added: "2026-08-07 10:45 AM",
    },
    {
        transactionId: "RT-200002",
        salesman_name: "John Cruz",
        customercode: "CUST-2002",
        invoice_no: "INV-100002",
        site: "LAPU-LAPU",
        item_no: "FG00120",
        um: "PCS",
        quantity: 1,
        reason_code: "EXPIRED",
        api_status: "Failed",
        api_response: "Invoice Not Found",
        last_updated: "2026-08-07 11:10 AM",
        date_added: "2026-08-07 10:55 AM",
    },
    {
        transactionId: "RT-200001",
        salesman_name: "Pedro Reyes",
        customercode: "CUST-2001",
        invoice_no: "INV-100001",
        site: "CEBU",
        item_no: "FG00233",
        um: "CASE",
        quantity: 2,
        reason_code: "DAMAGED",
        api_status: "Success",
        api_response: "Return Accepted",
        last_updated: "2026-08-07 11:00 AM",
        date_added: "2026-08-07 10:45 AM",
    },
    {
        transactionId: "RT-200002",
        salesman_name: "John Cruz",
        customercode: "CUST-2002",
        invoice_no: "INV-100002",
        site: "LAPU-LAPU",
        item_no: "FG00120",
        um: "PCS",
        quantity: 1,
        reason_code: "EXPIRED",
        api_status: "Failed",
        api_response: "Invoice Not Found",
        last_updated: "2026-08-07 11:10 AM",
        date_added: "2026-08-07 10:55 AM",
    },
    {
        transactionId: "RT-200001",
        salesman_name: "Pedro Reyes",
        customercode: "CUST-2001",
        invoice_no: "INV-100001",
        site: "CEBU",
        item_no: "FG00233",
        um: "CASE",
        quantity: 2,
        reason_code: "DAMAGED",
        api_status: "Success",
        api_response: "Return Accepted",
        last_updated: "2026-08-07 11:00 AM",
        date_added: "2026-08-07 10:45 AM",
    },
    {
        transactionId: "RT-200002",
        salesman_name: "John Cruz",
        customercode: "CUST-2002",
        invoice_no: "INV-100002",
        site: "LAPU-LAPU",
        item_no: "FG00120",
        um: "PCS",
        quantity: 1,
        reason_code: "EXPIRED",
        api_status: "Failed",
        api_response: "Invoice Not Found",
        last_updated: "2026-08-07 11:10 AM",
        date_added: "2026-08-07 10:55 AM",
    },
    {
        transactionId: "RT-200001",
        salesman_name: "Pedro Reyes",
        customercode: "CUST-2001",
        invoice_no: "INV-100001",
        site: "CEBU",
        item_no: "FG00233",
        um: "CASE",
        quantity: 2,
        reason_code: "DAMAGED",
        api_status: "Success",
        api_response: "Return Accepted",
        last_updated: "2026-08-07 11:00 AM",
        date_added: "2026-08-07 10:45 AM",
    },
    {
        transactionId: "RT-200002",
        salesman_name: "John Cruz",
        customercode: "CUST-2002",
        invoice_no: "INV-100002",
        site: "LAPU-LAPU",
        item_no: "FG00120",
        um: "PCS",
        quantity: 1,
        reason_code: "EXPIRED",
        api_status: "Failed",
        api_response: "Invoice Not Found",
        last_updated: "2026-08-07 11:10 AM",
        date_added: "2026-08-07 10:55 AM",
    },
    {
        transactionId: "RT-200001",
        salesman_name: "Pedro Reyes",
        customercode: "CUST-2001",
        invoice_no: "INV-100001",
        site: "CEBU",
        item_no: "FG00233",
        um: "CASE",
        quantity: 2,
        reason_code: "DAMAGED",
        api_status: "Success",
        api_response: "Return Accepted",
        last_updated: "2026-08-07 11:00 AM",
        date_added: "2026-08-07 10:45 AM",
    },
    {
        transactionId: "RT-200002",
        salesman_name: "John Cruz",
        customercode: "CUST-2002",
        invoice_no: "INV-100002",
        site: "LAPU-LAPU",
        item_no: "FG00120",
        um: "PCS",
        quantity: 1,
        reason_code: "EXPIRED",
        api_status: "Failed",
        api_response: "Invoice Not Found",
        last_updated: "2026-08-07 11:10 AM",
        date_added: "2026-08-07 10:55 AM",
    },
    {
        transactionId: "RT-200001",
        salesman_name: "Pedro Reyes",
        customercode: "CUST-2001",
        invoice_no: "INV-100001",
        site: "CEBU",
        item_no: "FG00233",
        um: "CASE",
        quantity: 2,
        reason_code: "DAMAGED",
        api_status: "Success",
        api_response: "Return Accepted",
        last_updated: "2026-08-07 11:00 AM",
        date_added: "2026-08-07 10:45 AM",
    },
    {
        transactionId: "RT-200002",
        salesman_name: "John Cruz",
        customercode: "CUST-2002",
        invoice_no: "INV-100002",
        site: "LAPU-LAPU",
        item_no: "FG00120",
        um: "PCS",
        quantity: 1,
        reason_code: "EXPIRED",
        api_status: "Failed",
        api_response: "Invoice Not Found",
        last_updated: "2026-08-07 11:10 AM",
        date_added: "2026-08-07 10:55 AM",
    },
    {
        transactionId: "RT-200001",
        salesman_name: "Pedro Reyes",
        customercode: "CUST-2001",
        invoice_no: "INV-100001",
        site: "CEBU",
        item_no: "FG00233",
        um: "CASE",
        quantity: 2,
        reason_code: "DAMAGED",
        api_status: "Success",
        api_response: "Return Accepted",
        last_updated: "2026-08-07 11:00 AM",
        date_added: "2026-08-07 10:45 AM",
    },
    {
        transactionId: "RT-200002",
        salesman_name: "John Cruz",
        customercode: "CUST-2002",
        invoice_no: "INV-100002",
        site: "LAPU-LAPU",
        item_no: "FG00120",
        um: "PCS",
        quantity: 1,
        reason_code: "EXPIRED",
        api_status: "Failed",
        api_response: "Invoice Not Found",
        last_updated: "2026-08-07 11:10 AM",
        date_added: "2026-08-07 10:55 AM",
    },
    {
        transactionId: "RT-200001",
        salesman_name: "Pedro Reyes",
        customercode: "CUST-2001",
        invoice_no: "INV-100001",
        site: "CEBU",
        item_no: "FG00233",
        um: "CASE",
        quantity: 2,
        reason_code: "DAMAGED",
        api_status: "Success",
        api_response: "Return Accepted",
        last_updated: "2026-08-07 11:00 AM",
        date_added: "2026-08-07 10:45 AM",
    },
    {
        transactionId: "RT-200002",
        salesman_name: "John Cruz",
        customercode: "CUST-2002",
        invoice_no: "INV-100002",
        site: "LAPU-LAPU",
        item_no: "FG00120",
        um: "PCS",
        quantity: 1,
        reason_code: "EXPIRED",
        api_status: "Failed",
        api_response: "Invoice Not Found",
        last_updated: "2026-08-07 11:10 AM",
        date_added: "2026-08-07 10:55 AM",
    },
];

const paymentLogsSampleData = [
    {
        transactionId: "PAY-300001",
        invoice_no: "INV-300001",
        document_no: "DOC-001",
        mode: "Cash",
        transaction_amt: "₱5,250.00",
        bank: "-",
        check_no: "-",
        check_date: "-",
        api_status: "Success",
        api_response: "Payment Posted",
        last_updated: "2026-08-07 01:30 PM",
        date_added: "2026-08-07 01:00 PM",
    },
    {
        transactionId: "PAY-300002",
        invoice_no: "INV-300002",
        document_no: "DOC-002",
        mode: "Check",
        transaction_amt: "₱12,800.00",
        bank: "BDO",
        check_no: "CHK123456",
        check_date: "2026-08-07",
        api_status: "Pending",
        api_response: "Awaiting Confirmation",
        last_updated: "2026-08-07 01:45 PM",
        date_added: "2026-08-07 01:15 PM",
    },
];

const autoLogsSampleData = [
    {
        transactionId: "AT-400001",
        source: "Warehouse A",
        destination: "Warehouse B",
        item_no: "FG00233",
        um: "CASE",
        quantity: 15,
        api_status: "Success",
        api_response: "Transfer Completed",
        last_updated: "2026-08-07 02:00 PM",
        date_added: "2026-08-07 01:30 PM",
    },
    {
        transactionId: "AT-400002",
        source: "Warehouse B",
        destination: "Warehouse C",
        item_no: "FG00452",
        um: "PCS",
        quantity: 30,
        api_status: "Failed",
        api_response: "Insufficient Stock",
        last_updated: "2026-08-07 02:15 PM",
        date_added: "2026-08-07 01:45 PM",
    },
];

// SOLogsColumns
// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#SOPendingLogs",
//     columns: SoToFdisColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#SOFailedLogs",
//     columns:  SoToFdisColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#SOSuccessLogs",
//     columns:  SoToFdisColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// ReturnLogsColumns
// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#ReturnPendingLogs",
//     columns: ReturnLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#ReturnFailedLogs",
//     columns: ReturnLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#ReturnSuccessLogs",
//     columns: ReturnLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// PaymentLogColumns
// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#PaymentPendingLogs",
//     columns: PaymentLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#PaymentFailedLogs",
//     columns: PaymentLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#PaymentSuccessLogs",
//     columns: PaymentLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// AutoLogsColumns
// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#AutoStockPendingLogs",
//     columns: AutoLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#AutoStockFailedLogs",
//     columns: AutoLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// TableLoader.loadTable({
//     url: "getDCRtable",
//     tableId: "#AutoStockSuccessLogs",
//     columns: AutoLogsColumns,
//     pageLength: 5,

//     onSuccess: (data) => {
//     },
// });

// Sample Data

//sotofdis

TableLoader.tableData("#SOPendingLogs", soToFdisSampleData, SoToFdisColumns, {
    scrollY: "40vh",
    pageLength: 25,
});

TableLoader.tableData("#SOFailedLogs", soToFdisSampleData, SoToFdisColumns, {
    scrollY: "40vh",
    pageLength: 25,
});

TableLoader.tableData("#SOSuccessLogs", soToFdisSampleData, SoToFdisColumns, {
    scrollY: "40vh",
    pageLength: 25,
});

//return
TableLoader.tableData(
    "#ReturnPendingLogs",
    returnLogsSampleData,
    ReturnLogsColumns,
    {
        scrollY: "40vh",
        pageLength: 25,
    },
);
TableLoader.tableData(
    "#ReturnFailedLogs",
    returnLogsSampleData,
    ReturnLogsColumns,
    {
        scrollY: "40vh",
        pageLength: 25,
    },
);
TableLoader.tableData(
    "#ReturnSuccessLogs",
    returnLogsSampleData,
    ReturnLogsColumns,
    {
        crollY: "40vh",
        pageLength: 25,
    },
);

//payment
TableLoader.tableData(
    "#PaymentPendingLogs",
    paymentLogsSampleData,
    PaymentLogsColumns,
    {
        scrollY: "40vh",
        pageLength: 25,
    },
);
TableLoader.tableData(
    "#PaymentFailedLogs",
    paymentLogsSampleData,
    PaymentLogsColumns,
    {
        scrollY: "40vh",
        pageLength: 25,
    },
);
TableLoader.tableData(
    "#PaymentSuccessLogs",
    paymentLogsSampleData,
    PaymentLogsColumns,
    {
        scrollY: "40vh",
        pageLength: 25,
    },
);

//autostock
TableLoader.tableData(
    "#AutoStockPendingLogs",
    autoLogsSampleData,
    AutoLogsColumns,
    {
        scrollY: "40vh",
        pageLength: 25,
    },
);
TableLoader.tableData(
    "#AutoStockFailedLogs",
    autoLogsSampleData,
    AutoLogsColumns,
    {
        scrollY: "40vh",
        pageLength: 25,
    },
);
TableLoader.tableData(
    "#AutoStockSuccessLogs",
    autoLogsSampleData,
    AutoLogsColumns,
    {
        scrollY: "40vh",
        pageLength: 25,
    },
);

// Hide button initially
$(".reprocess_btn").addClass("hidden");

// When any tab is clicked
$(".tab").on("click", function () {
    if ($(this).attr("id").includes("Failed")) {
        $(".reprocess_btn").removeClass("hidden");
    } else {
        $(".reprocess_btn").addClass("hidden");
    }
});

$(".container_trigger").on("click", function () {
    // Remove active state from all cards
    $(".container_trigger").removeClass("active");

    // Add active state to the clicked card
    $(this).addClass("active");

    $(".table_container").fadeOut(100);

    const container = $($(this).data("id"));

    $($(this).data().id).fadeIn(100);
    container.find(".tab").first().click();
});

$(".container_trigger").first().click();

$(document).ready(function () {
    DatePicker.init();
});

// Maps each table's real ID (must match TableLoader.tableData's first arg) to a "type"
// so one populate function can branch on it.
const queueTables = [
    { id: "SOPendingLogs", type: "so" },
    { id: "SOFailedLogs", type: "so" },
    { id: "SOSuccessLogs", type: "so" },

    { id: "ReturnPendingLogs", type: "return" },
    { id: "ReturnFailedLogs", type: "return" },
    { id: "ReturnSuccessLogs", type: "return" },

    { id: "PaymentPendingLogs", type: "payment" },
    { id: "PaymentFailedLogs", type: "payment" },
    { id: "PaymentSuccessLogs", type: "payment" },

    { id: "AutoStockPendingLogs", type: "autostock" },
    { id: "AutoStockFailedLogs", type: "autostock" },
    { id: "AutoStockSuccessLogs", type: "autostock" },
];

queueTables.forEach(({ id, type }) => {
    $(document)
        .off(`click.${id}Row`, `#${id} tbody tr`)
        .on(`click.${id}Row`, `#${id} tbody tr`, function () {
            if (!$.fn.DataTable.isDataTable(`#${id}`)) return;

            const rowData = $(`#${id}`).DataTable().row(this).data();
            if (!rowData) return;

            DisplayQueueInfo(type, rowData);
            console.log("dadaa", id);
        });
});

function DisplayQueueInfo(type, rowData) {
    // Fields common-ish across types
    $("#qmodal_status").text(rowData.api_status);

    switch (type) {
        case "so":
            $("#qmodal_title").text("Sales Order to FDIS");
            $("#qmodal_salesman").text(rowData.salesman_name);
            $("#qmodal_ref").text(rowData.transactionId);
            renderQueueTable(
                "itemCodeBody",
                [rowData],
                (r) => `
                <tr>
                    <td class="text-center">${r.item_no}</td>
                    <td class="text-center">${r.um}</td>
                    <td class="text-center">${r.quantity}</td>
                </tr>`,
            );
            break;

        case "return":
            $("#qmodal_title").text("Return to FDIS");
            $("#qmodal_salesman").text(rowData.salesman_name);
            $("#qmodal_ref").text(rowData.transactionId);
            renderQueueTable(
                "itemCodeBody",
                [rowData],
                (r) => `
                <tr>
                    <td class="text-center">${r.item_no}</td>
                    <td class="text-center">${r.reason_code}</td>
                    <td class="text-center">${r.quantity}</td>
                </tr>`,
            );
            break;

        case "payment":
            $("#qmodal_title").text("Payment to FDIS");
            $("#qmodal_ref").text(rowData.transactionId);
            renderQueueTable(
                "itemCodeBody",
                [rowData],
                (r) => `
                <tr>
                    <td class="text-center">${r.mode}</td>
                    <td class="text-right">${r.transaction_amt}</td>
                    <td class="text-center">${r.bank}</td>
                </tr>`,
            );
            break;

        case "autostock":
            $("#qmodal_title").text("Auto Stock Transfer to FDIS");
            $("#qmodal_ref").text(rowData.transactionId);
            renderQueueTable(
                "itemCodeBody",
                [rowData],
                (r) => `
                <tr>
                    <td class="text-center">${r.source}</td>
                    <td class="text-center">${r.destination}</td>
                    <td class="text-center">${r.quantity}</td>
                </tr>`,
            );
            break;
    }

    document.getElementById("sfaQueueDetailModal").showModal();
}

function renderQueueTable(bodyId, rows, rowTemplate) {
    $("#" + bodyId).html(rows.map(rowTemplate).join(""));
}

$(document).on("click", "#sfaRefresh", function () {
    Swal.fire({
        text: "This could take time, please wait while we process your request.",
        icon: "question",
    });
});

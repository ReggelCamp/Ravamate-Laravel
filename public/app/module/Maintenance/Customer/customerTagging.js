import TableLoader from "../../../helper/TableLoader.js";

const CustomerTaggingColumns = [
    {
        title: "Salesperson",
        data: "salesperson"
    },
    {
        title: "CustCode",
        data: "cust_code"
    },
    {
        title: "CustName",
        data: "cust_name"
    },
    {
        title: "Contact CellNumber",
        data: "contact_cellnumber"
    },
    {
        title: "Longitude",
        data: "longitude"
    },
    {
        title: "Latitude",
        data: "latitude"
    },
    {
        title: "Tagging Completed",
        data: "tagging_completed"
    },
    {
        title: "",
        data: "action"
    },
];

const CustomerTaggingSampleData = [
    {
        salesperson: "Juan Dela Cruz",
        cust_code: "CUST001",
        cust_name: "ABC Trading",
        contact_cellnumber: "09171234567",
        longitude: "123.8982",
        latitude: "10.3297",
        tagging_completed: "Yes",
        action: "View"
    },
    {
        salesperson: "Maria Santos",
        cust_code: "CUST002",
        cust_name: "XYZ Enterprises",
        contact_cellnumber: "09281234567",
        longitude: "123.9186",
        latitude: "10.3496",
        tagging_completed: "No",
        action: "View"
    },
    {
        salesperson: "Carlos Reyes",
        cust_code: "CUST003",
        cust_name: "Sunrise Supermarket",
        contact_cellnumber: "09391234567",
        longitude: "124.0100",
        latitude: "10.3077",
        tagging_completed: "Yes",
        action: "View"
    },
    {
        salesperson: "Angela Cruz",
        cust_code: "CUST004",
        cust_name: "Metro General Store",
        contact_cellnumber: "09481234567",
        longitude: "123.9578",
        latitude: "10.3766",
        tagging_completed: "No",
        action: "View"
    },
    {
        salesperson: "Robert Garcia",
        cust_code: "CUST005",
        cust_name: "Golden Harvest Foods",
        contact_cellnumber: "09591234567",
        longitude: "123.8419",
        latitude: "10.2447",
        tagging_completed: "Yes",
        action: "View"
    },
    {
        salesperson: "Juan Dela Cruz",
        cust_code: "CUST001",
        cust_name: "ABC Trading",
        contact_cellnumber: "09171234567",
        longitude: "123.8982",
        latitude: "10.3297",
        tagging_completed: "Yes",
        action: "View"
    },
    {
        salesperson: "Maria Santos",
        cust_code: "CUST002",
        cust_name: "XYZ Enterprises",
        contact_cellnumber: "09281234567",
        longitude: "123.9186",
        latitude: "10.3496",
        tagging_completed: "No",
        action: "View"
    },
    {
        salesperson: "Carlos Reyes",
        cust_code: "CUST003",
        cust_name: "Sunrise Supermarket",
        contact_cellnumber: "09391234567",
        longitude: "124.0100",
        latitude: "10.3077",
        tagging_completed: "Yes",
        action: "View"
    },
    {
        salesperson: "Angela Cruz",
        cust_code: "CUST004",
        cust_name: "Metro General Store",
        contact_cellnumber: "09481234567",
        longitude: "123.9578",
        latitude: "10.3766",
        tagging_completed: "No",
        action: "View"
    },
    {
        salesperson: "Robert Garcia",
        cust_code: "CUST005",
        cust_name: "Golden Harvest Foods",
        contact_cellnumber: "09591234567",
        longitude: "123.8419",
        latitude: "10.2447",
        tagging_completed: "Yes",
        action: "View"
    },
    {
        salesperson: "Juan Dela Cruz",
        cust_code: "CUST001",
        cust_name: "ABC Trading",
        contact_cellnumber: "09171234567",
        longitude: "123.8982",
        latitude: "10.3297",
        tagging_completed: "Yes",
        action: "View"
    },
    {
        salesperson: "Maria Santos",
        cust_code: "CUST002",
        cust_name: "XYZ Enterprises",
        contact_cellnumber: "09281234567",
        longitude: "123.9186",
        latitude: "10.3496",
        tagging_completed: "No",
        action: "View"
    },
    {
        salesperson: "Carlos Reyes",
        cust_code: "CUST003",
        cust_name: "Sunrise Supermarket",
        contact_cellnumber: "09391234567",
        longitude: "124.0100",
        latitude: "10.3077",
        tagging_completed: "Yes",
        action: "View"
    },
    {
        salesperson: "Angela Cruz",
        cust_code: "CUST004",
        cust_name: "Metro General Store",
        contact_cellnumber: "09481234567",
        longitude: "123.9578",
        latitude: "10.3766",
        tagging_completed: "No",
        action: "View"
    },
    {
        salesperson: "Robert Garcia",
        cust_code: "CUST005",
        cust_name: "Golden Harvest Foods",
        contact_cellnumber: "09591234567",
        longitude: "123.8419",
        latitude: "10.2447",
        tagging_completed: "Yes",
        action: "View"
    },
];

TableLoader.tableData(
    "#customerTaggingTable",
    CustomerTaggingSampleData,
    CustomerTaggingColumns,
    {
        scrollY: "300px"
    }
);
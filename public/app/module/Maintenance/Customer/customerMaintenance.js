import TableLoader from "../../../helper/TableLoader.js";
import DatePicker from "../../../helper/datePicker.js";
import "../../../helper/exportDataTable.js";

const CustomerListColumns = [
    {
        title: "Salesman",
        data: "salesman"
    },
    {
        title: "Salesman Name",
        data: "salesman_name"
    },
    {
        title: "Customer Code",
        data: "customer_code"
    },
    {
        title: "Customer Name",
        data: "customer_name"
    },
    {
        title: "Address",
        data: "address"
    },
    {
        title: "Contact Person",
        data: "contact_person"
    },
    {
        title: "Contact #",
        data: "contact"
    },
    {
        title: "Landline",
        data: "landline"
    },
    {
        title: "Customer Type",
        data: "customer_type"
    },
    {
        title: "Freq. Cat.",
        data: "freq_cat"
    },
    {
        title: "MCP Day",
        data: "mcp_day"
    },
    {
        title: "MCP Schedule",
        data: "mcp_schedule"
    },
    {
        title: "Price Code",
        data: "price_code"
    },
];

const CustomerMaintenanceSampleData = [
    {
        salesman: "SM001",
        salesman_name: "Juan Dela Cruz",
        customer_code: "CUST001",
        customer_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        contact_person: "Pedro Santos",
        contact: "09171234567",
        landline: "(032) 123-4567",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Monday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM002",
        salesman_name: "Maria Santos",
        customer_code: "CUST002",
        customer_name: "XYZ Enterprises",
        address: "45 Mango Ave., Cebu City",
        contact_person: "Ana Garcia",
        contact: "09281234567",
        landline: "(032) 234-5678",
        customer_type: "Wholesale",
        freq_cat: "B",
        mcp_day: "Tuesday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM003",
        salesman_name: "Carlos Reyes",
        customer_code: "CUST003",
        customer_name: "Cebu General Store",
        address: "78 Colon St., Cebu City",
        contact_person: "Mark Villanueva",
        contact: "09391234567",
        landline: "(032) 345-6789",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Wednesday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM004",
        salesman_name: "Angela Cruz",
        customer_code: "CUST004",
        customer_name: "Metro Supplies",
        address: "21 Osmeña Blvd., Cebu City",
        contact_person: "John Tan",
        contact: "09481234567",
        landline: "(032) 456-7890",
        customer_type: "Wholesale",
        freq_cat: "C",
        mcp_day: "Thursday",
        mcp_schedule: "Monthly",
        price_code: "PRC003"
    },
    {
        salesman: "SM005",
        salesman_name: "Robert Garcia",
        customer_code: "CUST005",
        customer_name: "Sunrise Mart",
        address: "56 Lahug Rd., Cebu City",
        contact_person: "Lisa Flores",
        contact: "09591234567",
        landline: "(032) 567-8901",
        customer_type: "Retail",
        freq_cat: "B",
        mcp_day: "Friday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM001",
        salesman_name: "Juan Dela Cruz",
        customer_code: "CUST001",
        customer_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        contact_person: "Pedro Santos",
        contact: "09171234567",
        landline: "(032) 123-4567",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Monday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM002",
        salesman_name: "Maria Santos",
        customer_code: "CUST002",
        customer_name: "XYZ Enterprises",
        address: "45 Mango Ave., Cebu City",
        contact_person: "Ana Garcia",
        contact: "09281234567",
        landline: "(032) 234-5678",
        customer_type: "Wholesale",
        freq_cat: "B",
        mcp_day: "Tuesday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM003",
        salesman_name: "Carlos Reyes",
        customer_code: "CUST003",
        customer_name: "Cebu General Store",
        address: "78 Colon St., Cebu City",
        contact_person: "Mark Villanueva",
        contact: "09391234567",
        landline: "(032) 345-6789",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Wednesday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM004",
        salesman_name: "Angela Cruz",
        customer_code: "CUST004",
        customer_name: "Metro Supplies",
        address: "21 Osmeña Blvd., Cebu City",
        contact_person: "John Tan",
        contact: "09481234567",
        landline: "(032) 456-7890",
        customer_type: "Wholesale",
        freq_cat: "C",
        mcp_day: "Thursday",
        mcp_schedule: "Monthly",
        price_code: "PRC003"
    },
    {
        salesman: "SM005",
        salesman_name: "Robert Garcia",
        customer_code: "CUST005",
        customer_name: "Sunrise Mart",
        address: "56 Lahug Rd., Cebu City",
        contact_person: "Lisa Flores",
        contact: "09591234567",
        landline: "(032) 567-8901",
        customer_type: "Retail",
        freq_cat: "B",
        mcp_day: "Friday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM001",
        salesman_name: "Juan Dela Cruz",
        customer_code: "CUST001",
        customer_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        contact_person: "Pedro Santos",
        contact: "09171234567",
        landline: "(032) 123-4567",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Monday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM002",
        salesman_name: "Maria Santos",
        customer_code: "CUST002",
        customer_name: "XYZ Enterprises",
        address: "45 Mango Ave., Cebu City",
        contact_person: "Ana Garcia",
        contact: "09281234567",
        landline: "(032) 234-5678",
        customer_type: "Wholesale",
        freq_cat: "B",
        mcp_day: "Tuesday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM003",
        salesman_name: "Carlos Reyes",
        customer_code: "CUST003",
        customer_name: "Cebu General Store",
        address: "78 Colon St., Cebu City",
        contact_person: "Mark Villanueva",
        contact: "09391234567",
        landline: "(032) 345-6789",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Wednesday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM004",
        salesman_name: "Angela Cruz",
        customer_code: "CUST004",
        customer_name: "Metro Supplies",
        address: "21 Osmeña Blvd., Cebu City",
        contact_person: "John Tan",
        contact: "09481234567",
        landline: "(032) 456-7890",
        customer_type: "Wholesale",
        freq_cat: "C",
        mcp_day: "Thursday",
        mcp_schedule: "Monthly",
        price_code: "PRC003"
    },
    {
        salesman: "SM005",
        salesman_name: "Robert Garcia",
        customer_code: "CUST005",
        customer_name: "Sunrise Mart",
        address: "56 Lahug Rd., Cebu City",
        contact_person: "Lisa Flores",
        contact: "09591234567",
        landline: "(032) 567-8901",
        customer_type: "Retail",
        freq_cat: "B",
        mcp_day: "Friday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM001",
        salesman_name: "Juan Dela Cruz",
        customer_code: "CUST001",
        customer_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        contact_person: "Pedro Santos",
        contact: "09171234567",
        landline: "(032) 123-4567",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Monday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM002",
        salesman_name: "Maria Santos",
        customer_code: "CUST002",
        customer_name: "XYZ Enterprises",
        address: "45 Mango Ave., Cebu City",
        contact_person: "Ana Garcia",
        contact: "09281234567",
        landline: "(032) 234-5678",
        customer_type: "Wholesale",
        freq_cat: "B",
        mcp_day: "Tuesday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM003",
        salesman_name: "Carlos Reyes",
        customer_code: "CUST003",
        customer_name: "Cebu General Store",
        address: "78 Colon St., Cebu City",
        contact_person: "Mark Villanueva",
        contact: "09391234567",
        landline: "(032) 345-6789",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Wednesday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM004",
        salesman_name: "Angela Cruz",
        customer_code: "CUST004",
        customer_name: "Metro Supplies",
        address: "21 Osmeña Blvd., Cebu City",
        contact_person: "John Tan",
        contact: "09481234567",
        landline: "(032) 456-7890",
        customer_type: "Wholesale",
        freq_cat: "C",
        mcp_day: "Thursday",
        mcp_schedule: "Monthly",
        price_code: "PRC003"
    },
    {
        salesman: "SM005",
        salesman_name: "Robert Garcia",
        customer_code: "CUST005",
        customer_name: "Sunrise Mart",
        address: "56 Lahug Rd., Cebu City",
        contact_person: "Lisa Flores",
        contact: "09591234567",
        landline: "(032) 567-8901",
        customer_type: "Retail",
        freq_cat: "B",
        mcp_day: "Friday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM001",
        salesman_name: "Juan Dela Cruz",
        customer_code: "CUST001",
        customer_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        contact_person: "Pedro Santos",
        contact: "09171234567",
        landline: "(032) 123-4567",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Monday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM002",
        salesman_name: "Maria Santos",
        customer_code: "CUST002",
        customer_name: "XYZ Enterprises",
        address: "45 Mango Ave., Cebu City",
        contact_person: "Ana Garcia",
        contact: "09281234567",
        landline: "(032) 234-5678",
        customer_type: "Wholesale",
        freq_cat: "B",
        mcp_day: "Tuesday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM003",
        salesman_name: "Carlos Reyes",
        customer_code: "CUST003",
        customer_name: "Cebu General Store",
        address: "78 Colon St., Cebu City",
        contact_person: "Mark Villanueva",
        contact: "09391234567",
        landline: "(032) 345-6789",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Wednesday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM004",
        salesman_name: "Angela Cruz",
        customer_code: "CUST004",
        customer_name: "Metro Supplies",
        address: "21 Osmeña Blvd., Cebu City",
        contact_person: "John Tan",
        contact: "09481234567",
        landline: "(032) 456-7890",
        customer_type: "Wholesale",
        freq_cat: "C",
        mcp_day: "Thursday",
        mcp_schedule: "Monthly",
        price_code: "PRC003"
    },
    {
        salesman: "SM005",
        salesman_name: "Robert Garcia",
        customer_code: "CUST005",
        customer_name: "Sunrise Mart",
        address: "56 Lahug Rd., Cebu City",
        contact_person: "Lisa Flores",
        contact: "09591234567",
        landline: "(032) 567-8901",
        customer_type: "Retail",
        freq_cat: "B",
        mcp_day: "Friday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM001",
        salesman_name: "Juan Dela Cruz",
        customer_code: "CUST001",
        customer_name: "ABC Trading",
        address: "123 Rizal St., Cebu City",
        contact_person: "Pedro Santos",
        contact: "09171234567",
        landline: "(032) 123-4567",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Monday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM002",
        salesman_name: "Maria Santos",
        customer_code: "CUST002",
        customer_name: "XYZ Enterprises",
        address: "45 Mango Ave., Cebu City",
        contact_person: "Ana Garcia",
        contact: "09281234567",
        landline: "(032) 234-5678",
        customer_type: "Wholesale",
        freq_cat: "B",
        mcp_day: "Tuesday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
    {
        salesman: "SM003",
        salesman_name: "Carlos Reyes",
        customer_code: "CUST003",
        customer_name: "Cebu General Store",
        address: "78 Colon St., Cebu City",
        contact_person: "Mark Villanueva",
        contact: "09391234567",
        landline: "(032) 345-6789",
        customer_type: "Retail",
        freq_cat: "A",
        mcp_day: "Wednesday",
        mcp_schedule: "Weekly",
        price_code: "PRC001"
    },
    {
        salesman: "SM004",
        salesman_name: "Angela Cruz",
        customer_code: "CUST004",
        customer_name: "Metro Supplies",
        address: "21 Osmeña Blvd., Cebu City",
        contact_person: "John Tan",
        contact: "09481234567",
        landline: "(032) 456-7890",
        customer_type: "Wholesale",
        freq_cat: "C",
        mcp_day: "Thursday",
        mcp_schedule: "Monthly",
        price_code: "PRC003"
    },
    {
        salesman: "SM005",
        salesman_name: "Robert Garcia",
        customer_code: "CUST005",
        customer_name: "Sunrise Mart",
        address: "56 Lahug Rd., Cebu City",
        contact_person: "Lisa Flores",
        contact: "09591234567",
        landline: "(032) 567-8901",
        customer_type: "Retail",
        freq_cat: "B",
        mcp_day: "Friday",
        mcp_schedule: "Bi-Weekly",
        price_code: "PRC002"
    },
];

TableLoader.tableData(
    "#customerMaintenance",
    CustomerMaintenanceSampleData,
    CustomerListColumns,
    {
        scrollY: "500px"
    }


);

$(document).ready(function () {
    DatePicker.init();
});
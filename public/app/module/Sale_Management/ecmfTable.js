import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";
import Api from "../../helper/Api.js";

let selectedEcmfId = null;

const EcmfColumns = [
    {
        title: "Status",
        data: "status",
        defaultContent: "---",
    },

    {
        title: "Salesperson",
        data: null,
        render: function (row) {
            return row.transaction_salesman?.salesman_name ?? "---";
        }
    },

    {
        title: "Customer Code",
        data: "customercode",
        defaultContent: "---",
    },

    {
        title: "Sold To Name",
        data: null,
        render: function (row) {
            return row.transaction_store?.store_name ?? "---";
        }
    },

    {
        title: "Contact Person",
        data: null,
        render: function (row) {
            return row.transaction_store?.contact_person ?? "---";
        }
    },

    {
        title: "Contact Number",
        data: null,
        render: function (row) {
            return row.transaction_store?.contact_no ?? "---";
        }
    },

    {
        title: "Email",
        data: null,
        render: function (row) {
            return row.transaction_store?.email_address ?? "---";
        }
    },

    {
        title: "Geo Area",
        data: null,
        render: function (row) {
            return row.transaction_store?.geo_area ?? "---";
        }
    },

    {
        title: "Chain",
        data: null,
        render: function (row) {
            return row.transaction_store?.chain ?? "---";
        }
    },

    {
        title: "Coverage Day",
        data: null,
        render: function (row) {
            return row.transaction_store?.coverage ?? "---";
        }
    },

    {
        title: "TIN",
        data: null,
        render: function (row) {
            return row.transaction_store?.tin ?? "---";
        }
    },

    {
        title: "Postal Code",
        data: null,
        render: function (row) {
            return row.transaction_store?.postal_code ?? "---";
        }
    },

    {
        title: "Municipality",
        data: null,
        render: function (row) {
            return row.transaction_store?.municipality ?? "---";
        }
    },

    {
        title: "Barangay",
        data: null,
        render: function (row) {
            return row.transaction_store?.barangay ?? "---";
        }
    },

    {
        title: "Longitude",
        data: null,
        render: function (row) {
            return row.transaction_store?.longitude ?? "---";
        }
    },

    {
        title: "Latitude",
        data: null,
        render: function (row) {
            return row.transaction_store?.latitude ?? "---";
        }
    },

    {
        title: "Other Info(Ship To)",
        data: null,
        render: function (row) {
            return row.transaction_store?.ship_to ?? "---";
        }
    },

    {
        title: "Other Info(Sold To)",
        data: null,
        render: function (row) {
            return row.transaction_store?.sold_to ?? "---";
        }
    },

    {
        title: "Customer Class",
        data: null,
        render: function (row) {
            return row.transaction_store?.customer_class ?? "---";
        }
    },

    {
        title: "Frequency",
        data: null,
        render: function (row) {
            return row.transaction_store?.frequency ?? "---";
        }
    },

    {
        title: "Request Date",
        data: null,
        render: function (row) {
            return row.transaction_store?.request_date ?? "---";
        }
    },

    {
        title: "Service Type",
        data: null,
        render: function (row) {
            return row.transaction_store?.service_type ?? "---";
        }
    },
];

// Static sample data for local testing / UI preview
const EcmfSampleData = [
    {
        status: "Approved",
        salesperson: "Juan Dela Cruz",
        customer_code: "CUST-00123",
        sold_to_name: "ABC Trading Corp.",
        contact_person: "Maria Santos",
        contact_number: "09171234567",
        email: "maria.santos@abctrading.com",
        geo_area: "North Luzon",
        chain: "Independent",
        coverage_day: "Monday",
        tin: "123-456-789-000",
        postal_code: "2000",
        municipality: "San Fernando",
        barangay: "Barangay Poblacion",
        longitude: "120.6875",
        latitude: "15.0300",
        other_info_ship: "Near Public Market",
        other_info_sold: "Main Office Branch",
        customer_class: "A",
        frequency: "Weekly",
        request_date: "2026-07-15",
        service_type: "Delivery",
    },
    {
        status: "Pending",
        salesperson: "Ana Reyes",
        customer_code: "CUST-00456",
        sold_to_name: "XYZ Mini Mart",
        contact_person: "Pedro Ramos",
        contact_number: "09189876543",
        email: "pedro.ramos@xyzminimart.com",
        geo_area: "Metro Manila",
        chain: "Mini Mart Chain",
        coverage_day: "Wednesday",
        tin: "987-654-321-000",
        postal_code: "1100",
        municipality: "Quezon City",
        barangay: "Barangay Commonwealth",
        longitude: "121.0850",
        latitude: "14.6970",
        other_info_ship: "Beside Gas Station",
        other_info_sold: "",
        customer_class: "B",
        frequency: "Bi-Weekly",
        request_date: "2026-07-20",
        service_type: "Pick-up",
    },
    {
        status: "Rejected",
        salesperson: "Mark Villanueva",
        customer_code: "CUST-00789",
        sold_to_name: "Golden Harvest Store",
        contact_person: "Liza Fernandez",
        contact_number: "09201122334",
        email: "liza.fernandez@goldenharvest.com",
        geo_area: "South Luzon",
        chain: "Independent",
        coverage_day: "Friday",
        tin: "456-789-123-000",
        postal_code: "4000",
        municipality: "Calamba",
        barangay: "Barangay Real",
        longitude: "121.1653",
        latitude: "14.2117",
        other_info_ship: "Corner Unit",
        other_info_sold: "Warehouse 2",
        customer_class: "C",
        frequency: "Monthly",
        request_date: "2026-07-10",
        service_type: "Delivery",
    },
    {
        status: "Approved",
        salesperson: "Grace Tan",
        customer_code: "CUST-01011",
        sold_to_name: "Sunrise Grocery",
        contact_person: "Carlos Mendoza",
        contact_number: "09151239876",
        email: "carlos.mendoza@sunrisegrocery.com",
        geo_area: "Visayas",
        chain: "Grocery Chain",
        coverage_day: "Tuesday",
        tin: "321-654-987-000",
        postal_code: "6000",
        municipality: "Cebu City",
        barangay: "Barangay Lahug",
        longitude: "123.8854",
        latitude: "10.3157",
        other_info_ship: "2nd Floor Unit",
        other_info_sold: "Head Office",
        customer_class: "A",
        frequency: "Weekly",
        request_date: "2026-07-18",
        service_type: "Delivery",
    },
    {
        status: "Pending",
        salesperson: "Ryan Gutierrez",
        customer_code: "CUST-01312",
        sold_to_name: "Family Convenience Store",
        contact_person: "Nena Ocampo",
        contact_number: "09261239900",
        email: "nena.ocampo@familyconv.com",
        geo_area: "Mindanao",
        chain: "Convenience Chain",
        coverage_day: "Thursday",
        tin: "654-321-789-000",
        postal_code: "9000",
        municipality: "Cagayan de Oro",
        barangay: "Barangay Carmen",
        longitude: "124.6319",
        latitude: "8.4822",
        other_info_ship: "",
        other_info_sold: "Main Store",
        customer_class: "B",
        frequency: "Weekly",
        request_date: "2026-07-22",
        service_type: "Pick-up",
    },
     {
        status: "Approved",
        salesperson: "Grace Tan",
        customer_code: "CUST-01011",
        sold_to_name: "Sunrise Grocery",
        contact_person: "Carlos Mendoza",
        contact_number: "09151239876",
        email: "carlos.mendoza@sunrisegrocery.com",
        geo_area: "Visayas",
        chain: "Grocery Chain",
        coverage_day: "Tuesday",
        tin: "321-654-987-000",
        postal_code: "6000",
        municipality: "Cebu City",
        barangay: "Barangay Lahug",
        longitude: "123.8854",
        latitude: "10.3157",
        other_info_ship: "2nd Floor Unit",
        other_info_sold: "Head Office",
        customer_class: "A",
        frequency: "Weekly",
        request_date: "2026-07-18",
        service_type: "Delivery",
    },
    {
        status: "Pending",
        salesperson: "Ryan Gutierrez",
        customer_code: "CUST-01312",
        sold_to_name: "Family Convenience Store",
        contact_person: "Nena Ocampo",
        contact_number: "09261239900",
        email: "nena.ocampo@familyconv.com",
        geo_area: "Mindanao",
        chain: "Convenience Chain",
        coverage_day: "Thursday",
        tin: "654-321-789-000",
        postal_code: "9000",
        municipality: "Cagayan de Oro",
        barangay: "Barangay Carmen",
        longitude: "124.6319",
        latitude: "8.4822",
        other_info_ship: "",
        other_info_sold: "Main Store",
        customer_class: "B",
        frequency: "Weekly",
        request_date: "2026-07-22",
        service_type: "Pick-up",
    },
     {
        status: "Approved",
        salesperson: "Grace Tan",
        customer_code: "CUST-01011",
        sold_to_name: "Sunrise Grocery",
        contact_person: "Carlos Mendoza",
        contact_number: "09151239876",
        email: "carlos.mendoza@sunrisegrocery.com",
        geo_area: "Visayas",
        chain: "Grocery Chain",
        coverage_day: "Tuesday",
        tin: "321-654-987-000",
        postal_code: "6000",
        municipality: "Cebu City",
        barangay: "Barangay Lahug",
        longitude: "123.8854",
        latitude: "10.3157",
        other_info_ship: "2nd Floor Unit",
        other_info_sold: "Head Office",
        customer_class: "A",
        frequency: "Weekly",
        request_date: "2026-07-18",
        service_type: "Delivery",
    },
    {
        status: "Pending",
        salesperson: "Ryan Gutierrez",
        customer_code: "CUST-01312",
        sold_to_name: "Family Convenience Store",
        contact_person: "Nena Ocampo",
        contact_number: "09261239900",
        email: "nena.ocampo@familyconv.com",
        geo_area: "Mindanao",
        chain: "Convenience Chain",
        coverage_day: "Thursday",
        tin: "654-321-789-000",
        postal_code: "9000",
        municipality: "Cagayan de Oro",
        barangay: "Barangay Carmen",
        longitude: "124.6319",
        latitude: "8.4822",
        other_info_ship: "",
        other_info_sold: "Main Store",
        customer_class: "B",
        frequency: "Weekly",
        request_date: "2026-07-22",
        service_type: "Pick-up",
    },
     {
        status: "Approved",
        salesperson: "Grace Tan",
        customer_code: "CUST-01011",
        sold_to_name: "Sunrise Grocery",
        contact_person: "Carlos Mendoza",
        contact_number: "09151239876",
        email: "carlos.mendoza@sunrisegrocery.com",
        geo_area: "Visayas",
        chain: "Grocery Chain",
        coverage_day: "Tuesday",
        tin: "321-654-987-000",
        postal_code: "6000",
        municipality: "Cebu City",
        barangay: "Barangay Lahug",
        longitude: "123.8854",
        latitude: "10.3157",
        other_info_ship: "2nd Floor Unit",
        other_info_sold: "Head Office",
        customer_class: "A",
        frequency: "Weekly",
        request_date: "2026-07-18",
        service_type: "Delivery",
    },
    {
        status: "Pending",
        salesperson: "Ryan Gutierrez",
        customer_code: "CUST-01312",
        sold_to_name: "Family Convenience Store",
        contact_person: "Nena Ocampo",
        contact_number: "09261239900",
        email: "nena.ocampo@familyconv.com",
        geo_area: "Mindanao",
        chain: "Convenience Chain",
        coverage_day: "Thursday",
        tin: "654-321-789-000",
        postal_code: "9000",
        municipality: "Cagayan de Oro",
        barangay: "Barangay Carmen",
        longitude: "124.6319",
        latitude: "8.4822",
        other_info_ship: "",
        other_info_sold: "Main Store",
        customer_class: "B",
        frequency: "Weekly",
        request_date: "2026-07-22",
        service_type: "Pick-up",
    },
     {
        status: "Approved",
        salesperson: "Grace Tan",
        customer_code: "CUST-01011",
        sold_to_name: "Sunrise Grocery",
        contact_person: "Carlos Mendoza",
        contact_number: "09151239876",
        email: "carlos.mendoza@sunrisegrocery.com",
        geo_area: "Visayas",
        chain: "Grocery Chain",
        coverage_day: "Tuesday",
        tin: "321-654-987-000",
        postal_code: "6000",
        municipality: "Cebu City",
        barangay: "Barangay Lahug",
        longitude: "123.8854",
        latitude: "10.3157",
        other_info_ship: "2nd Floor Unit",
        other_info_sold: "Head Office",
        customer_class: "A",
        frequency: "Weekly",
        request_date: "2026-07-18",
        service_type: "Delivery",
    },
    {
        status: "Pending",
        salesperson: "Ryan Gutierrez",
        customer_code: "CUST-01312",
        sold_to_name: "Family Convenience Store",
        contact_person: "Nena Ocampo",
        contact_number: "09261239900",
        email: "nena.ocampo@familyconv.com",
        geo_area: "Mindanao",
        chain: "Convenience Chain",
        coverage_day: "Thursday",
        tin: "654-321-789-000",
        postal_code: "9000",
        municipality: "Cagayan de Oro",
        barangay: "Barangay Carmen",
        longitude: "124.6319",
        latitude: "8.4822",
        other_info_ship: "",
        other_info_sold: "Main Store",
        customer_class: "B",
        frequency: "Weekly",
        request_date: "2026-07-22",
        service_type: "Pick-up",
    },
     {
        status: "Approved",
        salesperson: "Grace Tan",
        customer_code: "CUST-01011",
        sold_to_name: "Sunrise Grocery",
        contact_person: "Carlos Mendoza",
        contact_number: "09151239876",
        email: "carlos.mendoza@sunrisegrocery.com",
        geo_area: "Visayas",
        chain: "Grocery Chain",
        coverage_day: "Tuesday",
        tin: "321-654-987-000",
        postal_code: "6000",
        municipality: "Cebu City",
        barangay: "Barangay Lahug",
        longitude: "123.8854",
        latitude: "10.3157",
        other_info_ship: "2nd Floor Unit",
        other_info_sold: "Head Office",
        customer_class: "A",
        frequency: "Weekly",
        request_date: "2026-07-18",
        service_type: "Delivery",
    },
    {
        status: "Pending",
        salesperson: "Ryan Gutierrez",
        customer_code: "CUST-01312",
        sold_to_name: "Family Convenience Store",
        contact_person: "Nena Ocampo",
        contact_number: "09261239900",
        email: "nena.ocampo@familyconv.com",
        geo_area: "Mindanao",
        chain: "Convenience Chain",
        coverage_day: "Thursday",
        tin: "654-321-789-000",
        postal_code: "9000",
        municipality: "Cagayan de Oro",
        barangay: "Barangay Carmen",
        longitude: "124.6319",
        latitude: "8.4822",
        other_info_ship: "",
        other_info_sold: "Main Store",
        customer_class: "B",
        frequency: "Weekly",
        request_date: "2026-07-22",
        service_type: "Pick-up",
    },
     {
        status: "Approved",
        salesperson: "Grace Tan",
        customer_code: "CUST-01011",
        sold_to_name: "Sunrise Grocery",
        contact_person: "Carlos Mendoza",
        contact_number: "09151239876",
        email: "carlos.mendoza@sunrisegrocery.com",
        geo_area: "Visayas",
        chain: "Grocery Chain",
        coverage_day: "Tuesday",
        tin: "321-654-987-000",
        postal_code: "6000",
        municipality: "Cebu City",
        barangay: "Barangay Lahug",
        longitude: "123.8854",
        latitude: "10.3157",
        other_info_ship: "2nd Floor Unit",
        other_info_sold: "Head Office",
        customer_class: "A",
        frequency: "Weekly",
        request_date: "2026-07-18",
        service_type: "Delivery",
    },
    {
        status: "Pending",
        salesperson: "Ryan Gutierrez",
        customer_code: "CUST-01312",
        sold_to_name: "Family Convenience Store",
        contact_person: "Nena Ocampo",
        contact_number: "09261239900",
        email: "nena.ocampo@familyconv.com",
        geo_area: "Mindanao",
        chain: "Convenience Chain",
        coverage_day: "Thursday",
        tin: "654-321-789-000",
        postal_code: "9000",
        municipality: "Cagayan de Oro",
        barangay: "Barangay Carmen",
        longitude: "124.6319",
        latitude: "8.4822",
        other_info_ship: "",
        other_info_sold: "Main Store",
        customer_class: "B",
        frequency: "Weekly",
        request_date: "2026-07-22",
        service_type: "Pick-up",
    },
];

const EcmfTradeChannel = [
    {
        title: "CONVENIENCE STORE",
        data: "convenience_store"
    },
    {
        title: "DEALER 1",
        data: "dealer_1"
    },
    {
        title: "DEALER 2",
        data: "dealer_2"
    },
    {
        title: "DEALER 3",
        data: "dealer_3"
    },
    {
        title: "GROCERY",
        data: "grocery"
    },
    {
        title: "SARI-SARI STORE",
        data: "sara_sar-_store"
    },
    {
        title: "SUPERMARKET A",
        data: "supermarket_a"
    },
    {
        title: "SUPERMARKET B",
        data: "supermarket_b"
    },
    {
        title: "SUPERMARKET C",
        data: "supermarket_c"
    },
    {
        title: "CORPORATE ACCOUNT",
        data: "corporate_account"
    },
    {
        title: "KA-REPUBLIKA SELLER",
        data: "republika_seller"
    },
    {
        title: "OTHERS",
        data: "other"
    },
    {
        title: "DRUGSTORE",
        data: "drugstore"
    },
    {
        title: "NO PHYSICAL STORE",
        data: "no_physical_store"
    },
    {
        title: "E-COMMERCE",
        data: "e_commerce"
    },
    {
        title: "RESELLER",
        data: "reseller"
    },
    {
        title: "FOOD SERVICE",
        data: "food_service"
    },
    
]

const GroupItems = [
    {
        title: "No Group",
        data: "nogroup"
    }
]
function loadTable(){
    TableLoader.loadTable({
        url:"transaction/getStoreTransaction",
        tableId: "#EcmfTable",
        columns: EcmfColumns,
        
    });
}

loadTable();

ComponentHelper.select().loadByApi({
    url: "/salesmen",
    selectID: "select_items",
    noDataText: "No salesman Found"
});

ComponentHelper.select().LoadSelectItems({
    id: "ecmfModal_TradeChannel",
    items: EcmfTradeChannel
})

ComponentHelper.select().LoadSelectItems({
    id: "ecmfModal_CustomerGroup",
    items: GroupItems

})

$(document).ready(function () {
    DatePicker.init();
});

$(document)
    .off("click.EcmfTableRow", "#EcmfTable tbody tr")
    .on("click.EcmfTableRow", "#EcmfTable tbody tr", function () {
        // salesman.js loads the data asynchronously; ensure DataTable is ready
        if (!$.fn.DataTable.isDataTable("#EcmfTable")) return;

        const EcmfTable = $("#EcmfTable").DataTable();
        const rowData = EcmfTable.row(this).data();

        if (!rowData) return;

        console.log("Clicked row:", rowData);

        DisplayEcmfInfo(rowData);
    });

function DisplayEcmfInfo(rowData) {
    console.log("fvcd",rowData);
    const transaction = rowData.transaction_salesman;
    const store = rowData.transaction_store;
    selectedEcmfId = store?.store_id ?? null;

    // Header
    $("#ecmfModal_Id").text(rowData.customer_code ?? "---");
    $("#ecmfModal_RequestedOn").text(rowData.request_date ?? "---");
    setEcmfStatusBadge(rowData.status);

    // General Information
    $("#ecmfModal_SoldToName").val(store.store_name ?? "");
    $("#ecmfModal_CustomerCode").val(transaction.customercode ?? "---");
    $("#ecmfModal_SalesPerson").val(store.salesperson ?? "");
    $("#ecmfModal_GeoArea").val(rowData.geo_area ?? "");
    $("#ecmfModal_Chain").val(rowData.chain ?? "");
    $("#ecmfModal_CustomerClass").val(rowData.customer_class ?? "");
    $("#ecmfModal_Frequency").val(rowData.frequency ?? "");
    $("#ecmfModal_CoverageDay").val(store.coverage ?? "");
    $("#ecmfModal_ServiceType").val(rowData.service_type ?? "");

    // Contact Details
    $("#ecmfModal_ContactPerson").val(store.contact_person ?? "");
    $("#ecmfModal_ContactNumber").val(store.contact_no ?? "");
    $("#ecmfModal_EmailAddress").val(store.email_address ?? "");

    // Location & Address
    selectOptionByText("#ecmfModal_Province", store.province);
    selectOptionByText("#ecmfModal_Municipality", store.municipality);
    selectOptionByText("#ecmfModal_Barangay", store.barangay);;
    $("#ecmfModal_PostalCode").val(store.postal_code ?? "");
    $("#ecmfModal_Tin").val(rowData.tin ?? "");
    $("#ecmfModal_Longitude").val(rowData.longitude ?? "");
    $("#ecmfModal_Latitude").val(rowData.latitude ?? "");
    $("#ecmfModal_OtherInfoSold").val(rowData.other_info_sold ?? "");
    $("#ecmfModal_OtherInfoShip").val(rowData.other_info_ship ?? "");

    $("#EcmfModal")[0].showModal();
}

function setEcmfStatusBadge(status) {
    const $badge = $("#ecmfModal_StatusBadge");
    $badge.text((status ?? "").toUpperCase());

    // reset classes first
    $badge.removeClass("bg-green-100 text-green-700 bg-yellow-100 text-yellow-700 bg-red-100 text-red-700");

    switch ((status ?? "").toLowerCase()) {
        case "approved":
            $badge.addClass("bg-green-100 text-green-700");
            break;
        case "pending":
            $badge.addClass("bg-yellow-100 text-yellow-700");
            break;
        case "rejected":
        case "denied":
            $badge.addClass("bg-red-100 text-red-700");
            break;
        default:
            $badge.addClass("bg-gray-100 text-gray-700");
    }
}

function selectOptionByText(selector, value) {
    $(selector + " option").filter(function () {
        return $(this).text().trim().toLowerCase() ===
               String(value ?? "").trim().toLowerCase();
    }).prop("selected", true);
}

// --- Address Cascade: Province -> Municipality -> Barangay ---

function loadProvinces() {
    fetch('https://psgc.gitlab.io/api/provinces/')
        .then(res => res.json())
        .then(provinces => {
            const $province = $('#ecmfModal_Province');
            $province.empty().append('<option value="" disabled selected>Choose here</option>');

            provinces
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(p => {
                    $province.append(`<option value="${p.code}">${p.name}</option>`);
                });
        })
        .catch(err => console.error('Failed to load provinces:', err));
}

function loadMunicipalities(provinceCode) {
    const $municipality = $('#ecmfModal_Municipality');
    $municipality.empty().append('<option value="" disabled selected>Choose here</option>');
    $('#ecmfModal_Barangay').empty().append('<option value="" disabled selected>Choose here</option>');

    if (!provinceCode) return;

    fetch(`https://psgc.gitlab.io/api/provinces/${provinceCode}/cities-municipalities/`)
        .then(res => res.json())
        .then(list => {
            list
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(m => {
                    $municipality.append(`<option value="${m.code}">${m.name}</option>`);
                });
        })
        .catch(err => console.error('Failed to load municipalities:', err));
}

function loadBarangays(municipalityCode) {
    const $barangay = $('#ecmfModal_Barangay');
    $barangay.empty().append('<option value="" disabled selected>Choose here</option>');

    if (!municipalityCode) return;

    fetch(`https://psgc.gitlab.io/api/cities-municipalities/${municipalityCode}/barangays/`)
        .then(res => res.json())
        .then(list => {
            list
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(b => {
                    $barangay.append(`<option value="${b.code}">${b.name}</option>`);
                });
        })
        .catch(err => console.error('Failed to load barangays:', err));
}

$(document)
    .off('change.ecmfProvince', '#ecmfModal_Province')
    .on('change.ecmfProvince', '#ecmfModal_Province', function () {
        loadMunicipalities($(this).val());
    });

$(document)
    .off('change.ecmfMunicipality', '#ecmfModal_Municipality')
    .on('change.ecmfMunicipality', '#ecmfModal_Municipality', function () {
        loadBarangays($(this).val());
    });

$(document)
    .off('input.ecmfPostalCode', '#ecmfModal_PostalCode')
    .on('input.ecmfPostalCode', '#ecmfModal_PostalCode', function () {
        this.value = this.value.replace(/\D/g, '').slice(0, 4);
    });

loadProvinces();

$("#updateBtn").on("click", function () {
    if (!selectedEcmfId) {
        console.log("No record selected — cannot update.");
        return;
    }

    const payload = {
        id: selectedEcmfId,

        store_name:      $("#ecmfModal_SoldToName").val(),
        customer_code:   $("#ecmfModal_CustomerCode").val(),
        trade_channel:   $("#ecmfModal_TradeChannel").val(),
        customer_group:  $("#ecmfModal_CustomerGroup").val(),
        contact_person:  $("#ecmfModal_ContactPerson").val(),
        contact_no:      $("#ecmfModal_ContactNumber").val(),
        email_address:   $("#ecmfModal_EmailAddress").val(),
        province:        $("#ecmfModal_Province option:selected").text(),
        municipality:    $("#ecmfModal_Municipality option:selected").text(),
        barangay:        $("#ecmfModal_Barangay option:selected").text(),
        postal_code:     $("#ecmfModal_PostalCode").val(),
        tin:              $("#ecmfModal_Tin").val(),
        longitude:       $("#ecmfModal_Longitude").val(),
        latitude:        $("#ecmfModal_Latitude").val(),
        other_info_ship: $("#ecmfModal_OtherInfoShip").val(),
        other_info_sold: $("#ecmfModal_OtherInfoSold").val(),
        customer_class:  $("#ecmfModal_CustomerClass").val(),
        frequency:       $("#ecmfModal_Frequency").val(),
        coverage:        $("#ecmfModal_CoverageDay").val(),
        service_type:    $("#ecmfModal_ServiceType").val(),
        geo_area:        $("#ecmfModal_GeoArea").val(),
        chain:           $("#ecmfModal_Chain").val(),
    };

    console.log("Submitting update:", payload);

    Api.post({
        url: "store/updateEcmftable",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: payload,
        onSuccess: (response) => {
            console.log("Update successful:", response);
            $("#EcmfModal")[0].close();
            loadTable(); // refresh the table so the row reflects the update
        },
        onError: (error) => {
            console.log("Update failed:", error);
        },
    });
});
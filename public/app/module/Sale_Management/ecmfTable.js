// import TableLoader from "../../helper/TableLoader.js";
// import ComponentHelper from "../../helper/ComponentHelper.js";

// const EcmfColumns = [
//     {
//         title: "Status",
//         data: "status",
//     },
//     {
//         title: "Salesperson",
//         data: "salesperson",
//     },
//     {
//         title: "Customer Code",
//         data: "customer_code",
//     },
//     {
//         title: "Sold To Name",
//         data: "sold_to_name",
//     },
//     {
//         title: "Contact Person",
//         data: "contact_person",
//     },
//     {
//         title: "Contact Number",
//         data: "contact_number",
//     },
//     {
//         title: "Email",
//         data: "email",
//     },
//     {
//         title: "Geo Area",
//         data: "geo_area",
//     },
//     {
//         title: "Chain",
//         data: "chain",
//     },
//     {
//         title: "Coverage Day",
//         data: "coverage_day",
//     },
//     {
//         title: "TIN",
//         data: "tin",
//     },
//     {
//         title: "Postal Code",
//         data: "postal_code",
//     },
//     {
//         title: "Municipality",
//         data: "municipality",
//     },
//     {
//         title: "Barangay",
//         data: "barangay",
//     },
//     {
//         title: "Longitude",
//         data: "longitude",
//     },
//     {
//         title: "Latitude",
//         data: "latitude",
//     },
//     {
//         title: "Other Info(Ship To)",
//         data: "other_info_ship",
//     },
//     {
//         title: "Other Info(Sold To)",
//         data: "other_info_sold",
//     },
//     {
//         title: "Customer Class",
//         data: "customer_class",
//     },
//     {
//         title: "Frequency",
//         data: "frequency",
//     },
//     {
//         title: "Request Date",
//         data: "request_date",
//     },
//     {
//         title: "Service Type",
//         data: "service_type",
//     },
// ];

// TableLoader.tableData(
//     "#EcmfTable",
//     [],
//     EcmfColumns,
// );

// ComponentHelper.select().loadByApi({
//     url: "/salesmen",
//     selectID: "select_items",
//     noDataText: "No salesman Found"
// });


import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const EcmfColumns = [
    {
        title: "Status",
        data: "status",
    },
    {
        title: "Salesperson",
        data: "salesperson",
    },
    {
        title: "Customer Code",
        data: "customer_code",
    },
    {
        title: "Sold To Name",
        data: "sold_to_name",
    },
    {
        title: "Contact Person",
        data: "contact_person",
    },
    {
        title: "Contact Number",
        data: "contact_number",
    },
    {
        title: "Email",
        data: "email",
    },
    {
        title: "Geo Area",
        data: "geo_area",
    },
    {
        title: "Chain",
        data: "chain",
    },
    {
        title: "Coverage Day",
        data: "coverage_day",
    },
    {
        title: "TIN",
        data: "tin",
    },
    {
        title: "Postal Code",
        data: "postal_code",
    },
    {
        title: "Municipality",
        data: "municipality",
    },
    {
        title: "Barangay",
        data: "barangay",
    },
    {
        title: "Longitude",
        data: "longitude",
    },
    {
        title: "Latitude",
        data: "latitude",
    },
    {
        title: "Other Info(Ship To)",
        data: "other_info_ship",
    },
    {
        title: "Other Info(Sold To)",
        data: "other_info_sold",
    },
    {
        title: "Customer Class",
        data: "customer_class",
    },
    {
        title: "Frequency",
        data: "frequency",
    },
    {
        title: "Request Date",
        data: "request_date",
    },
    {
        title: "Service Type",
        data: "service_type",
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

TableLoader.tableData(
    "#EcmfTable",
    EcmfSampleData,
    EcmfColumns,
    {
        //pageLength: getPageLength(),

        scrollX: true,
    }
);

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
    // Header
    $("#ecmfModal_Id").text(rowData.customer_code ?? "---");
    $("#ecmfModal_RequestedOn").text(rowData.request_date ?? "---");
    setEcmfStatusBadge(rowData.status);

    // General Information
    $("#ecmfModal_SoldToName").val(rowData.sold_to_name ?? "");
    $("#ecmfModal_CustomerCode").val(rowData.customer_code ?? "---");
    $("#ecmfModal_SalesPerson").val(rowData.salesperson ?? "");
    $("#ecmfModal_GeoArea").val(rowData.geo_area ?? "");
    $("#ecmfModal_Chain").val(rowData.chain ?? "");
    $("#ecmfModal_CustomerClass").val(rowData.customer_class ?? "");
    $("#ecmfModal_Frequency").val(rowData.frequency ?? "");
    $("#ecmfModal_CoverageDay").val(rowData.coverage_day ?? "");
    $("#ecmfModal_ServiceType").val(rowData.service_type ?? "");

    // Contact Details
    $("#ecmfModal_ContactPerson").val(rowData.contact_person ?? "");
    $("#ecmfModal_ContactNumber").val(rowData.contact_number ?? "");
    $("#ecmfModal_Email").val(rowData.email ?? "");

    // Location & Address
    $("#ecmfModal_Municipality").val(rowData.municipality ?? "");
    $("#ecmfModal_Barangay").val(rowData.barangay ?? "");
    $("#ecmfModal_PostalCode").val(rowData.postal_code ?? "");
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
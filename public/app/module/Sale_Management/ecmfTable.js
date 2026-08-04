import TableLoader from "../../helper/TableLoader.js";
import ComponentHelper from "../../helper/ComponentHelper.js";

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

TableLoader.tableData(
    "#EcmfTable",
    [],
    EcmfColumns,
);

ComponentHelper.select().loadByApi({
    url: "/salesmen",
    selectID: "select_items",
    noDataText: "No salesman Found"
});

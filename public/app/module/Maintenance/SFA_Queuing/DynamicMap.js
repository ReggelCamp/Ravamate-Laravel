import TableLoader from "../../../helper/TableLoader.js";

const DynamicMapColumns = [
    {
        title: "Plate #",
        data: "plate_no",
        className: "wrap-column"
    },
    {
        title: "Loading Capacity",
        data: "loading_cap"
    },
    {
        title: "Action",
        data: "action"
    },
];

const dynamicMapSampleData = [
    {
        plate_no: " (DRPB1) DRPB1_DRBP1 - CHRISTOPHER TRASPORTE ",
        loading_cap: "10,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('NGP-1234')">View</button>`
    },
    {
        plate_no: " (DRPB1) DRPB1_DRBP1 - CHRISTOPHER TRASPORTE ",
        loading_cap: "7,500 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('ABC-5678')">View</button>`
    },
    {
        plate_no: " (DRPB1) DRPB1_DRBP1 - CHRISTOPHER TRASPORTE ",
        loading_cap: "15,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('XYZ-9012')">View</button>`
    },
    {
        plate_no: " (DRPB1) DRPB1_DRBP1 - CHRISTOPHER TRASPORTE ",
        loading_cap: "5,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('GVA-3456')">View</button>`
    },
    {
        plate_no: " (DRPB1) DRPB1_DRBP1 - CHRISTOPHER TRASPORTE ",
        loading_cap: "12,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('MDN-7890')">View</button>`
    },
    {
        plate_no: " (DRPB1) DRPB1_DRBP1 - CHRISTOPHER TRASPORTE ",
        loading_cap: "10,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('NGP-1234')">View</button>`
    },
    {
        plate_no: "ABC-5678",
        loading_cap: "7,500 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('ABC-5678')">View</button>`
    },
    {
        plate_no: "XYZ-9012",
        loading_cap: "15,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('XYZ-9012')">View</button>`
    },
    {
        plate_no: "GVA-3456",
        loading_cap: "5,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('GVA-3456')">View</button>`
    },
    {
        plate_no: "MDN-7890",
        loading_cap: "12,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('MDN-7890')">View</button>`
    },
    {
        plate_no: "NGP-1234",
        loading_cap: "10,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('NGP-1234')">View</button>`
    },
    {
        plate_no: "ABC-5678",
        loading_cap: "7,500 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('ABC-5678')">View</button>`
    },
    {
        plate_no: "XYZ-9012",
        loading_cap: "15,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('XYZ-9012')">View</button>`
    },
    {
        plate_no: "GVA-3456",
        loading_cap: "5,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('GVA-3456')">View</button>`
    },
    {
        plate_no: "MDN-7890",
        loading_cap: "12,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('MDN-7890')">View</button>`
    },
    {
        plate_no: "NGP-1234",
        loading_cap: "10,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('NGP-1234')">View</button>`
    },
    {
        plate_no: "ABC-5678",
        loading_cap: "7,500 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('ABC-5678')">View</button>`
    },
    {
        plate_no: "XYZ-9012",
        loading_cap: "15,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('XYZ-9012')">View</button>`
    },
    {
        plate_no: "GVA-3456",
        loading_cap: "5,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('GVA-3456')">View</button>`
    },
    {
        plate_no: "MDN-7890",
        loading_cap: "12,000 kg",
        action: `<button type="button" class="btn btn-xs rounded-full sheenFilterBtn" onclick="viewRoute('MDN-7890')">View</button>`
    },
];

TableLoader.tableData(
    "#dynamicMapDt",
    dynamicMapSampleData,
    DynamicMapColumns,
    {
        scrollY:"300px",
        searchInput: "#dynamicMapSearch",
        pageLength: 5
    }
);
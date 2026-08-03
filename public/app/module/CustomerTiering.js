import TableLoader from "../helper/TableLoader.js";

const CustomerTieringColumns = [
    {
        title: "Type",
        data: "type"
    },
    {
        title: "description",
        data: "description"
    },
    {
        title: "Tiering",
        data: "tiering"
    },
    {
        title: "Last Updated",
        data: "last_updated"
    },
]

TableLoader.tableData(
    "#CustomerTieringDataTable",
    [],
    CustomerTieringColumns,
);
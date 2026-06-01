import Api from "../helper/Api.js";
import MyDataTables from "./dataTable.js";

function getAllSalesman() {

    Api.get({
        url: "/getSalesman",

        onSuccess: (data) => {
            
            MyDataTables.tableData(
                '#salesmanTable',
                data,[
                    {
                        title:'Salesman Name',
                        data:'salesman_name'
                    },
                    {
                        title:'Attendance',
                        data:'attendance'
                    },
                    {
                        title:'Target MCP',
                        data:'target_mcp'
                    },
                    {
                        title:'Productive',
                        data:'productive'
                    },
                    {
                        title:'Productive',
                        data:'productive'
                    },
                    {
                        title:'UnProductive',
                        data:'unproductive'
                    },
                    {
                        title:'Strike Rate',
                        data:'strike_rate'
                    },
                    {
                        title:'Selling Hours',
                        data:'selling_hrs'
                    },
                    {
                        title:'Sale',
                        data:'sale'
                    }
                ]
            );
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    getAllSalesman();
})


// Custom Search
document.getElementById('customSearch')
.addEventListener('input', function () {

    $('#salesmanTable')
        .DataTable()
        .search(this.value)
        .draw();
});
 

//for copy
$(document).on("click",".copytBtn", function(){
    $('#salesmanTable')
    .DataTable()
    .button('.buttons-copy')
    .trigger();
});

//for dropdown excel
$(document).on("click",".excelBtn", function(){
    $('#salesmanTable')
    .DataTable()
    .button('.buttons-excel')
    .trigger();
});

$(document).on("click",".csvBtn", function(){
    $('#salesmanTable')
    .DataTable()
    .button('.buttons-csv')
    .trigger();
});


//for print
$(document).on("click",".printBtn", function(){
    $('#salesmanTable')
    .DataTable()
    .button('.buttons-print')
    .trigger();
});

$(document).on("keyup", "#customSearch", function() {
    let value = $(this).val().toLowerCase();

    $("#otherReports li").each(function() {
        $(this).toggle(
            $(this).text().toLowerCase().includes(value)
        );
    });

     $("#actions li").each(function() {
        $(this).toggle(
            $(this).text().toLowerCase().includes(value)
        );
    });
});
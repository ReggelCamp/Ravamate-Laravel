<style>
    /* center everything by default */
    #salesmanTable th,
    #salesmanTable td {
        text-align: center !important;
        vertical-align: middle;
        overflow-x: scroll;
    }

    /* first column (name) stays left */
    #salesmanTable th:first-child,
    #salesmanTable td:first-child {
        text-align: left !important;
    }

    /* #salesmanTable .dt-container {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    } */

    .dataTable-info{
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 2px;
    }

    .dt-paging {
        width: fit-content;
        display: flex;
        justify-content: flex-end;
    }
    
</style>

<div class="w-full h-full text-sm bodyFont ">
    <table id="salesmanTable" class="w-full bodyFont salesmanTable headerColor tableBg">

    </table>
</div>
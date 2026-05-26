export default class MyDataTables{
    static tableData(id,json,columns){
        $(id).DataTable({
            data:json,
                searching: true,
                ordering: false,
                lengthChange: false,
                responsive: true,

                dom: 'tip',

                buttons: [
                    {
                        extend: 'copy',
                        className: 'btn btn-sm btn-primary'
                    },
                    {
                        extend: 'csv',
                        className: 'btn btn-sm btn-secondary'
                    },
                    {
                        extend: 'excel',
                        text: 'Export Excel',
                        className: 'btn btn-sm btn-success'
                    },
                    {
                        extend: 'print',
                        className: 'btn btn-sm btn-info'
                    }
                ],
                columns
         });
    }
    
}


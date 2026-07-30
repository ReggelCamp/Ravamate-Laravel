export default class MyDataTables{
    static tableData(id, json, columns, options = {}){
        console.log(options);
        $(id).DataTable({
            data:json,
                searching: true,
                //ordering: true,
                lengthChange: false,
                responsive: true,
                data: json,
                columns: columns,
                // pageLength: pageLength,
                scrollX:true,
                
                dom: '<"top">rt<"dataTable-info"ip><"clear">',

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
                columns,
                ...options
         });
    }
    
}


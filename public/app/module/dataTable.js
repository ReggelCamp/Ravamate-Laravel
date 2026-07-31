// export default class MyDataTables{
//     static tableData(id, json, columns, options = {}){
//         $(id).DataTable({
//             data: json,
//             searching: true,
//             lengthChange: false,
//             responsive: true,
//             scrollX: true,
//             scrollY: '400px',      // fixed height -> body becomes scrollable, header stays put
//             scrollCollapse: true,  // shrinks scrollY if there aren't enough rows to fill it
//             dom: '<"top">rt<"dataTable-info"ip><"clear">',
//             buttons: [
//                 { extend: 'copy', className: 'btn btn-sm btn-primary' },
//                 { extend: 'csv', className: 'btn btn-sm btn-secondary' },
//                 { extend: 'excel', text: 'Export Excel', className: 'btn btn-sm btn-success' },
//                 { extend: 'print', className: 'btn btn-sm btn-info' }
//             ],
//             columns,
//             ...options
//         });
//     }
// }
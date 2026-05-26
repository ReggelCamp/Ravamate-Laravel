import Api from "../helper/Api.js";



function getAllSalesman(){
    Api.get({
        url:"/getSalesman",
        onSuccess:(data)=>{

            $("#table").html("");
            data.forEach(item => {
                 $("#tableBody").append(`
                    <tr>
                        <td>${item.salesman_name}</td>
                        <td>${item.attendance}</td>
                        <td>${item.target_mcp}</td>
                        <td>${item.productive}</td>
                        <td>${item.unproductive}</td>
                        <td>${item.strike_rate}</td>
                        <td>${item.selling_hrs}</td>
                        <td>${item.sale}</td>
                    </tr>
                `);
          });
            
            $('#salesmanTable').DataTable({
                searching: true,
                ordering: false,
                dom:'tip',
                lengthChange: false,
                responsive: true
            });
        }
    })
}

getAllSalesman();

document.getElementById('customSearch').addEventListener('input', function () {
    $('#salesmanTable').DataTable().search(this.value).draw();
});
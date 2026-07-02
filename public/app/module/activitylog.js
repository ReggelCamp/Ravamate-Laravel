import Api from "../helper/Api.js";

function getActivityLogs() {
    console.log("qqqqf");
    Api.get({
        url: "/activitylogs/data",

        onSuccess: (logs) => {

            console.log("aaaaf");
            const tbody = document.getElementById("activity-logs-body");

            tbody.innerHTML = "";

            logs.forEach(log => {

                tbody.innerHTML += `
                    <tr>
                        <td>${log.user?.admin_name ?? "-"}</td>
                        <td>${log.theme?.theme_name ?? "-"}</td>
                        <td>${log.action}</td>
                        <td>${log.description}</td>
                        <td>${new Date(log.created_at).toLocaleString()}</td>
                    </tr>
                `;
            });

        }
    });

}

getActivityLogs();
import Api from "../helper/Api.js";
import LogsTable from "./dataTable.js";

let $logs = [];
function getActivityLogs() {
    console.log("Fetching activity logs...");
    Api.get({
        url: "/activitylogs/data",

        onSuccess: (response) => {
            $logs = response.data ?? response;
            LogsTable.tableData(
                '#activityLogsTable',
                $logs,[
                    {
                        title:'Actor',
                        data:'User'
                    },
                    {
                        title:'Log ID',
                        data:'id'
                    },
                    {
                        title:'Action',
                        data:'action'
                    },
                    {
                        title: 'Description',
                        data: 'description',
                        render: function (data, type, row) {
                            const themeName = row.theme_name ?? row.theme?.theme_name ?? 'Unknown Theme';
                            return `${data} "${themeName}"`;
                        }
                    },
                    {
                        title:'Date Created',
                        data: 'created_at',
                        render: function (data, type, row) {
                            if (!data) return '';
                            const d = new Date(data);
                            return d.toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit'
                            });
                        }
                    },
                    {
                        title: 'View Changes',
                        data: null,
                        render: function (data, type, row) {
                            return `
                                <button
                                    class="descModal btn btn-sm"
                                    data-log-id="${row.id}">
                                    View Logs
                                </button>
                            `;
                        }
                    }
                ])



            //If the API returns { data: [...] }
            console.log($logs,"Fetched activity logs successfully.");
            const tbody = $("#activity-logs-body");

            if (!tbody) {
                console.error("activity-logs-body not found.");
                return;
            }
        },

        onError: (err) => {
            console.error(err);
        }
    });
}


$(document).ready(function () {
    getActivityLogs();
});


$(document).on("click", ".descModal", function () {
    console.log("Description clicked:");

    $("#DescModal")[0].showModal(); 
    const logId = $(this).data('log-id');
    const changes = getChanges(logId);
    console.log("Changes:", changes);

    if ($.fn.DataTable.isDataTable('#changesTable')) {
    $('#changesTable').DataTable().clear().destroy();
}
    //  $logs = response.data ?? response;
            LogsTable.tableData(
                '#changesTable',
                changes,[
                        {
                            title:'Theme Id',
                            data:'theme_id'
                        },
                        {
                            title:'Field',
                            data:'field'
                        },
                        {
                            title: 'Old Value',
                            data: 'old',
                            render: function(data) {
                                return data ? data : "-";
                            }
                        },
                        {
                            title:'Current Value',
                            data:'new',
                            render: function(data) {
                                return data ? data : "-";
                            }
                        },
                ]);
});

function getChanges(logId) {
    const changes = [];

    const allowedFields = [
        "theme_name",
        "company_name",
        "primary_color",
        "secondary_color",
        "accent_color",
        "background_color",
        "body_font",
        "header_font",
        "report_header"
    ];

    $logs.forEach(log => {

        if (log.id != logId) {
            return;
        }

        const theme_id = log.theme_id;

        const oldValues = JSON.parse(log.old_values || "{}");
        const newValues = JSON.parse(log.new_values || "{}");

        Object.keys(newValues).forEach(key => {

            // Skip fields that are not in the allowed list
            if (!allowedFields.includes(key)) {
                return;
            }

            // Only include changed values
            if (oldValues[key] !== newValues[key]) {
                changes.push({
                    theme_id: theme_id,
                    field: key,
                    old: oldValues[key],
                    new: newValues[key]
                });
            }
        });
            // console.log("xaxa",$logs[0].theme_id);

    });
    //console.log("xaxa",changes);
    return changes;
}
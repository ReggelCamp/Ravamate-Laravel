import Api from "../helper/Api.js";
import LogsTable from "./dataTable.js";

let $logs = [];

function getActivityLogs() {
    //console.log("Fetching activity logs...");
    Api.get({
        url: "/activitylogs/data",

        onSuccess: (response) => {
            $logs = response.data ?? response;
            console.log("daaas",$logs);
            
            LogsTable.tableData(
                '#activityLogsTable',
                $logs,[
                    {
                        title:'User',
                        data:'User'
                    },
                    {
                        title:'User Id',
                        data:'user_id',
                        // type: "string"
                        
                    },
                    {
                        title:'Log ID',
                        data:'id',
                        // type: "string"
                    },
                    {
                        title:'Action',
                        data:'action'
                    },
                    {
                        title: 'Description',
                        data: 'description',
                        render: function (data, type, row) {

                            if (row.action === "delete") {
                                return `The theme " ${row.theme_name}" has already been deleted.`;
                            }

                            return `${data}"${row.theme_name}"`;
                        }
                    },
                    {
                        title: 'Date Created',
                        //data: 'created_at',
                        data: null,
                        render: function (data) {
                           return moment(data.created_at).format("MMM DD, YYYY | hh : mm : ss : SS A");
                        }
                    },
                    {
                        title: 'View Changes',
                        data: null,
                        render: function (data, type, row) {
                            return `
                                <button
                                    class="descModal btn btn-sm "
                                    data-log-id="${row.id}">
                                    View Logs
                                </button>
                            `;
                        }
                    }
                ],
                { 
                    pageLength: 10,
                }
            )



            //If the API returns { data: [...] }
            //console.log($logs,"Fetched activity logs successfully.");
            const tbody = $("#activity-logs-body");

            if (!tbody) {
                console.error("activity-logs-body not found.");
                return;
            }
            //console.log($logs,"daa");
        },

        onError: (err) => {
            console.error(err);
        }
    });
    
}


$(document).ready(function () {
    getActivityLogs();

    window.addEventListener("storage", function (event) {
        if (event.key === "activityLogsUpdated") {
            console.log("Storage event fired!");
            getActivityLogs();
        }
    });
});


$(document).on("click", ".descModal", function () {
    console.log("Description clicked:",$logs);

    $("#DescModal")[0].showModal();
    const logId = $(this).data("log-id");
    const changes = getChanges(logId);
    console.log("Changes:", changes);

    const log = $logs.find(item => item.id == logId);

    if ($.fn.DataTable.isDataTable("#themeInfoTable")) {
        $("#themeInfoTable").DataTable().clear().destroy();
    }

    $("#themeInfoBody").html(`
        <tr>
            <th>Log ID</th>
            <td>${log.id}</td>
        </tr>
        <tr>
            <th>Theme</th>
            <td>${log.theme_name}</td>
        </tr>
        <tr>
            <th>Action</th>
            <td>${log.action}</td>
        </tr>
        <tr>
            <th>User</th>
            <td>${log.User}</td>
        </tr>
        <tr>
            <th>User ID</th>
            <td>${log.user_id}</td>
        </tr>
        <tr>
            <th>Date</th>
            <td>${moment(log.created_at).format("MMM DD, YYYY | hh : mm : ss : SS A")}</td>
        </tr>
    `);

    //  $logs = response.data ?? response;
    LogsTable.tableData("#changesTable", changes, [
        {
            title: "Theme Id",
            data: "theme_id",
        },
        {
            title: "Field",
            data: "field",
        },
        {
            title: "Old Value",
            data: "old",
            render: function (data, type, row) {
                if (!data) {
                    return "-";
                }

                // Carousel images
                if (row.field === "carousel_images" && Array.isArray(data)) {
                    return data
                        .map(
                            (image) => `
                            <div class ="w-[100px] h-[100px]  items-center justify-center flex flex-col">
                                <img src="${image.url}" class="max-w-[100px] max-h-[100px] rounded border ">
                            </div>
                            <span>Position: ${image.position}</span>    
                    `,
                        )
                        .join("");
                }

                // Logo image
                if (
                    row.field === "logo_img" &&
                    typeof data === "object" &&
                    data.url
                ) {
                    console.log(data, "pp");
                    return `
                        <img src="${data.url}" width="120" class="rounded border">
                    `;
                    console.log("Old logo:", data);
                    console.log("Old logo type:", typeof data);
                }

                return data;
            },
        },
        {
            title: "Current Value",
            data: "new",
            render: function (data, type, row) {
                if (!data) {
                    return "-";
                }

                // Carousel Images
                if (row.field === "carousel_images" && Array.isArray(data)) {
                    return data
                        .map(
                            (image) => `
                            <div class ="w-[100px] h-[100px]  items-center justify-center flex flex-col">
                                <img src="${image.url}" class="max-w-[100px] max-h-[100px] rounded border ">
                            </div>
                            <span>Position: ${image.position}</span>                         
                    `,
                        )
                        .join("");
                }

                // Logo Image (if stored as object)
                if (row.field === "logo_img" && typeof data === "object") {
                    console.log(data, "vav");
                    return `
                        <img src="${data.url}"
                            width="120"
                            class="rounded border">
                    `;
                    console.log("New logo:", data);
                    console.log("New logo type:", typeof data);
                }
                //console.log("aaa",data);
                return data;
            },
        },
    ]);
});

function getChanges(logId) {
    const changes = [];

    const allowedFields = [
        "theme_name",
        "company_name",
        "theme_status",
        "primary_color",
        "secondary_color",
        "accent_color",
        "background_color",
        "body_font",
        "header_font",
        "report_header",
        "carousel_images",
        "logo_img",
    ];

    $logs.forEach(log => {

        if (log.id != logId) {
            return;
        }

        const theme_id = log.theme_id;

        const oldValues = JSON.parse(log.old_values || "{}");
        const newValues = JSON.parse(log.new_values || "{}");

        Object.keys(newValues).forEach(key => {
            const themeId = newValues.id;

            // Skip fields that are not in the allowed list
            if (!allowedFields.includes(key)) {
                return;
            }

            const oldValue =
                typeof oldValues[key] === "object"
                    ? JSON.stringify(oldValues[key])
                    : oldValues[key];

            const newValue =
                typeof newValues[key] === "object"
                    ? JSON.stringify(newValues[key])
                    : newValues[key];

            if (oldValue !== newValue) {
                changes.push({
                    theme_id: themeId,
                    field: key,
                    old: oldValues[key],
                    new: newValues[key]
                });
            }
        });
            //console.log("xaxa",log);
            //console.log(newValues.carousel_images);
            //console.log(typeof newValues.carousel_images);
    });
    //console.log("xaxa",changes);
    return changes;
}

$(document).on('input', '.searchBar', function(){
      if ($.fn.DataTable.isDataTable("#activityLogsTable")) {
        $("#activityLogsTable")
            .DataTable()
            .search(this.value)
            .draw();
    }
});


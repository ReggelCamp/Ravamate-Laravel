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
                        data:'user_id'
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

                            if (row.action === "delete") {
                                return `The theme " ${row.theme_name}" has already been deleted.`;
                            }

                            return `${data}"${row.theme_name}"`;
                        }
                    },
                    {
                        title: 'Date Created',
                        data: 'created_at',
                        render: function (data) {
                            if (!data) return '';

                            const d = new Date(data);

                            const date = d.toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: true
                            });

                            const ms = String(d.getMilliseconds()).padStart(3, '0');

                            return `${date}.${ms}`;
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
                    pageLength: 10
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
});;


$(document).on("click", ".descModal", function () {
    //console.log("Description clicked:");

    $("#DescModal")[0].showModal();
    const logId = $(this).data("log-id");
    const changes = getChanges(logId);
    console.log("Changes:", changes);

    if ($.fn.DataTable.isDataTable("#changesTable")) {
        $("#changesTable").DataTable().clear().destroy();
    }
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
        // {
        //     title: "Old Value",
        //     data: "old",
        //     render: function (data) {
        //         return data ? data : "-";
        //     },
        // },
        {
            title: "Old Value",
            data: "old",
            render: function (data, type, row) {

                if (!data) {
                    return "-";
                }

                // Carousel images
                if (row.field === "carousel_images" && Array.isArray(data)) {
                    return data.map(image => `
                            <div class ="w-[100px] h-[100px]  items-center justify-center flex flex-col">
                                <img src="${image.url}" class="max-w-[100px] max-h-[100px] rounded border ">
                            </div>
                            <span>Position: ${image.position}</span>    
                    `).join("");

                }

                // Logo image
                if (row.field === "logo_img" && typeof data === "object" && data.url) {
                    console.log(data,"pp");
                    return `
                        <img src="${data.url}" width="120" class="rounded border">
                    `;
                    console.log("Old logo:", data);
                    console.log("Old logo type:", typeof data);
                }

                return data;
            }
        },
        // {
        //     title: "Current Value",
        //     data: "new",
        //     render: function (data) {
        //         return data ? data : "-";
        //     },
        // },
        {
            title: "Current Value",
            data: "new",
            render: function (data, type, row) {

                if (!data) {
                    return "-";
                }

                // Carousel Images
                if (row.field === "carousel_images" && Array.isArray(data)) {
                    return data.map(image => `
                            <div class ="w-[100px] h-[100px]  items-center justify-center flex flex-col">
                                <img src="${image.url}" class="max-w-[100px] max-h-[100px] rounded border ">
                            </div>
                            <span>Position: ${image.position}</span>                         
                    `).join("");
                }

                // Logo Image (if stored as object)
                if (row.field === "logo_img" && typeof data === "object") {
                    console.log(data,"vav");
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
            }
        }
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
import Api from "../helper/Api.js";
import LogsTable from "./dataTable.js";

let $logs = [];
let filterStart = null;
let filterEnd = null;

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
                        title: "Description",
                        data: "description",
                        render: function (data, type, row) {

                            const themeName = row.theme_name ?? "Unknown Theme";

                            if (row.action === "delete") {
                                return `The theme "${themeName}" has already been deleted.`;
                            }

                            else if (row.action === "login"){
                                 return ` User "${row.User}" logged in.`;
                            }

                            else if (row.action === "logout"){
                                 return ` User "${row.User}" logged out.`;
                            }

                            return `${data}"${themeName}"`;
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
                        title: 'Actions',
                        data: null,
                        render: function (data, type, row) {
                            return `
                                <button
                                    class="descModal btn btn-sm"
                                    data-log-id="${row.id}">
                                    View
                                </button>
                            `;
                        }
                    }
                ],
                { 
                    ordering: true,
                    order: [[ "desc"]], // Log ID descending (latest first)
                    pageLength: 10,
                }
            )

            const tbody = $("#activity-logs-body");

            if (!tbody) {
                console.error("activity-logs-body not found.");
                return;
            }
            //console.log($logs,"daa");
            let table = $('#activityLogsTable').DataTable();
            table.clear();
            table.rows.add($logs);
            table.draw();
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

    $("#DescModal")[0].showModal();

    const logId = $(this).data("log-id");

    const log = $logs.find(item => item.id == logId);

    const oldValues = log.old_values ? JSON.parse(log.old_values) : {};
    const newValues = log.new_values ? JSON.parse(log.new_values) : {};   // <-- add this line
    
    console.log("asqw",oldValues);
    //console.log("assqw",newValues);


    if (!log) {
        console.error("Log not found.");
        return;
    }

    console.log("log",log);

    const changes = getChanges(logId);

    console.log("saaaaa",changes);

    if ($.fn.DataTable.isDataTable("#changesTable")) {
        $("#changesTable").DataTable().clear().destroy();
    }

    $("#themeInfoBody").html(`
        <tr>
            <th>Log ID</th>
            <td>${log.id}</td>
        </tr>
        
        ${(log.action === "login" || log.action === "logout") ? "" : `
        <tr>
            <th>Theme Name</th>
            <td>${log.theme_name}</td>
        </tr>

        <tr>
            <th>Theme ID</th>
            <td>${log.theme_id ?? oldValues.id ?? newValues.id }</td>
        </tr>
        `}

        <tr>
            <th>Action</th>
            <td>
                <span class="px-2 py-1 rounded font-medium ${
                    log.action === "login" ? "bg-green-100 text-green-700" :
                    log.action === "logout" ? "bg-gray-100 text-gray-700" :
                    log.action === "delete" ? "bg-red-100 text-red-700" :
                    log.action === "update" ? "bg-yellow-100 text-yellow-700" :
                    "bg-blue-100 text-blue-700"
                }">
                    ${log.action}
                </span>
            </td>
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
            <th>User IP Address</th>
            <td>${log.ip_address}</td>
        </tr>

        <tr>
            <th>Browser</th>
            <td>${getBrowser(log.user_agent)}</td>
        </tr>
        
        <tr>
            <th>Operating System</th>
            <td>${getOS(log.user_agent)}</td>
        </tr>
        
        <tr>
            <th>Date</th>
            <td>${moment(log.created_at).format("MMM DD, YYYY | hh : mm : ss : SS A")}</td>
        </tr>
    `);

    if (log.action === "login" || log.action === "logout") {
        $("#changesSection").hide();
    } else {
        $("#changesSection").show();
    }

    LogsTable.tableData("#changesTable", changes, [
        // {
        //     title: "Theme Id",
        //     data: "theme_id",
        // },
        {
            title: "Field",
            data: "field",
        },
        {
            title: "Old Value",
            data: "old",
            render: function (data, type, row) {

               if (data == null || data === "" || (Array.isArray(data) && data.length === 0) ) {
                    return "-";
                }

                if (row.field === "carousel_images" && Array.isArray(data)) {
                    return data.map(image => `
                        <div class="w-[100px] h-[150px] flex flex-col items-center">
                            <img src="${image.url}" class="max-w-[100px] max-h-[100px] rounded border">
                            <span>Position: ${image.position}</span>
                        </div>                                                          
                    `).join("");
                }

                if (row.field === "logo_img" && typeof data === "object") {
                    return `<img src="${data.url}" width="120" class="rounded border">`;
                }

                if (row.field === "is_active") {
                    return data == 1
                        ? "<span>Active</span>"
                        : "<span>Inactive</span>";
                } 
            
                return data;
            }
        },
        {
            title: "Current Value",
            data: "new",
            render: function (data, type, row) {
                //console.log("Current value:", row.field, data.length);

                const positionData = JSON.parse(row.position || "[]");
               
                if (data == null || data === "" || (Array.isArray(data) && data.length === 0) ) {
                    return "-";
                }

                if (row.field === "carousel_images" && Array.isArray(data)) {
                    return data.map(image => `
                        <div class="w-[100px] h-[150px] flex flex-col items-center">
                            <img src="${image.url}" class="max-w-[100px] max-h-[100px] rounded border">
                            <span>Position: ${image.position}</span>
                        </div>
                    `).join("");
                }

                if (row.field === "logo_img" && typeof data === "object") {
                    return `<img src="${data.url}" width="120" class="rounded border">`;
                }

                if (row.field === "is_active") {
                    return data == 1
                        ? "<span>Active</span>"
                        : "<span>Inactive</span>";
                }  
                
                return data;
            }
        }
    ],
     {
        ordering: false,
        //pageLength: 10
    }
    );
});

function getChanges(logId) {

    const changes = [];

    const allowedFields = [
        "theme_name",
        "company_name",
        "site_name",
        "theme_status",
        "primary_color",
        "secondary_color",
        "accent_color",
        "background_color",
        "body_font",
        "header_font",
        "carousel_images",
        "logo_img",
        "is_active",
        "theme_id"
    ];

    const log = $logs.find(item => item.id == logId);

    if (!log) {
        return changes;
    }
    console.log("1212121",log)

    const oldValues = JSON.parse(log.old_values || "{}");
    const newValues = JSON.parse(log.new_values || "{}");

    console.log("newval",newValues);
    console.log("oldval",oldValues);

    // CREATE
    if (log.action === "create") {

        Object.keys(newValues).forEach(key => {

            if (!allowedFields.includes(key)) {
                return;
            }

            const value = newValues[key];
            console.log("val",value);
            if (
                value !== null &&
                value !== "" &&
                !(Array.isArray(value) && value.length === 0)
            ) {

                changes.push({
                    theme_id: log.theme_id ?? newValues.id ?? oldValues.id,
                    field: key,
                    old: "-",
                    new: value
                });
                console.log("gge",changes);

            }

        });

        return changes;
    }

    // UPDATE / DELETE

    const keys = new Set([
        ...Object.keys(oldValues),
        ...Object.keys(newValues)
    ]);

    keys.forEach(key => {

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
                // theme_id: log.theme_id ?? oldValues.id,
                theme_id: log.theme_id ?? newValues.id ?? oldValues.id,
                field: key,
                old: oldValues[key],
                new: newValues[key]
            });

        }

    });

    console.log("Old Values11", oldValues);
    console.log("New Values", newValues);
    console.log("faaa",changes);
    console.log("poooo",log);
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


$(document).on("click","#refreshBtn",function (){
    // location.reload();

    getActivityLogs();
});


//$('.date-picker').daterangepicker({
$('#datePickerBtn').daterangepicker({
    showWeekNumbers: false,
    linkedCalendars: false,
    alwaysShowCalendars: true,
    autoUpdateInput: false,            
    //  opens: window.innerWidth < 370 ? 'center' : 'left',
    opens: 'left',
    //  opens: 'center',
     ranges: {
        'Today': [
            moment(),
            moment()
        ],
        'Last 7 Days': [
            moment().subtract(6, 'days'),
            moment()
        ],
        'This Month': [
            moment().startOf('month'),
            moment().endOf('month')
        ]
    }
}, function (start, end) {

    filterStart = start.startOf('day');
    filterEnd = end.endOf('day');

    $(this.element).text(
        `${start.format('ll')} - ${end.format('ll')}`
    );

    $('#activityLogsTable').DataTable().draw();

});

$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {

    if (settings.nTable.id !== "activityLogsTable") {
        return true;
    }

    if (!filterStart || !filterEnd) {
        return true;
    }

    const table = $('#activityLogsTable').DataTable();
    const row = table.row(dataIndex).data();

    const rowDate = moment(row.created_at);

    const result = rowDate.isBetween(
        filterStart,
        filterEnd,
        undefined,
        "[]"
    );

    return result;
});

$('#datePickerBtn').on('cancel.daterangepicker', function () {

    filterStart = null;
    filterEnd = null;

    $(this).text("Filter by Date");

    $('#activityLogsTable').DataTable().draw();

});

function getBrowser(userAgent) {
    if (!userAgent) return "Unknown";

    if (userAgent.includes("Edge")) 
        return `
            <img src="/static/images/edgelogo.png" width="24" height="24" alt="edge Logo">
        `;
    if (userAgent.includes("Firefox"))
         return `
            <img src="/static/images/mozilalogo.png" width="24" height="24" alt="Mozila Logo">
        `;

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) 
        return `
            <img src="/static/images/chromelogo.png" width="24" height="24" alt="chrome Logo">
        `;

    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) 
        return `
            <img src="/static/images/safarilogo.png" width="24" height="24" alt="safari Logo">
        `;

    return "Other";
}

function getOS(userAgent) {
    if (!userAgent) return "Unknown";

    if (userAgent.includes("Windows")) 
        return `
            <img src="/static/images/windowslogo.png" width="24" height="24" alt="windows Logo">
        `;

    if (userAgent.includes("Mac OS X")) return "macOS";

    return "Other";
}
@extends('layout.centralizedScript')
@section('content')

    <body>
        <h1>Activity Logs</h1>
        <table class="table" id="activityLogsTable">
        <thead>
            <tr>
                <th>Actor</th>
                <th>Theme ID</th>
                <th>Action</th>
                <th>Description</th>
                <th>Date Created</th>
            </tr>
        </thead>

        <tbody id="activity-logs-body">
        </tbody>
        </table>
    </body>

    

    <dialog id="DescModal" class="modal openModal">
    <div class="modal-box">
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg">Changes</h3>
        <div class="flex flex-col w-full h-full">
            <div class="flex w-full">
                <div class="flex flex-col w-full h-full">
                    <table class="table" id="changesTable">
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Old Value</th>
                                <th>Current Value</th>
                            </tr>
                        </thead>
                        <tbody id="changes-body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </dialog>

    <script type="module" src="/app/module/activitylog.js"></script>

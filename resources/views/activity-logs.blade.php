@extends('layout.centralizedScript')
@section('content')

    <body class="p-5">
        <div class=" flex w-full justify-between ">
            <h1 class="flex w-full">Activity Logs</h1>
            <x-searchbar id="searchLogs"/>
        </div>   
        <table class="table" id="activityLogsTable">
        <thead>
            <tr>
                {{-- <th>User</th>
                <th>Theme ID</th>
                <th>Action</th>
                <th>Description</th>
                <th>Date Created</th> --}}
            </tr>
        </thead>

        <tbody id="activity-logs-body">
        </tbody>
        </table>
    </body>

    
    <dialog id="DescModal" class="modal openModal">
    <div class="modal-box w-[700px]">
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <span id="LogInfo"></span>
        <div class="w-full h-full flex flex-col gap-5">
            <table class="table table-zebra w-full flex">
                <tbody id="themeInfoBody"></tbody>
            </table>
            {{-- <table id="themeInfoTable" class="table table-zebra w-full mb-6">
            </table> --}}
            <h3 class="font-bold text-lg border items-center justify-center w-full flex rounded-lg">Changes</h3>
        </div>
        <div class="flex flex-col w-full h-full">
            <div class="flex w-full">
                <div class="flex flex-col w-full h-full">
                    <table class="table" id="changesTable">
                        {{-- <thead>
                            <tr>
                                <th>Field</th>
                                <th>Old Value</th>
                                <th>Current Value</th>
                            </tr>
                        </thead> --}}
                        <tbody id="changes-body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </dialog>

    <script type="module" src="/app/module/activitylog.js"></script>

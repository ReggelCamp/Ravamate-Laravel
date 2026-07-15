@extends('layout.centralizedScript')
@section('content')

    <style>
        .applyBtn{
            background-color: #27a371 !important;
            color: white !important;
        }
        .cancelBtn {
            background-color: #b51414 !important;
            color: white !important;
        }

        .daterangepicker td.active{
            background-color: aquamarine !important;
        }

    </style>

    <div class="p-6">
        <div class="flex items-center justify-between mb-6">
            {{-- Left Side --}}
            <div class="flex items-center gap-4">
                <div>
                    <h1 class="text-3xl font-bold headerFont">
                        Activity Logs
                    </h1>
                    <p class="text-sm opacity-70">
                        View and manage system activity.
                    </p>
                </div>
                <button id="refreshBtn" class="btn btn-primary btn-sm rounded-xl gap-2">
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                    Refresh
                </button>
            </div>
    
            {{-- Right Side --}}
            <div class="flex items-center gap-3">
                <x-datepicker id="datePickerBtn" class="w-[220px]  h-10" />
                <x-searchbar id="searchLogs" class="w-72" />
            </div>
    
        </div>
    
        <div class="overflow-x-auto rounded-xl shadow-md bg-base-100">
            <table class="table table-zebra" id="activityLogsTable">
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody id="activity-logs-body">
                </tbody>
            </table>
        </div>
    
    </div>

    
    <dialog id="DescModal" class="modal openModal">
    <div class="modal-box w-[700px]">
        <form method="dialog">
        <div class="flex p-2">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
        </form>
        <span id="LogInfo"></span>
        {{-- <div class="flex w-full gap-10"> --}}
            <div class="w-full h-full flex flex-col gap-5">
                <h3 class="font-bold text-lg border items-center justify-center w-full flex rounded-lg ">Log Information</h3>
                <table class="table table-zebra w-full flex">
                    <tbody id="themeInfoBody"></tbody>
                </table>           
            </div>
            <div class="flex flex-col w-full h-full">
                <div class="flex w-full">
                    <div class="flex flex-col w-full h-full" id="changesSection">
                        <h3 class="font-bold text-lg border items-center justify-center w-full flex rounded-lg">Changes</h3>
                        <table class="table" id="changesTable">
                            <tbody id="changes-body">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        {{-- </div> --}}
    </div>
    </dialog>

    <script type="module" src="/app/module/activitylog.js"></script>

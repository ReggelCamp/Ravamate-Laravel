@extends('layout.app')

@section('headerTitle', 'Dynamic Routing')
@section('title', 'Dynamic Routing')

@section('content')

    <style>
.dataTable-info {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 14px !important;
    font-size: 12px;
    color: #6b7280; /* gray-500 */
    border-top: 1px solid #e5e7eb;
    
}

/* #dynamicMapDt td,
#dynamicMapDt th {
    white-space: normal !important;
    word-break: break-word;
    overflow-wrap: anywhere;
} */

.dt-paging{
    background-color: transparent !important;
}

.dataTable-paginate {
    display: flex !important;
    align-items: center;
    gap: 4px;
    padding: 8px 14px !important;
    background: transparent !important;
    border-top: 1px solid #e5e7eb;
}

.dataTable-paginate .paginate_button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    height: 28px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
    color: #6b7280;
    cursor: pointer;
    border: none;
}

.dataTable-paginate .paginate_button:hover:not(.disabled) {
    background: #fee2e2; /* red-100 */
    color: #e6231e;
}

.dataTable-paginate .paginate_button.current {
    background: #e6231e;
    color: #fff;
}

.dataTable-paginate .paginate_button.disabled {
    opacity: 0.4;
    cursor: default;
}
    </style>

    <div class="w-full flex flex-col h-screen pt-5">
        <div class="report_title w-full h-[50px] justify-center items-center rounded-t-xl px-5 py-3 flex ">
            <x-report-header-title title="Dynamic Route" />

            <div class="sheenFilterBtn border rounded-xl">
                <a href="{{ route('dynamic-route-list') }}"
                    class="btn border p-1 rounded-xl sheenFilterBtn !text-white text-[12px] gap-2 px-2 h-[30px] items-center w-fit px-5 whitespace-nowrap items-center flex">
                    Route List
                </a>

            </div>
        </div>
        {{-- MAP --}}
        <div class="w-full flex-1 h-screen relative">
            <div class="absolute top-5 left-5 z-[10] w-full max-w-[450px] max-h-[350px]
                        bg-white/70 rounded-2xl shadow-xl border border-black/5
                        flex flex-col overflow-hidden">

                <div class="flex !bg-transparent items-center gap-3 p-3 border-b ">
                    <span class="text-sm font-semibold text-gray-600 whitespace-nowrap">Search</span>
                    <x-searchbar id="dynamicMapSearch" data-table-search="#dynamicMapDt" class="border flex-1" />
                </div>

                <div class="flex-1 overflow-y-auto">
                    <x-datatable id="dynamicMapDt" />
                </div>
            </div>

            <x-DigitalMap />
        </div>

    </div>

    <script type="module" src="app/module/Maintenance/SFA_Queuing/DynamicMap.js"></script>

@endsection
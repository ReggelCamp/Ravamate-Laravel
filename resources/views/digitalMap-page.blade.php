@extends('layout.app')

@section('headerTitle', 'DIGITAL MAPPING')
@section('title', 'DIGITAL MAP')

@section('content')

    <div class="w-full h-screen pt-5">

        {{-- MAP --}}
        <div class="w-full flex-1 h-screen">
            <x-DigitalMap />
        </div>

        {{-- <div class="w-full flex flex-col min-h-screen p-5">
            <div class="flex gap-5">
                <div class="flex w-full glex flex-col border items-center">
                    <span>Map Status</spans>
                </div>
                <div class="flex w-full glex flex-col border">
                    <span>Map Status</spans>
                </div>
            </div>
        </div> --}}

       
    {{-- Status summary --}}
    <aside class="absolute left-3 bottom-3 z-10 w-fit px-10 pt-5 overflow-hidden rounded-lg bg-[#071438]/90 text-white shadow-xl">
        <div class="bg-[#020b2c] px-4 py-3 text-center text-[13px] font-bold">MAP STATUS</div>
        <dl class="space-y-2 px-4 py-4 text-[12px]">
            <div class="flex justify-between gap-3"><dt class="font-semibold">Range Date</dt><dd id="mapRangeDate">—</dd></div>
            <div class="flex justify-between gap-3"><dt class="font-semibold">Filtered GTM</dt><dd>—</dd></div>
            <div class="flex justify-between gap-3"><dt class="font-semibold">Filtered Salesman</dt><dd>—</dd></div>
            <div class="flex justify-between gap-3"><dt class="font-semibold">Map Status</dt><dd>Heatmap</dd></div>
        </dl>
    </aside>

    {{-- Floating statistics --}}
    <div class="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 gap-4 lg:flex">
        <div class="w-fit px-10 p-5 rounded-xl bg-white/90 p-3 shadow-xl backdrop-blur">
            <span class="text-[10px] text-slate-500">SALESMAN</span>
            <div class="mt-2 flex items-center gap-3"><i class="fa-solid fa-user-tie rounded-full bg-[#2279a9] p-3 text-2xl text-white"></i><strong class="text-xl text-blue-700">23</strong></div>
        </div>
        <div class="w-fit px-10 p-5 rounded-xl bg-white/90 p-3 shadow-xl backdrop-blur">
            <span class="text-[10px] text-slate-500">ACCOUNTS UNIVERSE</span>
            <div class="mt-2 flex items-center gap-3"><i class="fa-solid fa-store rounded-full bg-[#eda900] p-3 text-2xl text-white"></i><strong class="text-xl text-blue-700">7,401</strong></div>
        </div>
        <div class="w-fit px-10 p-5 rounded-xl bg-white/90 p-3 shadow-xl backdrop-blur">
            <span class="text-[10px] text-slate-500">SALES</span>
            <div class="mt-2 flex items-center gap-3"><i class="fa-solid fa-chart-column rounded-full bg-green-600 p-3 text-2xl text-white"></i><strong class="text-xl text-blue-700">—</strong></div>
        </div>
    </div>

    {{-- Map controls --}}
    <aside class="absolute right-6 top-1/2 z-10 hidden w-fit px-10 pt-5  -translate-y-1/2 rounded-2xl bg-white p-5 text-[14px] text-slate-600 shadow-2xl lg:block">
        <h2 class="border-b pb-2 text-center text-2xl font-bold text-[#06143b]">Map Controls</h2>
        <div class="mt-5 space-y-3">
            <label class="flex items-center gap-3"><input type="checkbox" class="toggle toggle-sm" disabled><span class="text-slate-400">Uncovered Accounts</span></label>
            <label class="flex items-center gap-3"><input type="checkbox" class="toggle toggle-sm" checked><span>Covered Accounts</span></label>
            <label class="flex items-center gap-3"><input type="checkbox" class="toggle toggle-sm"><span>Cluster</span></label>
            <label id="heatmap_radiobtn" class="flex items-center gap-3">
                <input id="heatmapToggle" type="checkbox" class="toggle toggle-sm" checked>
                <span>Heatmap</span>
            </label>
            <label class="flex items-center gap-3"><input type="checkbox" class="toggle toggle-sm"><span>Set Marker Colors<br>by MSM</span></label>
            <p class="pl-10 text-[11px] text-slate-400">• Color Legend</p>
            <label class="flex items-center gap-3"><input type="checkbox" class="toggle toggle-sm"><span>Set Marker by Channel</span></label>
            <label class="flex items-center gap-3"><input type="checkbox" class="toggle toggle-sm" disabled><span class="text-slate-400">Display Geo Fence</span></label>
        </div>
    </aside>

    {{-- <div class="absolute left-1/2 top-8 z-10 -translate-x-1/2 rounded-full bg-[#020b35] p-4 text-white shadow-lg">
        <i class="fa-solid fa-angles-down text-xl"></i>
    </div> --}}

    </div>


@endsection

<script type="module" src="/app/module/digital_map/digitalMap.js"></script>

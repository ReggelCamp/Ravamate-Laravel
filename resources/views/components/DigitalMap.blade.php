@props([
    'speedDialPosition' => 'bottom-6 right-6',
])

<style>
    .gm-control-active {
        display: none;
    }
</style>

<div class="relative w-full h-full overflow-hidden bg-[#83d1e4]">
    <div id="digital_map_container" class="absolute inset-0"></div>

    {{-- Speed dial --}}
    <div
        id="mapSpeedDial"
        class="absolute {{ $speedDialPosition }} z-[999] flex flex-col items-end gap-3"
    >

        <div id="mapSpeedDial_items" class="hidden flex-col items-center gap-3 mb-1">

            {{-- <button type="button" id="mapControl_Fullscreen"
                title="Fullscreen"
                class="btn btn-circle btn-sm bg-white shadow-md border hover:bg-gray-50">
                <i class="fa-solid fa-expand text-gray-700"></i>
            </button> --}}

            <button type="button" id="mapControl_ZoomIn"
                title="Zoom in"
                class="btn btn-circle btn-sm bg-white shadow-md border hover:bg-gray-50">
                <i class="fa-solid fa-plus text-gray-700"></i>
            </button>

            <button type="button" id="mapControl_ZoomOut"
                title="Zoom out"
                class="btn btn-circle btn-sm bg-white shadow-md border hover:bg-gray-50">
                <i class="fa-solid fa-minus text-gray-700"></i>
            </button>

            <button type="button" id="mapControl_Recenter"
                title="Recenter"
                class="btn btn-circle btn-sm bg-white shadow-md border hover:bg-gray-50">
                <i class="mdi mdi-target text-[15px] text-gray-700"></i>
            </button>

        </div>

        <button type="button"
            id="mapSpeedDial_toggle"
            class="btn btn-circle bg-[#e6231e] hover:bg-red-700 text-white shadow-lg btn-md">
            <i class="fa-solid fa-layer-group text-lg" id="mapSpeedDial_icon"></i>
        </button>

    </div>
</div>

<script type="module" src="/app/module/digital_map/digitalMap.js"></script>
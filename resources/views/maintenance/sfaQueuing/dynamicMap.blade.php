@extends('layout.app')

@section('headerTitle', 'Dynamic Routing')
@section('title', 'Dynamic Routing')

@section('content')

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
        <div class="w-full flex-1 h-screen">
            <x-DigitalMap />
        </div>

    </div>

@endsection
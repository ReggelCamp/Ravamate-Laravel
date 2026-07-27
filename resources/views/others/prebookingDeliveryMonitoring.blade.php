@extends('layout.app')
@section('content')

    <body class="w-full h-full">
        <div class="flex w-full h-full flex-col carouselBg">
            <div class="flex w-full h-[50px] justify-between p-5 report_title items-center">
                <div class="flex w-full ">
                    <x-report-header-title title="PreBooking Delivery Monitoring" />
                </div>
                <div class="flex w-full h-[30px] justify-end">
                    <x-datepicker />
                </div>
            </div>
            <div class="flex flex-col-reverse sm:flex-row w-full justify-between gap-5 p-5 background_color">
                <div>
                    <x-exportDataTable />
                </div>
                <div class="flex w-full h-[40px]">
                    <x-searchbar id="customSearch" />
                </div>
            </div>
            <div class="w-full h-full overflow-auto">
                <x-datatable />
            </div>
        </div>
    </body>
@endsection
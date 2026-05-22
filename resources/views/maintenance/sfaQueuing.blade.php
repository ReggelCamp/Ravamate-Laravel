@extends('layout.app')
@section('content')

<body class="w-full min-h-screen">

<div class="flex flex-col items-center p-5 gap-5">

    <!-- HEADER WRAPPER -->
    <div class="w-full">

        <div class="flex w-full justify-between flex-row-reverse sm:flex-row mb-5">

            <button class="bg-blue-500 text-sm rounded-lg h-[50px] text-white px-4">
                Dynamic Load Planning
            </button>

            <div class="flex flex-col sm:flex-row gap-3">
                <button class="bg-blue-500 text-sm rounded-xl text-white px-4 py-2">
                    Admin Sync Logs
                </button>

                <button class="bg-blue-500 text-sm rounded-xl text-white px-4 py-2">
                    Refresh
                </button>
            </div>

        </div>

        <!-- GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-0.5 w-full">

            <!-- Card 1 -->
            <div class="bg-blue-500 hover:bg-violet-600 h-[180px] w-full cursor-pointer"
                onclick="SOtoEric()">
                <div class="flex justify-between h-full p-5">

                    <div class="flex flex-col justify-between">
                        <h1>Sync SO to Eric</h1>
                        <div>
                            <h1 class="text-2xl">105</h1>
                            <h1>Pending Records</h1>
                            <h1>Past Failed Sync Records: 5</h1>
                        </div>
                    </div>

                    <div class="flex flex-col justify-between items-end">
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                    </div>

                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-blue-500 hover:bg-violet-600 h-[180px] w-full cursor-pointer"
                onclick="PaymenttoEric()">
                <div class="flex justify-between h-full p-5">

                    <div class="flex flex-col justify-between">
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                    </div>

                    <div class="flex flex-col justify-between items-end">
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                    </div>

                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-blue-500 hover:bg-violet-600 h-[180px] w-full cursor-pointer"
                onclick="ReturntoEric()">
                <div class="flex justify-between h-full p-5">

                    <div class="flex flex-col justify-between">
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                    </div>

                    <div class="flex flex-col justify-between items-end">
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                    </div>

                </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-blue-500 hover:bg-violet-600 h-[180px] w-full cursor-pointer"
                onclick="TransfertoEric()">
                <div class="flex justify-between h-full p-5">

                    <div class="flex flex-col justify-between">
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                    </div>

                    <div class="flex flex-col justify-between items-end">
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                        <h1>dada</h1>
                    </div>

                </div>
            </div>

        </div>

        <!-- TABLE -->
        <div class="overflow-auto mt-5">
            <x-datatable/>
        </div>

    </div>
</div>

<script>
    function SOtoEric(){
        document.getElementById('myDiv').style.backgroundColor = '#ff0000';
    }
    function PaymenttoEric(){
        document.getElementById('myDiv').style.backgroundColor = '#d8d660';
    }
    function ReturntoEric(){
        document.getElementById('myDiv').style.backgroundColor = '#60d873';
    }
    function TransfertoEric(){
        document.getElementById('myDiv').style.backgroundColor = '#d87160';
    }
</script>

</body>

@endsection
<x-index title="SFA QUEUING"/>

<body class="w-full min-h-screen">

    <div class="flex flex-col items-center p-5 gap-5">

        <!-- SAME WIDTH CONTAINER -->
        <div class="w-fit">

            <!-- HEADER -->
            <div class="flex justify-between mb-5">

                <button class="bg-blue-500 text-sm rounded-lg text-white p-2">
                    Dynamic Load Planning
                </button>

                <div class="flex gap-5">
                    <button class="bg-blue-500 text-sm rounded-xl text-white p-2">
                        Admin Sync Logs
                    </button>

                    <button class="bg-blue-500 text-sm rounded-xl text-white p-2">
                        Refresh
                    </button>
                </div>

            </div>

            <div class="grid grid-cols-2 w-fit mx-auto">

            <!-- Top Left -->
            <div class="border-r border-b border-black w-[500px] h-180px bg-blue-500 hover:bg-violet-600" onclick="SOtoEric()">
                    <div class="flex w-full h-full justify-between p-5">
                        <div class="flex flex-col w-full h-full">
                            <h1>Sync SO to Eric</h1>
                            <div class="flex w-full flex-col ">
                                <h1 class="text-2xl">105</h1>
                                <h1>Pending Records</h1>
                                <h1>Past Failed Sync Records:5</h1>
                            </div>
                        </div>
                        <div class="flex flex-col w-full h-full items-end ">
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                        </div>
                    </div>
            </div>

            <!-- Top Right -->
            <div class="border-b border-black w-[500px] h-180px bg-blue-500 hover:bg-violet-600" onclick="PaymenttoEric()">
                    <div class="flex w-full h-full justify-between p-5">
                        <div class="flex flex-col w-full h-full">
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                        </div>
                        <div class="flex flex-col w-full h-full p-5 items-end ">
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                        </div>
                    </div>
            </div>

            <!-- Bottom Left -->
            <div class="border-r  border-black w-[500px] h-180px bg-blue-500 hover:bg-violet-600 "onclick="ReturntoEric()">
                    <div class="flex w-full h-full justify-between p-5">
                        <div class="flex flex-col w-full h-full">
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                        </div>
                        <div class="flex flex-col w-full h-full justify-end p-5 items-end ">
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                        </div>
                    </div>
            </div>

            <!-- Bottom Right -->
            <div>
                <div class="bg-blue-500 shadow-sm w-[500px] h-180px p-5 hover:bg-violet-600"onclick="TransfertoEric()">
                    <div class="flex w-full h-full justify-between  ">
                        <div class="flex flex-col w-full h-full ">
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                        </div>
                        <div class="flex flex-col w-full h-full p-5 items-end ">
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                            <h1>dada</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <div id="myDiv" class="">
            <x-datatable/>
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



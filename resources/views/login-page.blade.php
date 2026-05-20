<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="w-full h-full  ">
    <div class="w-full h-full flex flex-col pt-40 pb-96 pl-[550px] pr-[550px]">
        <div class=" w-full h-full  items-center justify-center border  ">
            <div class="w-full h-full flex items-center justify-between p-4 bg-white border-b">
                <div class="flex-col">
                    <h1 class="text-3xl">RAVAMATE</h1>
                    <h5 class="text-xs"> Connecting Options, Ensuring Presence </h5>
                </div>
                <div class="w-15 h-15">
                    <img src="/static/images/ravamatelogo.png" class="w-full h-full object-cover"/>
                </div>
            </div>
            <div class="w-full h-full p-4 bg-white flex ">
                <form action="" method="POST" class="flex flex-col gap-6 w-full h-full">
                    @csrf
                    <div class="flex w-full h-full">
                        <input class="border rounded-l-lg text-md w-16 text-center border-gray-200 bg-gray-100" type="text" readonly placeholder="+63">
                        <input class="border rounded-r-lg w-full h-10 border-blue-300 pl-4" pattern="\d{0,9}" maxlength="10" name="pnum" placeholder="Phone Number">
                    </div>
                    <button type="submit" class="bg-blue-500 text-white p-2 rounded">Login</button>
                </form>
            </div>
            <div class="w-full h-full pl-5 pb-4">
                <a href="#" class="text-sm text-blue-500">Download SFA here</a>
            </div>
           </div>
        </div>
    </div>
</body>
</html>
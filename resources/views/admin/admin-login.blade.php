<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4 py-12">

    <div class="w-full max-w-sm">
        <div class="w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">

            <div class="flex w-full justify-center items-center p-2">
                Admin Login
            </div>

            <!-- Header -->
            <div class="w-full flex items-center justify-between p-4 border-b border-gray-100">
                <div class="flex flex-col">
                    <h1 class="text-2xl font-bold tracking-wide">RAVAMATE</h1>
                    <p class="text-xs text-gray-500">Connecting Options, Ensuring Presence</p>
                </div>
                <div class="w-12 h-12 shrink-0">
                    <img src="/static/images/ravamatelogo.png" class="w-full h-full object-contain" alt="Ravamate logo"/>
                </div>
            </div>

            <!-- Form -->
            <div class="p-4">
                <form action="" method="POST"  id="LoginForm"  class="flex flex-col gap-5 w-full">
                    @csrf

                    <div class="flex w-full">
                        <input
                            class="border border-r-0 rounded-l-lg text-sm w-14 text-center bg-gray-100 border-gray-200 text-gray-600"
                            type="text"
                            readonly
                            value="+63"
                        >
                        <input
                            class="border rounded-r-lg w-full h-10 border-blue-300 pl-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                            pattern="\d{0,11}"
                            maxlength="11"
                            name="contact_number"
                            placeholder="Phone Number"
                            inputmode="numeric"
                        >
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>

            <div class="px-4 pb-4">
                <a href="#" class="text-sm text-blue-500 hover:underline">Download SFA here</a>
            </div>

        </div>
    </div>

</body>
</html>
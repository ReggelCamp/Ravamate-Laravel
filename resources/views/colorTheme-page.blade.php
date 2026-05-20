<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport">
    <title>Color Theme Page</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script  src="/app/helper/sweetalert.js"></script>

    
</head>
<body class="w-full h-full">
    <div class="flex flex-col w-full h-full">
        <div class="flex w-full h--full justify-between p-5">
            <div class="w-full h-full primary_color">
                <h1 class="text-lg">
                    Color Theme
                </h1>
            </div>
            <div class="flex w-full h-full justify-end">
                <button class="bg-blue-400 w-fit p-1 rounded-xl text-white"id='addbtn'>
                    Add Theme
                </button>
            </div>
        </div>

        <div id="table" class="flex w-full h-full p-5 gap-5 flex-wrap">

</div>
    </div>
</body>

    <dialog id="AddThemeModal" class="modal">
    <div class="modal-box w-fit max-w-[90vw]">

        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 p-5">
                ✕
            </button>
        </form>

        <div>
          
            <div class="flex flex-col w-full">

                
                <h1 id="modalTitle" class="w-full text-2xl text-center">    
                </h1>

                <label class="text-sm font-medium text-gray-700">
                           Input Theme Name
                </label>
                
                <input type="text" class="w-full border rounded-lg pl-2.5 " required  name="theme_name" id="theme_name">

                <div class="flex flex-col w-full h-full pt-5">
                        <label>Upload Logo </label>
                        <input type="file" class="file-input w-full" id="logo_id" />
                </div>

                <div class="flex flex-wrap gap-6 ">
                    <!-- Primary Color -->
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium text-gray-700">
                            Primary Color
                        </label>

                        <div class="flex items-center gap-3">
                            <input 
                                type="color"
                                id="primary_color"
                                name="primary_color"
                                value="#3b82f6"
                                class="w-12 h-12 rounded-lg cursor-pointer border border-gray-300 p-1"
                            />

                            <input 
                                type="text"
                                id="primaryColorHex"
                                name="primaryColorHex"
                                class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-32"
                                value="#3b82f6"
                                readonly
                            />
                        </div>
                    </div>

                    <!-- Secondary Color -->
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium text-gray-700">
                            Secondary Color
                        </label>

                        <div class="flex items-center gap-3">
                            <input 
                                type="color"
                                id="secondary_color"
                                name="secondary_color"
                                value="#3b82f6"
                                class="w-12 h-12 rounded-lg cursor-pointer border border-gray-300 p-1"
                            />

                            <input 
                                type="text"
                                id="secondaryColorHex"
                                class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-32 "
                                value="#3b82f6"
                                readonly
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col w-full">
                <div class="flex flex-wrap gap-6">
                    <!-- Accent Color -->
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium text-gray-700">
                            Accent Color
                        </label>

                        <div class="flex items-center gap-3">
                            <input 
                                type="color"
                                id="accent_color"
                                name="accent_color"
                                value="#3b82f6"
                                class="w-12 h-12 rounded-lg cursor-pointer border border-gray-300 p-1"
                            />

                            <input 
                                type="text"
                                id="accentColorHex"
                                class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-32"
                                value="#3b82f6"
                                readonly
                            />
                        </div>
                    </div>

                    <!-- Background Color -->
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium text-gray-700">
                            Background Color
                        </label>

                        <div class="flex items-center gap-3">
                            <input 
                                type="color"
                                id="background_color"
                                name="background_color"
                                value="#3b82f6"
                                class="w-12 h-12 rounded-lg cursor-pointer border border-gray-300 p-1"
                            />

                            <input 
                                type="text"
                                id="backgroundColorHex"
                                name="backgroundColorHex"
                                class="border border-gray-300 rounded-lg px-3 py-2 text-sm w-32"
                                value="#3b82f6"
                                readonly
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col w-[400px] h-full pt-5 gap-5">
                    <label class="">Select Body Font</label>
                    <select id="body_font" name="body_font" class="select w-full">
                        <option disabled selected>Pick a font</option>
                        <option value="Inter" style="font-family: Inter;">Inter</option>
                        <option value="Poppins" style="font-family: Poppins;">Poppins</option>
                        <option value="Roboto" style="font-family: Roboto;">Roboto</option>
                        <option value="Georgia" style="font-family: Georgia;">Georgia</option>
                        <option value="Courier New" style="font-family: 'Courier New';">Courier New</option>
                    </select>

                    <label class="">Select Header Font</label>
                    <select id="header_font"name='header_font' class="select w-full">
                        <option disabled selected>Pick a font</option>
                        <option value="Inter" style="font-family: Inter;">Inter</option>
                        <option value="Poppins" style="font-family: Poppins;">Poppins</option>
                        <option value="Roboto" style="font-family: Roboto;">Roboto</option>
                        <option value="Georgia" style="font-family: Georgia;">Georgia</option>
                        <option value="Courier New" style="font-family: 'Courier New';">Courier New</option>
                    </select>
            </div>
            
         

            <div class="flex flex-col w-full h-full pt-5">
                <label>Report Header </label>
                <input type="text" class="file-input w-full" id="report_header" />
            </div>

            <div class="flex flex-col w-full h-full pt-5">
                <label>Report Header Title </label>
                <input type="text" class="file-input w-full" />
            </div>
            
                <button  class="mt-4 bg-blue-500 p-2 text-white rounded-lg" id="executeSavebtn">
                    Save
                </button>
                <button  class="mt-4 bg-blue-500 p-2 text-white rounded-lg" id="executeEditbtn">
                    Edit
                </button>
            
           
            </div>
    </div>
    </dialog>

<script type="module" src="/app/module/theme.js"></script>
</html>


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
    <link rel="stylesheet" href="{{ asset('static/css/style.css') }}">
     {{-- Google Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Roboto&display=swap" rel="stylesheet">

    <script src="https://cdn.jsdelivr.net/npm/jquery-sortablejs@latest/jquery-sortable.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/Sortable.min.js"></script>

    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    
</head>
<body class="w-full h-full gradient1">
    <div class="flex flex-col w-full h-full">
        <div class="flex w-full h--full justify-between p-5">
            <div class="w-full h-full">
                <h1 class="text-2xl headerFont">
                    Color Theme
                </h1>
                <h1 class="text-2xl bodyFont">
                    Color Theme
                </h1>
            </div>
            <div class="flex w-full h-full justify-end">
                <button class="bg-blue-400 w-fit p-2 rounded-lg text-white"id='addbtn'>
                    <i class="fa-solid fa-plus"></i> Add Theme
                </button>
            </div>
        </div>

        <div id="table" class="flex w-full h-full p-5 gap-5 flex-wrap overflow-auto">
        </div>
    </div>
</body>

    <dialog id="AddThemeModal" class="modal">
    <div class="modal-box w-[450px] max-w-[90vw]">

        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost hover:bg-red-500 absolute right-2 top-2 p-5">
                ✕
            </button>
        </form>

        <div>
          
            <div class="flex flex-col w-full">

                
                <h1 id="modalTitle" class="w-full text-2xl text-center">    
                </h1>

                <div class="flex w-fit">
                    <label class="text-sm font-medium text-gray-700">
                         Input Theme Name
                    </label>
                    <span class="text-red-500">*</span>
                </div>
                
                <input type="text" class="w-full border rounded-lg pl-2.5 h-[40px] " required  name="theme_name" id="theme_name">
                <span id="ThemeName-error" class="text-red-500 text-sm mt-1 hidden"></span>

               <div class="flex w-fit">
                    <label class="text-sm font-medium  text-gray-700">
                         Input Company Name
                    </label>
                    <span class="text-red-500">*</span>
                </div>

                <input type="text" class="w-full border rounded-lg pl-2.5 h-[40px] " required  name="company_name" id="company_name">
                <span id="CompanyName-error" class="text-red-500 text-sm mt-1 hidden"></span>

                <div class="flex flex-col w-full h-full pt-5">
                    <div class="flex w-fit">
                        <label class="text-sm font-medium text-gray-700">
                            Upload Logo
                        </label>
                        <span class="text-red-500">*</span>
                    </div>
                    <input type="file" class="file-input w-full hidden" required id="logo_id" name="logo" accept="image/*" />
                        <label for="logo_id" id="LogoImg" class="btn btn-primary rounded-lg w-full addImg">
                            <i class="fa-solid fa-upload"></i> Add Image
                        </label> 
                    <span id="logo-error" class="text-red-500 text-sm mt-1 hidden"></span>
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
                    <div class="flex items-center gap-6 w-full h-full">

                        <!-- Font Selector -->
                        <div class="flex flex-col gap-2 w-full">
                            <label>Select Body Font</label>

                            <select id="body_font" name="body_font" class="select w-full">
                                <option disabled selected>Pick a font</option>
                            </select>
                        </div>

                        <!-- Color Picker -->
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium text-gray-700">
                                Body Font Color
                            </label>

                            <div class="flex items-center gap-3">
                                
                                <input
                                    type="color"
                                    id="BodyFont_color"
                                    name="BodyFont_color"
                                    name="body_color"
                                    value="#ffffff"
                                    class="w-12 h-12 p-1 border border-gray-300 rounded-lg cursor-pointer"
                                />

                                <input
                                    type="text"
                                    id="BodyFontColorHex"
                                    name="BodyFontColorHex"
                                    value="#ffffff"
                                    readonly
                                    class="w-32 px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>

                    </div>
                  
                    <div class="flex items-center gap-6 w-full h-full">

                        <!-- Font Selector -->
                        <div class="flex flex-col gap-2 w-full">
                            <label>Select Header Font</label>

                            <select id="header_font" name="header_font" class="select w-full">
                                <option disabled selected>Pick a font</option>
                            </select>
                        </div>

                        <!-- Color Picker -->
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium text-gray-700">
                                Header Font Color
                            </label>

                            <div class="flex items-center gap-3">
                                
                                <input
                                    type="color"
                                    id="HeaderFont_color"
                                    name="HeaderFont_color"
                                    value="#000000"
                                    class="w-12 h-12 p-1 border border-gray-300 rounded-lg cursor-pointer"
                                />

                                <input
                                    type="text"
                                    id="HeaderFontColorHex"
                                    name="HeaderFontColorHex"
                                    value="#000000"
                                    readonly
                                    class="w-32 px-3 py-2 text-sm border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>

                    </div>
            </div>
            
            <div class="flex flex-col w-full h-full pt-5">
                <label>Report Header </label>
                <input type="text" class="file-input w-full" id="report_header" />
            </div>

            {{-- Carousel --}}
            <div class="flex flex-col w-full h-full pt-5">
                <label>Upload Carousel Image</label>
                <span class="text-red-500 text-sm mt-1 hidden" id="CarouselError"></span> 
            </div>
            
            {{-- Carousel images --}}
            <div class="flex w-full gap-1 ">
                <input type="file" class="file-input hidden" id="carouselImg" name="carouselImg" multiple />
                    <label for="carouselImg" id="addImg" class="btn btn-primary w-full rounded-lg addImg">
                        <i class="fa-solid fa-upload"> </i>Add Image
                    </label> 
            </div>

            <div class="w-full flex max-h-96 overflow-x-scroll">
                <div class="flex flex-col items-center carousel overflow-x-auto scroll-smooth gap-5 w-full h-full pt-2 " id="imgContainer">
                </div> 
                
            </div>

            <div class="w-full flex justify-center">
                <button  class="mt-4 w-full btn btn-dash btn-primary p-2  rounded-lg" id="executeSavebtn">
                    Save
                </button>
                
                <button  class="mt-4 w-full btn btn-dash btn-primary p-2  rounded-lg" id="executeEditbtn">
                    Confirm
                </button>
            </div>
           
            </div>
    </div>
    </dialog>

<script type="module" src="/app/module/theme.js"></script>
<script type="module" src="/app/helper/theme_state.js"></script>
</html>


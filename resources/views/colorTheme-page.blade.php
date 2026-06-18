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
                <button class="bg-blue-400 w-fit p-2 rounded-lg text-white "id='addbtn'>
                    <i class="fa-solid fa-plus"></i> Add Theme
                </button>
            </div>
        </div>

        <div id="table" class="flex w-full h-full p-5 gap-5 flex-wrap overflow-auto">
        </div>
    </div>
</body>

  <dialog id="AddThemeModal" class="modal">
    <div class="modal-box w-[700px] max-w-[95vw] max-h-[90vh] overflow-y-auto p-6">

        {{-- Close button --}}
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost hover:bg-red-500 absolute right-3 top-3">✕</button>
        </form>

        {{-- Title --}}
        <h1 id="modalTitle" class="text-xl font-medium text-center mb-6"></h1>

        <div class="flex flex-col gap-5">

            {{-- Row 1: Theme Name + Company Name --}}
            <div class="grid grid-cols-2 gap-3">
                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium text-gray-600">
                        Theme name <span class="text-red-500">*</span>
                    </label>
                    <input type="text" name="theme_name" id="theme_name" required
                        placeholder="e.g. Corporate Blue"
                        class="input input-bordered input-sm w-full rounded-lg" />
                    <span id="ThemeName-error" role="alert" class="text-red-500 text-xs mt-0.5 hidden animate-bounce"></span>
                </div>

                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium text-gray-600">
                        Company name <span class="text-red-500">*</span>
                    </label>
                    <input type="text" name="company_name" id="company_name" required
                        placeholder="e.g. Acme Corp"
                        class="input input-bordered input-sm w-full rounded-lg" />
                    <span id="CompanyName-error" role="alert" class="text-red-500 text-xs mt-0.5 hidden animate-bounce"></span>
                </div>
            </div>

            {{-- Row 2: Logo Upload + Report Header --}}
            <div class="grid grid-cols-2 gap-3">
                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium text-gray-600">
                        Logo <span class="text-red-500">*</span>
                    </label>
                    <input type="file" id="logo_id" name="logo" accept="image/*" required class="hidden" />
                    <label for="logo_id" id="LogoImg"
                        class="btn btn-outline btn-primary btn-sm w-full rounded-lg border-dashed addImg">
                        <i class="fa-solid fa-upload"></i> Choose logo
                    </label>
                    <span id="logo-error" role="alert" class="text-red-500 text-xs mt-0.5 hidden animate-bounce"></span>
                </div>

                <div class="flex flex-col gap-1">
                    <label class="text-sm font-medium text-gray-600">Report header</label>
                    <input type="text" id="report_header"
                        placeholder="Report header text"
                        class="input input-bordered input-sm w-full rounded-lg" />
                </div>
            </div>

            {{-- Row 3: Colors (2x2 grid) --}}
            <div class="border-t border-base-300 pt-4">
                <p class="text-sm font-medium text-gray-500 mb-3">Colors</p>
                <div class="grid grid-cols-4 gap-2">

                    <div class="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2">
                        <input type="color" id="primary_color" name="primary_color" value="#3b82f6"
                            class="w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0" />
                        <div class="flex flex-col min-w-0">
                            <span class="text-xs text-gray-400">Primary</span>
                            <input type="text" id="primaryColorHex" name="primaryColorHex" value="#3b82f6" readonly
                                class="text-xs font-medium bg-transparent border-0 p-0 w-full" />
                        </div>
                    </div>

                    <div class="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2">
                        <input type="color" id="secondary_color" name="secondary_color" value="#3b82f6"
                            class="w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0" />
                        <div class="flex flex-col min-w-0">
                            <span class="text-xs text-gray-400">Secondary</span>
                            <input type="text" id="secondaryColorHex" value="#3b82f6" readonly
                                class="text-xs font-medium bg-transparent border-0 p-0 w-full" />
                        </div>
                    </div>

                    <div class="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2">
                        <input type="color" id="accent_color" name="accent_color" value="#3b82f6"
                            class="w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0" />
                        <div class="flex flex-col min-w-0">
                            <span class="text-xs text-gray-400">Accent</span>
                            <input type="text" id="accentColorHex" value="#3b82f6" readonly
                                class="text-xs font-medium bg-transparent border-0 p-0 w-full" />
                        </div>
                    </div>

                    <div class="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2">
                        <input type="color" id="background_color" name="background_color" value="#3b82f6"
                            class="w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0" />
                        <div class="flex flex-col min-w-0">
                            <span class="text-xs text-gray-400">Background</span>
                            <input type="text" id="backgroundColorHex" name="backgroundColorHex" value="#3b82f6" readonly
                                class="text-xs font-medium bg-transparent border-0 p-0 w-full" />
                        </div>
                    </div>

                </div>
            </div>

            {{-- Row 4: Typography (2 columns side by side) --}}
            <div class="border-t border-base-300 pt-4">
                <p class="text-sm font-medium text-gray-500 mb-3">Typography</p>
                <div class="grid grid-cols-2 gap-4">

                    {{-- Body Font --}}
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium text-gray-600">Body font</label>
                        <select id="body_font" name="body_font" class="select select-bordered select-sm w-full rounded-lg">
                            <option disabled selected>Pick a font</option>
                        </select>
                        <div class="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2">
                            <input type="color" id="BodyFont_color" name="BodyFont_color" value="#ffffff"
                                class="w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0" />
                            <div class="flex flex-col min-w-0">
                                <span class="text-xs text-gray-400">Font color</span>
                                <input type="text" id="BodyFontColorHex" name="BodyFontColorHex" value="#ffffff" readonly
                                    class="text-xs font-medium bg-transparent border-0 p-0 w-full" />
                            </div>
                        </div>
                    </div>

                    {{-- Header Font --}}
                    <div class="flex flex-col gap-2">
                        <label class="text-sm font-medium text-gray-600">Header font</label>
                        <select id="header_font" name="header_font" class="select select-bordered select-sm w-full rounded-lg">
                            <option disabled selected>Pick a font</option>
                        </select>
                        <div class="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2">
                            <input type="color" id="HeaderFont_color" name="HeaderFont_color" value="#000000"
                                class="w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0" />
                            <div class="flex flex-col min-w-0">
                                <span class="text-xs text-gray-400">Font color</span>
                                <input type="text" id="HeaderFontColorHex" name="HeaderFontColorHex" value="#000000" readonly
                                    class="text-xs font-medium bg-transparent border-0 p-0 w-full" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {{-- Row 5: Carousel --}}
            <div class="border-t border-base-300 pt-4">
                <p class="text-sm font-medium text-gray-500 mb-3">Carousel images</p>
                <span id="CarouselError" class="text-red-500 text-xs mb-2 hidden"></span>

                <input type="file" id="carouselImg" name="carouselImg" multiple class="hidden" />
                <label for="carouselImg" id="addImg"
                    class="btn btn-outline btn-primary btn-sm w-full rounded-lg border-dashed addImg">
                    <i class="fa-solid fa-upload"></i> Add carousel images
                </label>

                <div class="w-full overflow-x-scroll p-5 mt-3">
                    <div id="imgContainer" class="flex gap-5"></div>
                </div>
            </div>

            {{-- Action Buttons --}}
            <div class="w-full flex pt-1">
                <button id="executeSavebtn" class="btn btn-outline btn-primary rounded-lg w-full">Save</button>
                <button id="executeEditbtn" class="btn btn-primary rounded-lg w-full">Confirm</button>
            </div>

        </div>
    </div>
</dialog>

<script type="module" src="/app/module/theme.js"></script>
<script type="module" src="/app/helper/theme_state.js"></script>
</html>


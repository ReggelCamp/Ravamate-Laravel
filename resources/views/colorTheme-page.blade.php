@extends('layout.centralizedScript')
@section('content')

<body class="w-full h-full bg-base-200 font-['Poppins']">
    <div class="flex flex-col w-full p-5 h-full">
        <div class="flex w-full h-[60px]  justify-between pl-10 pr-10">
            <div class="">
                <h1 class="text-[28px] font-semibold headerFont ">
                    Appearance
                </h1>
                <h1 class="text-[16px] font-normal bodyFont ">
                    Customize how the application looks for you and your team
                </h1>
            </div>
            <div class="flex items-end justify-end ">
                <div class="flex gap-2">
                    <button class="bg-red-500 w-fit p-5 btn rounded-[8px] text-white" id="logoutbtn">Logout</button>
                    <button class="bg-[#366EFB] w-fit p-5 btn rounded-[8px] text-white" id='addbtn'>
                        <span class="hidden md:inline">Create new</span>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="table" class="flex w-full h-full p-5 gap-5 flex-wrap overflow-auto">
        </div>
    </div>
</body>

<dialog id="AddThemeModal" class="modal">
    <div class="modal-box w-[700px] max-w-[95vw] max-h-[90vh] overflow-y-auto p-6">

        <div class="flex items-center justify-between">
            {{-- Title --}}
            <h1 id="modalTitle" class="text-[20px] font-medium text-center mb-6"></h1>

            {{-- Close button --}}
            <form method="dialog">
                <button
                    class="btn btn-sm btn-circle btn-ghost hover:bg-red-500 hover:text-white absolute right-3 top-3">✕</button>
            </form>
        </div>
        <div class="flex flex-col h-full w-full gap-[12px]">

            {{-- Row 1: Theme Name + Company Name --}}
            <div class="w-full flex ">
                <div class="flex w-full flex-col gap-[10px]">
                    <div class="flex gap-5">
                        <label class="text-[12px] font-medium text-[#17191C]">
                            Theme Name <span class="text-red-500">*</span>
                        </label>
                        <span id="ThemeName-error" role="alert"
                            class="text-red-500 text-xs hidden animate-bounce"></span>
                    </div>
                    <input type="text" name="theme_name" id="theme_name" required placeholder="e.g. Corporate Blue"
                        class="input input-bordered border-[#C1C3C7] input-sm w-full rounded-lg custom-input custom-input" />

                </div>

            </div>

            <div class="flex w-full flex-col gap-[8px] h-[160px] ">

                <div class="flex gap-5">
                    <h1 class="flex text-[16px]">Brand</h1>
                    <span id="logo-error" role="alert" class="text-red-500 text-xs hidden animate-bounce"></span>
                </div>

                <div class="flex w-full justify-evenly gap-2 ">

                    <div class="flex w-full h-full flex-col gap-[6px]">
                        {{-- <label class="text-[12px] font-medium text-[#17191C]">
                            Logo <span class="text-red-500">*</span>
                        </label> --}}
                        <input type="file" id="logo_id" name="logo" accept="image/*" required class="hidden " />
                        <label for="logo_id" id="LogoImg"
                            class="btn btn-outline w-full rounded-lg custom-dashed h-[128px] border-[#C1C3C7] bg-[#F5F5F5] addImg">
                            <i class="fa-solid fa-upload"></i> Choose logo
                        </label>

                    </div>

                    <div class="flex w-full h-full gap-[12px] flex-col">
                        <div class="flex flex-col gap-[6px] h-[58px]">
                            <div class="flex gap-5">
                                <label class="text-[12px] font-medium text-[#17191C]">
                                    Website Name <span class="text-red-500">*</span>
                                </label>
                                <span id="CompanyName-error" role="alert"
                                    class="text-red-500 text-xs  hidden animate-bounce"></span>
                            </div>
                            <input type="text" name="company_name" id="company_name" required
                                placeholder="e.g. Acme Corp"
                                class="input input-bordered input-sm w-full border-[#C1C3C7] rounded-lg h-[34px] custom-input" />
                        </div>

                        <div class="flex flex-col gap-[6px]">
                            <label class="text-[12px] font-medium text-[#17191C]">Site Name</label>
                            <input type="text" id="report_header" placeholder="Report header text"
                                class="input input-bordered input-sm w-full border-[#C1C3C7] rounded-lg custom-input h-[34px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col gap-[8px] ">

                <p class="text-[16px] font-medium text-black ">Colors</p>
                <div class=" w-full grid grid-cols-2 sm:grid-cols-4 gap-[12px] ">

                    <div class="flex flex-col items-center gap-[6px] ">
                        <div class="flex gap-2 w-full ">
                            <div id="primaryColorWrapper" class="flex rounded-[4px] overflow-hidden border-0">
                                <input type="color" id="primary_color" name="primary_color" value="#3b82f6"
                                    class="w-[35px] h-[35px] cursor-pointer border-0 p-0" />
                            </div>
                            <span class="text-sm items-center flex text-black">Primary</span>
                        </div>
                        <input type="text" id="primaryColorHex" name="primaryColorHex" value="#3b82f6"
                            class="text-xs bg-base-200 rounded-lg px-3 py-2 font-medium h-[34px] border border-[#C1C3C7]  w-full" />
                    </div>

                    <div class="flex flex-col items-center gap-[6px] ">
                        <div class="flex gap-2 w-full">
                            <div id="secondaryColorWrapper" class=" rounded-[4px] overflow-hidden border-0 flex ">
                                <input type="color" id="secondary_color" name="secondary_color" value="#3b82f6"
                                    class="w-[35px] h-[35px] cursor-pointer border-0 p-0" />
                            </div>
                            <span class="text-sm  items-center flex text-black">Secondary</span>
                        </div>
                        <input type="text" id="secondaryColorHex" name="secondaryColorHex" value="#3b82f6"
                            class="text-xs bg-base-200 rounded-lg px-3 py-2 font-medium h-[34px] border border-[#C1C3C7]  w-full" />
                    </div>

                    <div class="flex flex-col items-center gap-[6px] ">
                        <div class="flex gap-2 w-full">
                            <div id="accentColorWrapper" class=" rounded-[4px] overflow-hidden border-0 flex ">
                                <input type="color" id="accent_color" name="accent_color" value="#3b82f6"
                                    class="w-[35px] h-[35px] cursor-pointer border-0 p-0" />
                            </div>
                            <span class="text-sm  items-center flex text-black">Accent</span>
                        </div>

                        <input type="text" id="accentColorHex" name="accentColorHex" value="#3b82f6"
                            class="text-xs bg-base-200 rounded-lg px-3 py-2 font-medium h-[34px] border border-[#C1C3C7]  w-full" />
                    </div>

                    <div class="flex flex-col items-center gap-[6px]">
                        <div class="flex gap-2 w-full">
                            <div id="backgroundColorWrapper" class=" rounded-[4px]  overflow-hidden border-0  flex ">
                                <input type="color" id="background_color" name="background_color" value="#3b82f6"
                                    class="w-[35px] h-[35px] cursor-pointer border-0 p-0" />
                            </div>

                            <span class="text-sm  flex items-center text-black">
                                Background
                            </span>
                        </div>

                        <input type="text" id="backgroundColorHex" name="backgroundColorHex" value="#3b82f6"
                            class="text-xs bg-base-200 rounded-lg px-3 py-2 font-medium h-[34px] border border-[#C1C3C7] w-full" />
                    </div>
                </div>
            </div>

            {{-- Row 4: Typography (2 columns side by side) --}}
            <div class="flex flex-col gap-2 ">
                <p class="text-[16px] font-medium text-[#17191C] ">Typography</p>
                <div class="flex w-full justify-between gap-2">

                    {{-- Header Font --}}
                    <div class="flex w-full flex-col gap-2">

                        <label class="text-[12px] font-medium text-[#17191C]">Header font</label>

                        <select id="header_font" name="header_font" class="h-[34px]" required>
                            <option disabled selected>Pick a font</option>
                        </select>
                        {{-- <div class="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2">
                            <input type="color" id="HeaderFont_color" name="HeaderFont_color" value="#000000"
                                class="w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0" />
                            <div class="flex flex-col min-w-0">
                                <span class="text-xs text-gray-400">Font color</span>
                                <input type="text" id="HeaderFontColorHex" name="HeaderFontColorHex" value="#000000"
                                    class="text-xs font-medium bg-transparent border-0 p-0 w-full" />
                            </div>
                        </div> --}}
                    </div>

                    {{-- Body Font --}}
                    <div class="flex w-full flex-col gap-2">

                        <label class="text-[12px] font-medium text-[#17191C]">Body font 
                        </label>

                        <select id="body_font" name="body_font" class="h-[34px]" required>
                            <option disabled selected>Pick a font</option>
                        </select>
                        {{-- <div class="flex items-center gap-2 bg-base-200 rounded-lg px-3 py-2">
                            <input type="color" id="BodyFont_color" name="BodyFont_color" value="#ffffff"
                                class="w-8 h-8 rounded-md cursor-pointer border-0 bg-transparent p-0" />
                            <div class="flex flex-col min-w-0">
                                <span class="text-xs text-gray-400">Font color</span>
                                <input type="text" id="BodyFontColorHex" name="BodyFontColorHex" value="#ffffff"
                                    class="text-xs font-medium bg-transparent border-0 p-0 w-full" />
                            </div>
                        </div> --}}
                    </div>

                </div>
            </div>

            {{-- Row 5: Carousel --}}
            <div class="w-full h-full flex flex-col gap-[8px] ">
                <p class="text-[16px] font-medium text-black">Carousel images</p>
                <span id="CarouselError" class="text-red-500 text-xs mb-2 hidden animate-bounce"></span>

                <input type="file" id="carouselImg" name="carouselImg" accept="image/* multiple class="hidden" />
                <label for="carouselImg" id="addImg"
                    class="btn btn-outline bg-[#F5F5F5] w-full rounded-lg custom-dashed border-[#C1C3C7] addImg border h-[120px]">
                    <i class="fa-solid fa-upload text-sm"></i> Add carousel images
                </label>

                <div class="w-full pb-5 overflow-x-scroll">
                    <div id="imgContainer" class="flex gap-5 "></div>
                </div>
            </div>

            {{-- Action Buttons --}}
            <div class="w-full h-full justify-between gap-[12px] flex  ">

                <div class="flex w-full">
                    <form method="dialog" class="w-full flex">
                        <button
                            class="btn btn-outline flex hover:bg-red-500 border-red-500 text-red-500 rounded-[4px] hover:text-white w-full">Cancel</button>
                    </form>
                </div>

                <div class="flex w-full h-full">
                    <button id="executeSavebtn"
                        class="btn bg-[#18B173] text-white rounded-[4px] h-[40px] w-full">Save</button>
                    <button id="executeEditbtn"
                        class="btn bg-[#18B173] text-white rounded-[4px] h-[40px] w-full">Confirm</button>
                </div>

            </div>

        </div>
    </div>
</dialog>

<script type="module" src="/app/module/theme.js"></script>
<script type="module" src="/app/helper/theme_state.js"></script>
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

<!-- Bootstrap Select JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.14.0-beta3/dist/js/bootstrap-select.min.js"></script>

@endsection
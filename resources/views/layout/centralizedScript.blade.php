<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport">
    <title>Color Theme Page</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    {{-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/app/helper/sweetalert.js"></script> --}}
    <link rel="stylesheet" href="{{ asset('static/css/style.css') }}">
    {{-- Google Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Roboto&display=swap"
        rel="stylesheet">

    {{-- <script src="https://cdn.jsdelivr.net/npm/jquery-sortablejs@latest/jquery-sortable.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/Sortable.min.js"></script> --}}

    {{-- <script src="{{ asset('js/getActive.js') }}"></script>
    <script src="{{ asset('js/AddThemeModal.js') }}"></script> --}}
    {{-- <script type="module" src="/app/module/login.js"></script> --}}

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">

    {{-- tomselect --}}
    <link href="https://cdn.jsdelivr.net/npm/tom-select/dist/css/tom-select.css" rel="stylesheet">
    {{-- <script src="https://cdn.jsdelivr.net/npm/tom-select/dist/js/tom-select.complete.min.js"></script> --}}

    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Roboto&display=swap"
        rel="stylesheet">

        {{-- DataTables CSS --}}
    <link rel="stylesheet"
        href="https://cdn.datatables.net/2.3.1/css/dataTables.dataTables.min.css">


</head>
<body>

@yield('content')

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/app/helper/sweetalert.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-sortablejs@latest/jquery-sortable.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.2/Sortable.min.js"></script>
<script type="module" src="/app/module/login.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tom-select/dist/js/tom-select.complete.min.js"></script>
    {{-- DataTables --}}
<script src="https://cdn.datatables.net/2.3.1/js/dataTables.min.js"></script>

</body>


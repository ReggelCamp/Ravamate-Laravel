<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <title>@yield('title', 'Dashboard')</title>

    {{-- Tailwind --}}
    @vite(['resources/css/app.css'])

    {{-- Fontawesome --}}
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

    {{-- Custom CSS --}}
    <link rel="stylesheet" href="{{ asset('static/css/style.css') }}">

    {{-- Google Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Roboto&display=swap" rel="stylesheet">

    {{-- Owl Carousel CSS --}}
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">

    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

    {{-- DataTables CSS --}}
    <link rel="stylesheet"
        href="https://cdn.datatables.net/2.3.1/css/dataTables.dataTables.min.css">

    {{-- Buttons CSS --}}
    <link rel="stylesheet"
        href="https://cdn.datatables.net/buttons/3.2.3/css/buttons.dataTables.min.css">

    <style>
        .owl-carousel {
            perspective: 1200px;
        }

        .owl-carousel .owl-item .item {
            transform: scale(0.8);
            transition: all 0.4s ease;
        }

        .owl-carousel .owl-item.center .item {
            transform: scale(1.1) rotateX(8deg) rotateY(-8deg);
        }

        /* Light mode (default) */
        /* :root {
        --card: #f1f1f1;
        --salesmanTable: #f1f1f1;
        background: var(--background);
        color: var(--header-color);
        } */

        /* Dark mode */
        /* [data-theme="dark"] {
        --bg: #111111;
        --text: #f1f1f1;
        --card: #1e1e1e;
        --salesmanTable: #1e1e1e;
        } */

    </style>

    @stack('styles')

    <script>
    document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme") || "light"
    );
</script>

</head>

<body class="w-full h-screen">

    <x-header/>
    

    {{-- jQuery FIRST --}}
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    {{-- Owl Carousel --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

    {{-- DataTables --}}
    <script src="https://cdn.datatables.net/2.3.1/js/dataTables.min.js"></script>

    {{-- Buttons --}}
    <script src="https://cdn.datatables.net/buttons/3.2.3/js/dataTables.buttons.min.js"></script>

    {{-- Excel Dependency --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

    {{-- HTML5 Export --}}
    <script src="https://cdn.datatables.net/buttons/3.2.3/js/buttons.html5.min.js"></script>

    {{-- Print --}}
    <script src="https://cdn.datatables.net/buttons/3.2.3/js/buttons.print.min.js"></script>

    {{-- Tailwind Plus --}}
    <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>

    {{-- Moment --}}
    <script src="https://cdn.jsdelivr.net/npm/moment/min/moment.min.js"></script>

    {{-- DateRangePicker --}}
    <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

    {{-- Your JS --}}
    <script type="module" src="/app/helper/theme_state.js"></script>
    <script type="module" src="/app/module/salesman.js"></script>
    <script type="module" src="/app/module/dropdown.js"></script>
    <script type="module" src="/app/module/user.js"></script>

    @stack('scripts')
    
    @yield('content')
</label>
</body>
</html>
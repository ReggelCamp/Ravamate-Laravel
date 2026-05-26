<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>@yield('title', 'Dashboard')</title>

    {{-- Tailwind / CSS --}}
    @vite(['resources/css/app.css'])
    <link rel="stylesheet" href="{{ asset('static/css/style.css') }}">

    {{-- Owl Carousel CSS --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

    {{-- DataTables CSS (optional but recommended) --}}
    <link rel="stylesheet" href="https://cdn.datatables.net/2.3.1/css/dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>
   
     <script src="https://cdn.datatables.net/2.3.1/js/dataTables.min.js"></script> 

     {{-- Google Font --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Roboto&display=swap" rel="stylesheet">

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
    </style>

    @stack('styles')
</head>

<body class="w-full h-screen">
    <x-header/>
    {{-- MAIN CONTENT --}}
    @yield('content')


    {{-- 1. jQuery FIRST --}}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    {{-- 2. Plugins that depend on jQuery --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="https://cdn.datatables.net/2.3.1/js/dataTables.min.js"></script>

    {{-- Moment (if you use it) --}}
    <script src="https://cdn.jsdelivr.net/npm/moment/min/moment.min.js"></script>

    {{-- DateRangePicker --}}
    <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

    {{-- 3. Your App JS LAST --}}
    <script type="module" src="/app/module/dashboard.js"></script>
    <script type="module" src="/app/module/salesman.js"></script>

    @stack('scripts')

</body>
</html>
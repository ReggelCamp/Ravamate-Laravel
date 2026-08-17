@extends('layout.app')

@section('content')

    <div id="digital_map_container" class="w-full h-full"></div>

@endsection

@push('scripts')
    <script type="module" src="/app/module/digital_map/digitalMap.js"></script>
@endpush
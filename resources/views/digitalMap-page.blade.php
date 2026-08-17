@extends('layout.app')

@section('content')

    <div id="digital_map_container" class="w-full h-full"></div>

@endsection

<script>
    window.googleMapsApi = @json(config('services.google_maps.api_key'));
</script>

<script type="module" src="/app/module/digital_map/digitalMap.js"></script>
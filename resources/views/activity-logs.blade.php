<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"  content="{{ csrf_token() }}">
        <title>Activity Logs</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
        <h1>Activity Logs</h1>
        <table class="table">
    <thead>
        <tr>
            <th>User</th>
            <th>Theme</th>
            <th>Action</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
    </thead>

    <tbody id="activity-logs-body">
    </tbody>
</table>
    </body>
    <script type="module" src="/app/module/activitylog.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</html>
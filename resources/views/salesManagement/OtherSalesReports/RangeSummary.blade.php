<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Not Available</title>
<style>
    :root {
        --primary: #7a1f33;
        --primary-light: #a8354f;
        --ink: #2a1116;
        --paper: #fdf6f4;
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--paper);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: var(--ink);
    }

    .wrap {
        text-align: center;
        max-width: 360px;
        padding: 40px 32px;
    }

    .mark {
        width: 56px;
        height: 56px;
        margin: 0 auto 24px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary), var(--primary-light));
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mark svg {
        width: 24px;
        height: 24px;
        stroke: #fff;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    h1 {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.01em;
        margin: 0 0 8px;
    }

    p {
        font-size: 14px;
        line-height: 1.5;
        color: #7a5a60;
        margin: 0;
    }
</style>
</head>
<body>
    <div class="wrap">
        <div class="mark">
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9 9l6 6M15 9l-6 6"></path>
            </svg>
        </div>
        <h1>Not available in this version</h1>
        <p>This feature isn't included in your current release.</p>
    </div>
</body>
</html>
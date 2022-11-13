<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="favicon.ico">
    <link rel="manifest" href="manifest.json">
    <title>{{ env('APP_NAME', 'Default Title') }}</title>
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <noscript>
        <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
        <app />
    </div>

    <script src="js/app.js"></script>
</body>

</html>
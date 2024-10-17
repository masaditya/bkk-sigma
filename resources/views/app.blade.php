<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#000000">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia

    <script src="https://getchat.app/assets/js/min/getchatapp.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var gcaMain = new GetChatApp({
                'mobileNumber': '+628993872173',
                'titleMessage': '👋 Terhubung dengan BKK Sigma di WhatsApp!',
                'welcomeMessage': 'Selamat datang di BKK Sigma SMKN 1 Bojonegoro! Jangan ragu untuk bertanya apa saja seputar karier atau lowongan pekerjaan. Ketik pesanmu di sini, dan tim kami akan segera merespon langsung! 🔥<br><br>~BKK Sigma Team',
                'position': 'right',
                'platforms': {
                    'whatsapp': true,
                    'facebook': false,
                    'email': false,
                    'instagram': false,
                    'telegram': false,
                    'x': false,
                    'tiktok': false,
                    'linkedin': false,
                    'phone': false,
                    'customLink': false
                },
                'facebookPageId': '',
                'facebookMessage': 'Hi there!<br><br>Start chatting with us now!',
                'facebookReplyTime': 'a day',
                'gcaEmailAddress': '',
                'gcaEmailSubject': '',
                'gcaInstagramUsername': '',
                'gcaTelegramUsername': '',
                'gcaXUsername': '',
                'gcaTiktokUsername': '',
                'gcaLinkedinUsername': '',
                'gcaPhoneNumber': '',
                'gcaCustomLink': '',
                'multipleContacts': false
            });
        });
    </script>
</body>

</html>
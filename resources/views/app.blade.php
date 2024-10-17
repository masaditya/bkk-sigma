<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#000000">

    <link rel="icon" href="/favicon.png" />
    <!-- CSRF Token -->

    <!-- Meta Tags for SEO -->
    <title>BKK Sigma SMKN 1 Bojonegoro | Pusat Informasi Karier & Lowongan Kerja Alumni</title>
    <meta name="description" content="BKK Sigma SMKN 1 Bojonegoro membantu alumni menemukan peluang karier terbaik. Dapatkan informasi lowongan kerja, tracer study, dan jaringan alumni di sini.">
    <meta name="keywords" content="BKK, SMKN 1 Bojonegoro, Bursa Kerja, Lowongan Kerja, Alumni SMK, Tracer Study, Karier, Pusat Karier SMK, Perusahaan Mitra, Peluang Kerja">
    <meta name="author" content="BKK Sigma SMKN 1 Bojonegoro">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="BKK Sigma SMKN 1 Bojonegoro | Pusat Informasi Karier & Lowongan Kerja Alumni">
    <meta property="og:description" content="Platform terintegrasi untuk membantu alumni SMKN 1 Bojonegoro dalam menemukan peluang karier dan berjejaring dengan perusahaan mitra.">
    <meta property="og:image" content="https://bkk-sigma.dexotic.io/images/bkk-sigma.png"> <!-- Image link for preview -->
    <meta property="og:url" content="https://bkk-sigma.dexotic.io">
    <meta property="og:type" content="website">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="BKK Sigma SMKN 1 Bojonegoro | Pusat Informasi Karier & Lowongan Kerja Alumni">
    <meta name="twitter:description" content="Platform terdepan untuk membantu alumni menemukan karier yang sesuai dengan passion dan skill mereka.">
    <meta name="twitter:image" content="https://bkk-sigma.dexotic.io/images/bkk-sigma.png"> <!-- Image link for Twitter card -->

    <!-- Additional Meta Tags -->
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


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
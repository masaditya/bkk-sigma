<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/job', function () {
    return Inertia::render('Job');
});
Route::get('/job/{id}', function () {
    return Inertia::render('JobDetail');
});

Route::get('/job/{id}/apply', function () {
    return Inertia::render('JobApply');
})->middleware(['auth', 'verified'])->name('job.apply');

Route::get('/alumni', function () {
    return Inertia::render('Alumni');
});

Route::get('/tracer-study', function () {
    return Inertia::render('TracerStudy');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/article', function () {
    return Inertia::render('Article');
});

Route::get('/article/{id}', function () {
    return Inertia::render('ArticleDetail');
});

require __DIR__ . '/auth.php';

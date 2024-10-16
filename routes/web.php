<?php

use App\Http\Controllers\AlumniController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;
use App\Models\Article;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/update-resume', [DashboardController::class, 'updateResume'])->name('dashboard.update-resume');
    Route::get('/tracer-form', [DashboardController::class, 'tracerForm'])->name('dashboard.tracer-form');
    Route::post('/tracer-form', [DashboardController::class, 'tracerFormSubmit'])->name('dashboard.tracer-form-submit');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/applicant', [DashboardController::class, 'applicant'])->name('dashboard.applicant');
});

Route::get('/job', [JobController::class, 'index'])->name('job');
Route::get('/job/{id}', [JobController::class, 'show'])->name('job.show');
Route::post('/job/{id}/apply', [JobController::class, 'apply'])->name('job.apply');


Route::get('/article', [ArticleController::class, 'index'])->name('article');
Route::get('/article/{id}', [ArticleController::class, 'show'])->name('article.show');

Route::get('/alumni', [AlumniController::class, 'index'])->name('alumni');

Route::get('/tracer-study', [HomeController::class, 'tracerStudy'])->name('tracer-study');

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/about', function () {
    return Inertia::render('About');
});


require __DIR__ . '/auth.php';

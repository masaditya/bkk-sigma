<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Article;
use App\Models\CompanyIndustry;
use App\Models\EmploymentStatuses;
use App\Models\Major;
use App\Models\Occupations;
use App\Models\Testimoni;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{

    public function index(): Response
    {
        $user = Auth::user();
        $articles = Article::with(['category'])->latest()->take(3)->get();
        $companies = Admin::where('is_show', true)->whereNotNull('logo')->get();
        return Inertia::render('Welcome', [
            'user' => $user,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'articles' => $articles,
            'companies' => $companies
        ]);
    }

    public function tracerStudy(): Response
    {
        $user = Auth::user();
        $testimonials = Testimoni::with(['user'])->get();
        return Inertia::render('TracerStudy', ['user' => $user, 'testimonials' => $testimonials]);
    }
}

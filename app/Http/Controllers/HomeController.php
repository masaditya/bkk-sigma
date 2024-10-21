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
        $partners = Admin::whereNotNull('logo')->where('is_partner', 1)->where('is_show', 1)->get();
        return Inertia::render('Welcome', [
            'user' => $user,
            'articles' => $articles,
            'partners' => $partners
        ]);
    }

    /**
     * Handle the incoming request.
     *
     * @return \Inertia\Response
     */
    public function tracerStudy(): Response
    {
        $user = Auth::user();
        $testimonials = Testimoni::with(['user'])->get();
        return Inertia::render('TracerStudy', ['user' => $user, 'testimonials' => $testimonials]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\CompanyIndustry;
use App\Models\EmploymentStatuses;
use App\Models\Major;
use App\Models\Occupations;
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

class AlumniController extends Controller
{

    public function index(Request $request): Response
    {
        $user = Auth::user();
        $page = $request->query('page');
        $alumnis = User::query()->with(['major', 'status', 'companyIndustry'])->where('is_alumni', 1);
        if ($request->query('name')) {
            $alumnis = $alumnis->where('name', 'LIKE', "%{$request->query('name')}%");
        }

        if ($request->query('year')) {
            $alumnis = $alumnis->where('graduation_year', 'LIKE', "%{$request->query('year')}%");
        }
        $alumnis = $alumnis->paginate(9, ['*'], 'page', $page);


        return Inertia::render('Alumni', [
            'user' => $user,
            'alumnis' => $alumnis,
            'page' => $page
        ]);
    }


    public function show($id)
    {
        $article = Article::with(['category'])->find($id);
        $relatedArticles = Article::where('category_id', $article->category_id)->where('id', '!=', $id)->take(3)->get();
        $categories = Category::all();
        return Inertia::render('ArticleDetail', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
            'categories' => $categories,
        ]);
    }
}

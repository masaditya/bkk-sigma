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

class ArticleController extends Controller
{

    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * @param Request $request
     * @return Response
     */
    // Get paginated articles, with optional name and location filters.
    // Return an Inertia response with the articles and the current page.
    /******  d18405ff-3113-47af-95e8-d697c1a6f44e  *******/
    public function index(Request $request): Response
    {
        $user = Auth::user();
        $page = $request->query('page');
        $categories = Category::all();
        $articles = Article::query()->with(['category'])->orderBy('created_at', 'desc');
        if ($request->query('name')) {
            $articles = $articles->where('title', 'LIKE', "%{$request->query('name')}%");
        }

        if ($request->query('category')) {
            $articles = $articles->where('category_id', $request->query('category'));
        }
        $articles = $articles->paginate(9, ['*'], 'page', $page);

        return Inertia::render('Article', [
            'user' => $user,
            'articles' => $articles,
            'page' => $page,
            'categories' => $categories
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

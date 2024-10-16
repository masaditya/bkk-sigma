<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
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
use Illuminate\Support\Str;


class JobController extends Controller
{

    public function index(Request $request): Response
    {
        $user = Auth::user();
        $page = $request->query('page');
        $jobs = Occupations::query()->with(['company_industry']);
        if ($request->query('name')) {
            $jobs = $jobs->where('title', 'LIKE', "%{$request->query('name')}%");
        }

        if ($request->query('location')) {
            $jobs = $jobs->where('location', 'LIKE', "%{$request->query('location')}%");
        }
        $jobs = $jobs->paginate(10, ['*'], 'page', $page);


        return Inertia::render('Job', [
            'user' => $user,
            'jobs' => $jobs,
            'page' => $page
        ]);
    }


    /**
     * Display the specified job and related jobs on the JobDetail page.
     *
     * @param int $id The ID of the job to display
     * @return \Inertia\Response
     */
    public function show($id)
    {
        $job = Occupations::find($id);
        $relatedJobs = Occupations::latest()->take(3)->get();

        $user = Auth::user();
        $job = Occupations::find($id);
        $check = false;
        if ($user) {
            $check = Applicant::where('id_user', $user->id)->where('id_occupation', $job->id)->exists();
        }
        return Inertia::render('JobDetail', [
            'job' => $job,
            'relatedJobs' => $relatedJobs,
            'isApplied' => $check,
        ]);
    }

    public function apply($id)
    {
        $job = Occupations::find($id);
        $user = Auth::user();
        Applicant::create([
            'id' => Str::uuid(),
            'id_user' => $user->id,
            'id_occupation' => $job->id,
        ]);
        return Redirect::route('job.show', $job->id);
    }
}
